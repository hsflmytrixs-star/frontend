import { motion } from "framer-motion";
import {
  HelpCircle,
  Users,
  AlertTriangle,
  Map,
  ClipboardList,
  BarChart,
  Handshake,
  Heart,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const steps = [
  {
    icon: <HelpCircle className="w-6 h-6 text-emerald-600" />,
    label: "Understanding the Community",
  },
  {
    icon: <AlertTriangle className="w-6 h-6 text-emerald-600" />,
    label: "Exploring the Problem",
  },
  {
    icon: <Map className="w-6 h-6 text-emerald-600" />,
    label: "Mapping Stakeholders",
  },
  {
    icon: <ClipboardList className="w-6 h-6 text-emerald-600" />,
    label: "Analyzing Gaps in Interventions",
  },
  {
    icon: <Users className="w-6 h-6 text-emerald-600" />,
    label: "Participatory Design",
  },
  {
    icon: <BarChart className="w-6 h-6 text-emerald-600" />,
    label: "Impact Measurement",
  },
  {
    icon: <Handshake className="w-6 h-6 text-emerald-600" />,
    label: "Community Collaboration",
  },
  {
    icon: <Heart className="w-6 h-6 text-emerald-600" />,
    label: "Reflection & Introspection",
  },
];

const LearningModelSection = () => {
  return (
    <section className="bg-[#d8d7d5] py-20 px-6 md:px-16">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-black"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Our Learning Model
        </motion.h2>
        <motion.p
          className="mt-4 text-lg text-black max-w-2xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <span className="font-medium">From Questions to Impact</span> — Every
          trip is structured around actionable questions that connect deeply
          with the SDGs. Our 8-step process helps learners become ethical,
          effective changemakers.
        </motion.p>
      </div>

      <div className="max-w-4xl mx-auto grid gap-8 sm:grid-cols-2">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="flex items-center gap-5 p-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 shrink-0">
              {step.icon}
            </div>
            <p className="text-lg text-black font-semibold">
              {step.label}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.p
        className="mt-12 text-center text-black text-base max-w-3xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        These are not just “activities.” They’re learning cycles designed to
        connect <span className="font-medium">head, heart, and hand</span>.
      </motion.p>
    </section>
  );
};

export default LearningModelSection;
