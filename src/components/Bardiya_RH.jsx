import React from "react";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";
import Bardiya_Carousel from "./Bardiya_Carousel";

const Bardiya_RH = () => {
  return (
    <div className="bg-[#c4c7c4] min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <div
        className="w-full h-[60vh] sm:h-[70vh] md:h-[80vh] bg-cover bg-center flex items-center justify-center relative"
        style={{
          backgroundImage: "url('/fishing4.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-bold z-10 text-center drop-shadow-lg px-4">
          Bardiya
        </h1>
      </div>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 text-gray-900 text-justify">
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
            BARDIA: An open university
          </h2>
          <p className="mb-4 leading-relaxed">
            Set in Nepal’s wild west, Bardia is home to the country's largest
            conservation area and a vibrant indigenous Tharu community. It’s a
            place where nature thrives—and where modern challenges meet
            traditional wisdom.
          </p>
          <ul className="list-disc list-inside space-y-3 mb-6 text-sm sm:text-base leading-relaxed">
            <li>
              <strong>Biodiversity Hotspot:</strong> Tigers, rhinos, elephants,
              dolphins, 800+ plant species and 600+ animal species call it home.
            </li>
            <li>
              <strong>Living Classroom:</strong> A perfect space to explore
              SDG-related issues in real time—conservation, equity, livelihoods,
              education, and more.
            </li>
            <li>
              <strong>Tension Between Worlds:</strong> Bardia exists at a unique
              temporal juncture—between long-held traditions and rapid modern
              development.
            </li>
            <li>
              <strong>Welcoming & Safe:</strong> A warm, open community eager to
              share, teach, and grow through mutual exchange.
            </li>
          </ul>
          <p className="mb-8 leading-relaxed">
            We consider Bardia an “Open University”—where learning is led by
            land, people, and the pressing questions of our time.
          </p>

          <h3 className="text-xl sm:text-2xl font-semibold mb-4">
            Accommodation in Bardia: Angna Ghar
          </h3>
          <p className="mb-4 font-semibold">
            Experience Authentic Village Life in the Wild West of Nepal
          </p>
          <p className="mb-4 leading-relaxed">
            Angna Ghar is a traditional Tharu-style mud longhouse, community-run
            by Kaka and Kaki—the local landowners and beloved village hosts. It
            serves as a living classroom in the heart of western Nepal’s Bardia
            district, just outside Bardia National Park, Nepal’s largest
            conservation area.
          </p>

          <div className="mb-10">
            <Bardiya_Carousel />
          </div>

          <h4 className="text-lg sm:text-xl font-semibold mb-2">
            Why Angna Ghar?
          </h4>
          <ul className="list-disc list-inside space-y-2 mb-6 text-sm sm:text-base leading-relaxed">
            <li>
              Stay in a mud-built Tharu longhouse that reflects indigenous
              architecture
            </li>
            <li>
              Participate in daily village life: cook, farm, herd goats and
              chickens, and share meals with locals
            </li>
            <li>
              Connect with the community through social bonding and storytelling
            </li>
            <li>Cultural hub</li>
            <li>
              Access to a wide range of conservation and adventure activities:
            </li>
            <ul className="list-disc list-inside ml-6 space-y-1 mt-1 text-sm sm:text-base leading-relaxed">
              <li>Wildlife safaris</li>
              <li>Rafting in the Karnali River</li>
              <li>Forest patrols with rangers</li>
              <li>Human-wildlife conflict discussions</li>
            </ul>
          </ul>

          <h4 className="text-lg sm:text-xl font-semibold mb-2">
            Accommodation Options:
          </h4>
          <p className="font-semibold text-sm sm:text-base">
            Dorm Rooms (Capacity: 28 students)
          </p>
          <ul className="list-disc list-inside mb-4 ml-6 space-y-1 text-sm sm:text-base leading-relaxed">
            <li>Clean dorms with beds</li>
            <li>Shared toilets/showers (non-attached)</li>
            <li>Provided: Beds, mattresses, blankets, towels, fans</li>
            <li>Bring your own slippers/sandals</li>
          </ul>

          <p className="font-semibold text-sm sm:text-base">
            Private Rooms (Capacity: 8 adults in 4 rooms)
          </p>
          <ul className="list-disc list-inside ml-6 space-y-1 text-sm sm:text-base leading-relaxed">
            <li>Twin/double occupancy with attached toilets</li>
            <li>Same amenities as above</li>
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Bardiya_RH;
