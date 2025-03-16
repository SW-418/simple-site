import Image from "next/image";
import NavigationBar from "@/app/components/navigation-bar";
import Footer from "@/app/components/footer";

export default function Home() {
  return (
    <div className="min-h-[100dvh] font-[family-name:var(--font-geist-sans)] flex flex-col w-[90%] md:w-[80%] xl:w-[60%] mx-auto">
      <div className="sticky top-0 z-10 pt-4">
        <NavigationBar navigatedPage="/photography" navigatedPageText="Photography" />
      </div>
      <main className="flex-1 flex items-center justify-center p-2">
          <div className="flex justify-center items-center space-x-5">
              <Image src="/sw.jpg" alt="profile picture" width={125} height={125} className="rounded-xl" />
              <div className="text-sm md:text-base text-left">
                  <h1>Hi - I&apos;m Sam 👋</h1>
                  <br />
                  <p>I&apos;m a Software Engineer mainly focused on backend development 👨🏽‍💻</p>
              </div>
          </div>
      </main>
      <div className="p-8 pt-4 flex justify-center">
        <Footer />
      </div>
    </div>
  );
}
