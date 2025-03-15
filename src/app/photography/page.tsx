import NavigationBar from "../components/navigation-bar";
import ImageWithDescription from "../components/image-with-description";
import Footer from "../components/footer";

export default function Photography() {
    return (
        <div className="grid grid-cols-1 grid-rows-[auto_1fr_auto] min-h-[100dvh] font-[family-name:var(--font-geist-sans)] p-8">
          <NavigationBar />
          <main>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
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
          <Footer />
        </div>
      );
}
