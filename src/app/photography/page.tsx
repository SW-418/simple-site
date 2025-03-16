import NavigationBar from "../components/navigation-bar";
import ImageWithDescription from "../components/image-with-description";
import Footer from "../components/footer";

export default function Photography() {
    return (
        <div className="min-h-[100dvh] font-[family-name:var(--font-geist-sans)] flex flex-col w-[90%] md:w-[80%] xl:w-[70%] 2xl:w-[60%] mx-auto">
          <div className="sticky top-0 z-10 pt-4">
            <NavigationBar navigatedPage="/" navigatedPageText="Home" />
          </div>
          <main className="flex-1 pt-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                <ImageWithDescription image="/mamab.jpg" description="Mama Bear - Toba Inlet" />
                <ImageWithDescription image="/eclipse.jpg" description="Lunar Eclipse 2025" />
                <ImageWithDescription image="/lake.jpg" description="Johnson Lake" />
                <ImageWithDescription image="/tip.jpg" description="Mount Girouard - Banff" />
                <ImageWithDescription image="/heron.jpg" description="Heron - Lost Lagoon" />
                <ImageWithDescription image="/inukshuk.jpg" description="Inukshuk - Vancouver Seawall" />
                <ImageWithDescription image="/coyote.jpg" description="Coyote - Near Kamloops" />
                <ImageWithDescription image="/eagle.jpg" description="Eagle - UBC" />
                <ImageWithDescription image="/sunset.jpg" description="Sunset" />
                <ImageWithDescription image="/dahlia.jpg" description="Dahlia - Butchart Gardens" />
                <ImageWithDescription image="/ice.jpg" description="Icy" />
                <ImageWithDescription image="/camp.jpg" description="Backcountry Camp - Lindeman Lake" />
              </div>
          </main>
          <div className="p-8 pt-4 flex justify-center">
            <Footer />
          </div>
        </div>
      );
}
