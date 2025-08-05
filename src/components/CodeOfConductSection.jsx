import { motion } from "framer-motion";
import {
  ShieldCheck,
  UserCheck,
  HeartPulse,
  BookOpenCheck,
  Droplet,
  Globe,
  CheckCircle,
  Radio,
  SmilePlus,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const principles = [
  {
    icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
    title: "SAFETY FIRST",
    points: [
      "Field-tested risk assessments",
      "Emergency response systems",
      "Strict safety supervision in all environments",
      "Vehicle on standby at all times",
      "Mandatory insurance",
    ],
  },
  {
    icon: <UserCheck className="w-6 h-6 text-emerald-600" />,
    title: "TRAINED FIELD STAFF & SAFEGUARDING TEAM",
    points: [
      "All facilitators are trained in child protection, wilderness first aid, and student engagement.",
    ],
  },
  {
    icon: <HeartPulse className="w-6 h-6 text-emerald-600" />,
    title: "MENTAL HEALTH & EMOTIONAL WELLBEING",
    points: [
      "Daily check-ins, reflection time, and support systems for emotional safety and resilience.",
    ],
  },
  {
    icon: <BookOpenCheck className="w-6 h-6 text-emerald-600" />,
    title: "ELABORATE PREPARATORY BRIEFINGS",
    points: [
      "Pre-departure and on-site orientation for students and staff covering risks, rules, roles, and respect.",
    ],
  },
  {
    icon: <Droplet className="w-6 h-6 text-emerald-600" />,
    title: "UNCOMPROMISED HYGIENE & HEALTH PROTOCOLS",
    points: [
      "Clean water access, personal hygiene routines, and sanitation standards strictly maintained.",
    ],
  },
  {
    icon: <Globe className="w-6 h-6 text-emerald-600" />,
    title: "CULTURAL RESPECT & LOCAL INTEGRATION",
    points: [
      "Code of conduct emphasizes cultural humility, appropriate behavior, dress, and photography etiquette.",
    ],
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-emerald-600" />,
    title: "INTERNATIONAL & LOCAL STANDARDS COMPLIANCE",
    points: [
      "Protocols aligned with WHO and ILO guidelines for student safety, health, and staff working conditions.",
    ],
  },
  {
    icon: <Radio className="w-6 h-6 text-emerald-600" />,
    title: "REGULAR UPDATES",
    points: [
      "Regular updates to school and designated parents/guardians",
      "Satellite connectivity where applicable based on school’s requirement.",
    ],
  },
  {
    icon: <SmilePlus className="w-6 h-6 text-emerald-600" />,
    title: "INCLUSIVE, KIND, AND RESPONSIBLE BEHAVIOR",
    points: [
      "Zero tolerance for bullying, discrimination, or exclusion.",
      "Community values upheld.",
    ],
  },
];

const CodeOfConductSection = () => {
  return (
    <section className="bg-[#2a9f80] py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-neutral-900"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Code of Conduct & Commitment to Excellence
        </motion.h2>
        <motion.p
          className="mt-4 text-lg text-white max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          We are committed to safety, dignity, respect, and excellence in every aspect of our programs. These principles guide how we operate and care for our students, staff, and communities.
        </motion.p>
      </div>

      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {principles.map((item, index) => (
          <motion.div
            key={index}
            className="bg-gray-50 border border-black rounded-xl p-6 shadow-sm hover:shadow-md transition duration-300"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="flex items-center gap-3 mb-3">
              {item.icon}
              <h3 className="text-lg font-semibold text-neutral-800">{item.title}</h3>
            </div>
            <ul className="list-disc list-inside text-neutral-600 text-sm space-y-1">
              {item.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CodeOfConductSection;
