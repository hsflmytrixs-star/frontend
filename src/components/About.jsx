import React from "react";
import { motion } from "framer-motion";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";
import CodeOfConductSection from "./CodeOfConductSection";
import Teams from "./Teams";
import LearningModelSection from "./LearningModelSection";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="text-gray-800 bg-white">
        {/* Hero Section */}
        <div
          className="w-full h-[80vh] bg-cover bg-center flex items-center justify-center relative"
          style={{
            backgroundImage: "url('/About_us_banner.jpg')",
          }}
        >
          <div className="bg-black/50 w-full h-full absolute top-0 left-0" />
          <h1 className="text-white text-4xl md:text-6xl font-bold z-10 text-center drop-shadow-lg">
            About Us
          </h1>
        </div>

        {/* About Us Description Section */}
        <section className="py-16 px-6 md:px-20 bg-white text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Reimagining Global Education for a Regenerative Future
            </h2>
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              We are a Nepal-based institution that creates meaningful,
              place-based field programs for international students, rooted in
              the realities of local communities and global challenges. Our
              immersive journeys—designed around the Sustainable Development
              Goals (SDGs)—help young people engage with the world through lived
              experience, reflection, and action.
              <br />
              <br />
              We believe education must prepare learners not just to understand
              the world, but to change it—regeneratively, justly, and joyfully.
            </p>
            <p className="text-md italic text-gray-500">
              Formerly known as Schools for SDGs
            </p>
          </motion.div>
        </section>

        <LearningModelSection />

        <CodeOfConductSection />

        {/* Participated Events Section */}
        <section className="bg-gray-100 py-16 px-6 md:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-10 text-center">
              Participated Events, Talks and Conferences
            </h2>
            <div className="space-y-8">
              {/* Event 1 */}
              <div className="bg-white p-6 rounded-xl shadow-md flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    ENKA’s 2nd Annual Outdoor and Experiential Learning
                    Conference
                  </h3>
                  <p className="text-gray-600">Istanbul, Turkey, 2025</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <img
                    src="/enka_schools_log_newtr.jpg"
                    alt="ENKA Logo"
                    className="h-12"
                  />
                </div>
              </div>

              {/* Event 2 */}
              <div className="bg-white p-6 rounded-xl shadow-md flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    HUC Student Mobility and Faculty Exchange Task Force
                  </h3>
                  <p className="text-gray-600">Thimpu, Bhutan, 2024</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <img src="/logo-main.png" alt="HUC Logo" className="h-5" />
                </div>
              </div>

              {/* Event 3 */}
              <div className="bg-white p-6 rounded-xl shadow-md flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    GLOW2023 - Global Learning for an Open World
                  </h3>
                  <p className="text-gray-600">
                    By Actionable Innovations Global
                  </p>
                </div>
                <div className="mt-2 md:mt-0">
                  <img
                    src="/actionable innovations.jpg"
                    alt="Actionable Innovations Logo"
                    className="h-12"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </section>
        <Teams/>
        <Footer />
      </div>
    </>
  );
};

export default About;
