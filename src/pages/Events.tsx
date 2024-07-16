import Footer from "../components/Footer";
import Header from "../components/Header";

const Events = () => {
  return (
    <div>
      <div className="sticky top-0 z-40 bg-blue-100/50">
        <Header></Header>
      </div>
      <main
        className="relative min-h-[70vh] text-white  "
        style={{
          backgroundImage:
            'url("https://pc2023.coign.in/_astro/events-hero.03787410.jpg")',
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute w-full h-full bg-black/70 flex flex-col justify-center items-center p-2 ">
          <h1 className="text-4xl font-bold text-center astro-RO7PGS3H">
            Events that help you grow
          </h1>
          <p className="max-w-md mt-4 font-medium text-center md:text-lg  text-gray-300">
            Get access to free LIVE events that help you learn. These events are
            conducted by industry experts who possess extensive expertise in
            their respective fields. The events that actually help you learn!!!
          </p>
          <a
            href="#events"
            className="px-4 py-2 mt-4 rounded-xl  bg-[#00A3EA] astro-RO7PGS3H"
          >
            Find now
          </a>
        </div>
      </main>
      <div className="bg-[#f0f8ff]">
        <div className="mx-auto max-w-[65rem] px-5 py-8 md:py-16 ">
          <h1 className="text-[24px] md:text-[36px] font-bold">Events</h1>
          <p className="mt-8 text-center">
            No events found. Please check back later or subscribe to our
            newsletter
          </p>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Events;
