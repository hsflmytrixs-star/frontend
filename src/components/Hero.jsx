import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const fadeVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative w-full py-20 px-6 md:px-16 overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-emerald-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-sky-400 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-teal-400 rounded-full blur-2xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          className="flex flex-col-reverse lg:flex-row items-center gap-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {/* Left Section */}
          <motion.div
            className="w-full lg:w-1/2 space-y-8"
            variants={slideInLeft}
          >
            <motion.h1
              className="text-2xl md:text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight"
              variants={fadeVariants}
            >
              Reimagining Global Education{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                for a Regenerative Future
              </span>
            </motion.h1>

            <motion.p
              className="text-xl text-justify text-neutral-700 leading-relaxed max-w-xl"
              variants={fadeVariants}
            >
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
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={fadeVariants}
            >
              <motion.button
                onClick={() => navigate("/about")}
                className="group relative w-fit max-w-full px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-xs sm:text-sm md:text-base text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center gap-2 whitespace-nowrap">
                  Learn More
                  <svg
                    className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-teal-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Section */}
          <motion.div
            className="w-full lg:w-1/2 relative"
            variants={slideInRight}
          >
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-sky-400 to-cyan-500 rounded-full opacity-20 blur-xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full opacity-20 blur-xl" />

              <motion.div
                className="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl"
                whileHover={{ scale: 1.02, rotateY: 5 }}
                style={{ transformStyle: "preserve-3d", perspective: 1000 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg">
                  <iframe
                    className="w-full h-full rounded-2xl"
                    src="https://www.youtube.com/embed/MurvxWJ78bs?si=XxOftnaru0JhzLbd"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
