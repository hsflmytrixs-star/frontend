import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const sdgPoints = [
  "We use the Sustainable Development Goals as both a framework and a compass.",
  "SDGs represent all major global issues—from climate to gender justice.",
  "They offer cross-disciplinary entry points for students of all interests.",
  "The framework enhances creative, systems-based thinking tied to real-world action.",
  "They allow students to develop a deep sense of accountability and impact.",
  "SDG-based learning is non-linear, interdisciplinary, and aligned with global responsibility.",
];

const SDGFrameworkSection = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black">
            Sustainable Development Goals (SDGs) as a Framework
          </h2>
        </motion.div>

        {/* Image + Subtext + Bullets layout */}
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Image (left side) */}
          <motion.div
            className="w-full lg:w-[55%] rounded-xl overflow-hidden shadow-md mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <img
              src="/Sustainable_Development_Goals.png"
              alt="SDG Framework"
              className="w-full h-full object-cover rounded-xl"
            />
          </motion.div>

          {/* Subtext + SDG Points (right side) */}
          <div className="w-full lg:w-[45%] space-y-6">
            <motion.p
              className="text-black text-lg leading-relaxed text-justify"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              We guide students through a non-linear, global learning journey grounded in the SDGs—bridging theory, practice, and purpose.
            </motion.p>

            <motion.div
              className="space-y-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              {sdgPoints.map((text, index) => (
                <p
                  key={index}
                  className="text-black text-base leading-relaxed"
                >
                  • {text}
                </p>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SDGFrameworkSection;
