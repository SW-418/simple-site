import Image from "next/image";

interface ImageWithDescriptionProps {
    /** Image to display */
    image: string;
    /** Description of image */
    description: string;
}

export default function ImageWithDescription({ image, description }: ImageWithDescriptionProps) {
    return (
        <div className="flex flex-col items-center justify-center">
            <Image src={image} alt={description} width={650} height={650} className="rounded-xl" />
            <p>{description}</p>
        </div>
    );
}
