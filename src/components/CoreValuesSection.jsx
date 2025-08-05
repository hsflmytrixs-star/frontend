import { motion } from "framer-motion";
import { Leaf, Users, Eye, RefreshCw } from "lucide-react"; // Lucide icons for visuals

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const values = [
  {
    icon: <Leaf className="w-8 h-8 text-emerald-600" />,
    title: "ROOTED IN VALUES",
    description:
      "We build every program on the foundation of nature, equity, and community. Learning is not just about taking—it's about contributing and growing together.",
  },
  {
    icon: <Users className="w-8 h-8 text-sky-600" />,
    title: "DIGNIFIED EXCHANGE",
    description:
      "Local knowledge is honored, not extracted. Our programs are built with community educators, farmers, artists, youth, and elders as co-creators of knowledge.",
  },
  {
    icon: <Eye className="w-8 h-8 text-teal-600" />,
    title: "LIVED EXPERIENCES",
    description:
      "We center real life over simulations, encouraging students to engage with complexity, make mistakes, and cultivate critical consciousness through daily reflection.",
  },
  {
    icon: <RefreshCw className="w-8 h-8 text-lime-600" />,
    title: "REGENERATION",
    description:
      "We aim to regenerate—not just systems, but relationships between people, place, and planet.",
  },
];

const CoreValuesSection = () => {
  return (
    <section className="bg-[#10144e] py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Our Core Values
        </motion.h2>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 max-w-5xl mx-auto">
        {values.map((value, index) => (
          <motion.div
            key={index}
            className="bg-white border border-black p-10 rounded-2xl shadow-md hover:shadow-lg transition duration-300"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="mb-6">{value.icon}</div>
            <h3 className="text-3xl font-semibold text-neutral-800 mb-4">
              {value.title}
            </h3>
            <p className="text-neutral-600 text-lg leading-relaxed">
              {value.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CoreValuesSection;
