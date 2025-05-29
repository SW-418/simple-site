import { test, expect, Page } from '@playwright/test';
import { execSync, spawn, ChildProcess } from 'child_process';
import { promisify } from 'util';

const PORT = 3000;
const BASE_URL = `http://localhost:${PORT}`;
const E2E_DIR = __dirname; // tests/e2e
const ROOT_DIR = `${E2E_DIR}/../..`; // Go up two levels to project root

let serverProcess: ChildProcess | null = null;
const sleep = promisify(setTimeout);

// Function to wait for the server to be ready
async function waitForServer(url: string, timeout = 30000, interval = 1000): Promise<void> {
  const startTime = Date.now();
  while (Date.now() - startTime < timeout) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        console.log(`Server is ready at ${url}`);
        return;
      }
    } catch (error) {
      // Ignore errors, server might not be up yet
    }
    await sleep(interval);
  }
  throw new Error(`Server at ${url} did not start within ${timeout / 1000} seconds.`);
}


test.describe('Home Page E2E Tests', () => {
  test.beforeAll(async () => {
    console.log('Building the project...');
    try {
      execSync('yarn build', { cwd: ROOT_DIR, stdio: 'inherit' });
      console.log('Build completed successfully.');
    } catch (error) {
      console.error('Failed to build the project:', error);
      throw error; // Stop tests if build fails
    }

    console.log(`Starting server on port ${PORT}...`);
    serverProcess = spawn('npx', ['serve', '-l', String(PORT), 'out'], {
      cwd: ROOT_DIR,
      stdio: 'inherit', // Pipe server output to test output
      detached: false, // Important for killing the process tree
    });

    serverProcess.on('error', (err) => {
      console.error('Failed to start server process:', err);
      // If the server fails to start, we should probably throw an error
      // to stop the tests, but afterAll might not run.
      // For now, log and let waitForServer handle timeout.
    });
    
    // Wait for the server to be ready
    try {
      await waitForServer(BASE_URL);
    } catch (error) {
      console.error("Server didn't start in time. Attempting to kill process before failing.");
      if (serverProcess && !serverProcess.killed) {
        const killed = serverProcess.kill('SIGTERM'); // or 'SIGKILL'
        console.log(`Server process kill attempt result: ${killed}`);
      }
      throw error; // Re-throw to fail the test suite
    }
  });

  test.afterAll(async () => {
    if (serverProcess && !serverProcess.killed) {
      console.log('Stopping the server...');
      const serverExitPromise = new Promise<void>((resolve, reject) => {
        serverProcess!.on('close', () => {
          console.log('Server process closed.');
          resolve();
        });
        serverProcess!.on('error', (err) => {
          console.error('Error stopping server process:', err);
          reject(err);
        });
      });
      
      // Send SIGINT (Ctrl+C) to 'serve', then SIGTERM if it doesn't close, then SIGKILL
      const killed = serverProcess.kill('SIGINT');
      console.log(`Attempted to kill server process with SIGINT (PID: ${serverProcess.pid}): ${killed}`);

      try {
        // Wait for a bit for SIGINT to work
        await Promise.race([
            serverExitPromise,
            sleep(5000).then(() => {if (!serverProcess?.killed) throw new Error("Server didn't close with SIGINT")})
        ]);
      } catch (e) {
        console.warn("Server didn't respond to SIGINT, trying SIGTERM...");
        if (serverProcess && !serverProcess.killed) {
            serverProcess.kill('SIGTERM');
             try {
                await Promise.race([
                    serverExitPromise,
                    sleep(5000).then(() => {if (!serverProcess?.killed) throw new Error("Server didn't close with SIGTERM")})
                ]);
            } catch (e2) {
                console.warn("Server didn't respond to SIGTERM, trying SIGKILL...");
                if (serverProcess && !serverProcess.killed) {
                    serverProcess.kill('SIGKILL');
                    await serverExitPromise; // Wait for SIGKILL
                }
            }
        }
      }
      serverProcess = null;
      console.log('Server stopped.');
    }
  });

  test('should load and display correctly', async ({ page }) => {
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });

    // Assert the profile picture
    const profilePic = page.getByAltText('profile picture');
    await expect(profilePic).toBeVisible();
    await expect(profilePic).toHaveAttribute('src', /\/sw.jpg/); // Regex to match any path ending with /sw.jpg

    // Assert the greeting text
    const heading = page.locator('h1');
    await expect(heading).toContainText("Hi - I'm Sam 👋");

    // Assert the introductory paragraph
    // Assuming this is the first <p> tag after the <h1> or within a specific identifiable container.
    // If the structure is <main> -> <section> -> <p>, this might be page.locator('main section p').first()
    // For simplicity, let's assume it's a unique enough paragraph or the most prominent one.
    const introParagraph = page.locator('p').filter({ hasText: /Photographer, runner, music lover/ });
    await expect(introParagraph).toContainText("Photographer, runner, music lover and software engineer based in Vancouver, BC, Canada 🇨🇦");
    await expect(introParagraph).toBeVisible();

    // Assert the navigation link to Photography
    const photographyLink = page.getByRole('link', { name: 'Photography' });
    await expect(photographyLink).toBeVisible();
    await expect(photographyLink).toHaveAttribute('href', '/photography');
  });
});
