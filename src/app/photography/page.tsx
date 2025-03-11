import NavigationBar from "../components/navigation-bar";
import ImageWithDescription from "../components/image-with-description";
import Footer from "../components/footer";

export default function Photography() {
    return (
        <div className="grid grid-cols-1 grid-rows-[auto_1fr_auto] min-h-[100dvh] h-[100dvh] font-[family-name:var(--font-geist-sans)] p-8">
          <NavigationBar />
          <main className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center text-2xl color-yellow pt-8">
                <h1> Work In Progress</h1>
                <h1> Please enjoy each Heron equally </h1>
            </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-8 pb-8">
                <ImageWithDescription image="/heron.jpg" description="Heron - Lost Lagoon" />
                <ImageWithDescription image="/heron.jpg" description="Heron - Lost Lagoon" />
                <ImageWithDescription image="/heron.jpg" description="Heron - Lost Lagoon" />
                <ImageWithDescription image="/heron.jpg" description="Heron - Lost Lagoon" />
                <ImageWithDescription image="/heron.jpg" description="Heron - Lost Lagoon" />
                <ImageWithDescription image="/heron.jpg" description="Heron - Lost Lagoon" />
                <ImageWithDescription image="/heron.jpg" description="Heron - Lost Lagoon" />
                <ImageWithDescription image="/heron.jpg" description="Heron - Lost Lagoon" />
                <ImageWithDescription image="/heron.jpg" description="Heron - Lost Lagoon" /> 
                <ImageWithDescription image="/heron.jpg" description="Heron - Lost Lagoon" />
                <ImageWithDescription image="/heron.jpg" description="Heron - Lost Lagoon" />
                <ImageWithDescription image="/heron.jpg" description="Heron - Lost Lagoon" />
              </div>
          </main>
          <Footer />
        </div>
      );
}
