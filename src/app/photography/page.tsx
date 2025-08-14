import NavigationBar from "../components/navigation-bar";
import ImageWithDescription from "../components/image-with-description";
import { photos } from "./images";

export default function Photography() {
    return (
        <div className="min-h-[100dvh] font-[family-name:var(--font-geist-sans)] flex flex-col w-[90%] md:w-[80%] xl:w-[70%] 2xl:w-[60%] mx-auto pb-8">
          <div className="sticky top-0 z-10 pt-4">
            <NavigationBar navigatedPage="/" navigatedPageText="Home" />
          </div>
          <main className="flex-1 pt-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                {photos.map((photo, index) => (
                  <ImageWithDescription 
                    key={index}
                    image={photo.src} 
                    description={photo.description} 
                  />
                ))}
              </div>
          </main>
        </div>
      );
}
