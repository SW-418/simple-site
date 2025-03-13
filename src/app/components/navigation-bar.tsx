import Link from "next/link";
import ImageButton from "./image-button";

interface NavigationBarProps {
    /** Page to navigate to */
    navigatedPage?: string;
    /** Text to display for page navigation button */
    navigatedPageText?: string;
}

export default function NavigationBar({ navigatedPage = "/", navigatedPageText = "Home" }: NavigationBarProps) {
    return (
        <div className="flex flex-row justify-center">
            <div className="flex flex-col">
                <div className="bg-neutral-600 p-1.5 rounded-xl">
                    <div className="flex space-x-3 pb-2">
                        <ImageButton logo="/gh.png" alt="Github Profile SW-418" url="https://github.com/SW-418" size={50} />
                        <ImageButton logo="/leetcode.png" alt="Leetcode Profile" url="https://leetcode.com/u/samwells95" size={50} />
                        <ImageButton logo="/insta.png" alt="Instagram Profile" url="https://www.instagram.com/__sam.wells" size={50} />
                        <ImageButton logo="/linkedin.png" alt="LinkedIn Profile" url="https://www.linkedin.com/in/sw-418" size={50} />
                    </div>
                    <div className="bg-black p-1 rounded-xl flex justify-center hover:bg-neutral-00">
                        <Link href={navigatedPage}>{navigatedPageText}</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
