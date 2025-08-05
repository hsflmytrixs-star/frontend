import React from "react";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";
import Nagarkot_Carousel from "./Nagarkot_Carousel";

const Nagarkot_RH = () => {
  return (
    <div className="bg-[#c4c7c4] min-h-screen">
      <Navbar />
      {/* Hero Section */}
      <div
        className="w-full h-[60vh] sm:h-[70vh] md:h-[80vh] bg-cover bg-center flex items-center justify-center relative"
        style={{
          backgroundImage: "url('/Nagarkot.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-bold z-10 text-center drop-shadow-lg px-4">
          Nagarkot
        </h1>
      </div>
      <main className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 text-gray-900 text-justify">
        <section>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Nagarkot</h2>
          <p className="mb-6 leading-relaxed">
            Nature, Culture, and Learning Just Outside the Capital
            <br />
            Nagarkot is a scenic hill station just 1.5 hours' drive from
            Kathmandu, yet it feels a world away. Known for its peaceful
            surroundings, sweeping Himalayan views, and crisp mountain air,
            Nagarkot offers a perfect setting for immersive, nature-based
            learning. Despite its proximity to the city, it remains quiet,
            culturally rich, and surrounded by forests and traditional Tamang
            villages.
          </p>
          <p className="mb-6 leading-relaxed">
            This makes Nagarkot an ideal location for designing short-term
            educational programs focused on environmental awareness, cultural
            understanding, outdoor education, and reflection. Students and
            educators can explore the natural landscape through short hikes,
            observe local biodiversity, bird watch, and engage with the Tamang
            way of life in a respectful and meaningful way. We also organize
            summer and winter camps.
          </p>

          <h3 className="text-xl sm:text-2xl font-semibold mb-4">
            Accommodation in Nagarkot: Noumenal Camps
          </h3>
          <p className="mb-4 font-semibold">Modular Glamping on the Quiet Side of the Hills</p>
          <p className="mb-6 leading-relaxed">
            Noumenal Camps is located in the less-touristy, quieter side of
            Nagarkot, nestled between hills, traditional homes, and forest
            trails. Designed specifically for mindful group experiences, our
            modular campsite setup can be tailored to suit school groups,
            gap-year students, family retreats, or faculty-led educational
            programs.
          </p>

          <div className="mb-10">
            <Nagarkot_Carousel />
          </div>

          <h4 className="text-lg sm:text-xl font-semibold mb-2">Why Noumenal?</h4>
          <ul className="list-disc list-inside space-y-2 mb-6 text-sm sm:text-base leading-relaxed">
            <li>
              Flexible, modular glamping layout based on your group’s size and
              goals
            </li>
            <li>
              Set in a pristine natural environment ideal for hiking,
              biodiversity walks, and village immersion
            </li>
            <li>
              Offers daily views of the Himalayas and quiet, starry nights for
              reflection
            </li>
            <li>
              Provides a peaceful, low-impact space perfect for slowing down and
              bonding as a group
            </li>
            <li>
              Easily accessible from Kathmandu—perfect for shorter trips or
              program extensions
            </li>
          </ul>

          <h4 className="text-lg sm:text-xl font-semibold mb-2">
            Complimentary Cultural & Nature-Based Activities
          </h4>
          <ul className="list-disc list-inside space-y-2 mb-6 text-sm sm:text-base leading-relaxed">
            <li>Cook with locals in a traditional Tamang kitchen</li>
            <li>Try pizza-making in a handmade mud oven</li>
            <li>Join farmers for seasonal planting, harvesting, and herding</li>
            <li>
              Explore nature through bird watching, botanical walks, and camera
              trapping
            </li>
            <li>
              Relax with volleyball, badminton, frisbee, or board games during
              downtime
            </li>
          </ul>

          <h4 className="text-lg sm:text-xl font-semibold mb-2">Accommodation Details</h4>
          <p className="font-semibold text-sm sm:text-base">Tents (Capacity: up to 30 students)</p>
          <ul className="list-disc list-inside ml-6 space-y-1 text-sm sm:text-base leading-relaxed">
            <li>Simple, clean tents with beds and fans</li>
            <li>Shared toilets and showers (non-attached)</li>
            <li>Amenities provided: Beds, mattresses, blankets, towels</li>
            <li>What to bring: Slippers/sandals and a sleeping bag</li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Nagarkot_RH;
