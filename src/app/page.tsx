import Image from "next/image";
import NavigationBar from "@/app/components/navigation-bar";
import Footer from "@/app/components/footer";

export default function Home() {
  return (
    <div className="grid grid-cols-1 grid-rows-[1fr_1fr_1fr] min-h-[100dvh] h-[100dvh] font-[family-name:var(--font-geist-sans)] p-8">
      <NavigationBar navigatedPage="/photography" navigatedPageText="Photography" />
      <main className="flex flex-col items-center justify-center">
          <div className="flex justify-center items-center space-x-7">
              <Image src="/sw.jpg" alt="profile picture" width={125} height={125} className="rounded-xl" />
              <div className="text-sm md:text-base text-left">
                  <h1>Hi - I&apos;m Sam 👋</h1>
                  <p>I&apos;m a Software Engineer predominantly focused on backend development 👨🏽‍💻</p>
              </div>
          </div>
      </main>
      <Footer />
    </div>
  );
}
