import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <div className="flex items-center space-x-4">
              <div>
                  <Image src="/sw.jpg" alt="profile picture" width={200} height={200}/>
              </div>
              <div>
                  <h1>Hi - I&apos;m Sam 👋</h1>
                  <h1>I&apos;m a Software Engineer predominantly focused on backend development 👨🏽‍💻</h1>
              </div>
          </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <h3 className="text-sm text-center sm:text-left"> Created and maintained by ya boi </h3>
      </footer>
    </div>
  );
}
