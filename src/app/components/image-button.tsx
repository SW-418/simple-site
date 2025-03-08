import Image from "next/image";

interface ImageButtonProps {
    /** Logo file name */
    logo: string;
    /** Alt text for image */
    alt: string;
    /** URL to link to when clicked */
    url: string;
    /** Image size - Used for height and width */
    size: number;
}

export default function ImageButton({ logo, alt, url, size }: ImageButtonProps) {
    return (
        <a href={url}>
            <Image src={logo} alt={alt} width={size} height={size} />
        </a>
    )
}
