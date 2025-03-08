import Image from "next/image";
import ImageButton from "@/app/components/image-button";

export default function Home() {
  return (
    <div className="grid grid-cols-1 grid-rows-[auto_1fr_auto] min-h-[100dvh] h-[100dvh] font-[family-name:var(--font-geist-sans)] p-8">
      <div className="flex flex-row justify-center">
          <div className="bg-neutral-600 p-1.5 rounded-xl">
              <div className="flex space-x-3">
                  <ImageButton logo="/gh.png" alt="Github Profile SW-418" url="https://github.com/SW-418" size={50} />
                  <ImageButton logo="/leetcode.png" alt="Leetcode Profile" url="https://leetcode.com/u/samwells95" size={50} />
                  <ImageButton logo="/insta.png" alt="Instagram Profile" url="https://www.instagram.com/__sam.wells" size={50} />
                  <ImageButton logo="/linkedin.png" alt="LinkedIn Profile" url="https://www.linkedin.com/in/sw-418" size={50} />
              </div>
          </div>
      </div>
      <main className="flex flex-col items-center justify-center">
          <div className="flex justify-center items-center space-x-7">
              <Image src="/sw.jpg" alt="profile picture" width={100} height={100} className="rounded-xl" />
              <div className="text-sm text-left">
                  <h1>Hi - I&apos;m Sam 👋</h1>
                  <p>I&apos;m a Software Engineer predominantly focused on backend development 👨🏽‍💻</p>
              </div>
          </div>
      </main>
      <footer className="flex justify-center text-sm self-end"> Created and maintained by ya boi </footer>
    </div>
  );
}
