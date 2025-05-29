# simple-site

Basic site using React/NextJS/Typescript.

Deployed via AWS as a static site to a private S3 bucket. Content served via a CDN (CloudFront).

## Setup

```bash
# Install dependencies
yarn
```

## Development

```bash
# Start development server
yarn dev
```

Navigate to [http://localhost:3000](http://localhost:3000)
- Hot reload enabled
- Changes will refresh automatically

## Production Build

```bash
# Clean previous builds
yarn clean

# Build production assets
yarn build

# Serve production build
yarn start
```

Navigate to [http://localhost:3000](http://localhost:3000)
- Static production build
- Matches deployed environment
- No hot reload

## Testing

### End-to-End Tests

This project uses [Playwright](https://playwright.dev/) for end-to-end (E2E) testing. These tests build the application, serve it locally, and then simulate user interactions in a real browser to verify the functionality of key pages. Currently, tests cover the home page.

To run the E2E tests:

```bash
yarn test:e2e
```

This command will execute all tests defined in the `tests/e2e` directory.
