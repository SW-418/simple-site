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
        <nav className="bg-white/5 backdrop-blur-sm w-[60%] md:w-[50%] lg:w-[45%] min-w-[340px] rounded-lg mx-auto">
            <div className="flex items-center justify-between p-2 pl-2 pr-2">
            <Link 
                href={navigatedPage}
                className="text-black text-sm bg-white/10 hover:bg-white/15 backdrop-blur-sm px-2 py-1.5 rounded-lg transition-colors font-medium min-w-[90px] text-center"
            >
                {navigatedPageText}
            </Link>

            <div className="flex bg-white/10 rounded-lg gap-3 p-1.5">
                <ImageButton logo="/gh.png" alt="Github Profile SW-418" url="https://github.com/SW-418" size={24} />
                <ImageButton logo="/insta.png" alt="Instagram Profile" url="https://www.instagram.com/__sam.wells" size={24} />
                <ImageButton logo="/linkedin.png" alt="LinkedIn Profile" url="https://www.linkedin.com/in/sw-418" size={24} />
            </div>
            </div>
        </nav>
    );
}
