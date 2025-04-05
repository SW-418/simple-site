import NavigationBar from "../components/navigation-bar";
import ImageWithDescription from "../components/image-with-description";

export default function Photography() {
    return (
        <div className="min-h-[100dvh] font-[family-name:var(--font-geist-sans)] flex flex-col w-[90%] md:w-[80%] xl:w-[70%] 2xl:w-[60%] mx-auto pb-8">
          <div className="sticky top-0 z-10 pt-4">
            <NavigationBar navigatedPage="/" navigatedPageText="Home" />
          </div>
          <main className="flex-1 pt-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                <ImageWithDescription image="/mamab.jpg" description="Mama Bear - Toba Inlet" />
                <ImageWithDescription image="/eclipse.jpg" description="Lunar Eclipse 2025" />
                <ImageWithDescription image="/lake.jpg" description="Johnson Lake" />
                <ImageWithDescription image="/rainbow.jpg" description="Rainbow - Near Prince Rupert" />
                <ImageWithDescription image="/sea.jpg" description="Void Check - Near Prince Rupert" />
                <ImageWithDescription image="/port.jpg" description="Port - Near Prince Rupert" />
                <ImageWithDescription image="/falls1.jpg" description="Stokes Creek Falls" />
                <ImageWithDescription image="/falls2.jpg" description="Little Qualicum Falls Provincial Park" />
                <ImageWithDescription image="/elk.jpg" description="Diabolical Sideye from an Elk - Youbou" />
                <ImageWithDescription image="/heron.jpg" description="Heron - Lost Lagoon" />
                <ImageWithDescription image="/chipmunk.jpg" description="Neotamias - Secret Cove" />
                <ImageWithDescription image="/inukshuk.jpg" description="Inukshuk - Vancouver Seawall" />
                <ImageWithDescription image="/tip.jpg" description="Mount Girouard - Banff" />
                <ImageWithDescription image="/coyote.jpg" description="Coyote - Near Kamloops" />
                <ImageWithDescription image="/eagle.jpg" description="Eagle - UBC" />
                <ImageWithDescription image="/sunset.jpg" description="Sunset" />
                <ImageWithDescription image="/dahlia.jpg" description="Dahlia - Butchart Gardens" />
                <ImageWithDescription image="/ice.jpg" description="Icy" />
                <ImageWithDescription image="/camp.jpg" description="Backcountry Camp - Lindeman Lake" />
                <ImageWithDescription image="/train.jpg" description="Train - Between Terrace and Prince Rupert" />
                <ImageWithDescription image="/boats.jpg" description="Boats - Powell Lake" />
              </div>
          </main>
        </div>
      );
}
