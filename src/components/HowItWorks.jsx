import { FaFileAlt, FaBrain, FaHistory, FaChartLine, FaLightbulb } from "react-icons/fa";

const steps = [
  {
    icon: <FaFileAlt size={32} className="text-cyan-400" />,
    title: "1. Report Issue",
    desc: "Citizens submit complaints with text, image, and location.",
  },
  {
    icon: <FaBrain size={32} className="text-cyan-400" />,
    title: "2. AI Analysis",
    desc: "AI identifies category, urgency, and affected department.",
  },
  {
    icon: <FaHistory size={32} className="text-cyan-400" />,
    title: "3. Civic Memory",
    desc: "The system compares the issue with historical reports.",
  },
  {
    icon: <FaChartLine size={32} className="text-cyan-400" />,
    title: "4. Pattern Detection",
    desc: "AI detects recurring issues and predicts future risks.",
  },
  {
    icon: <FaLightbulb size={32} className="text-cyan-400" />,
    title: "5. Smart Recommendation",
    desc: "Authorities receive AI-powered action plans.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-slate-900 text-white py-24 px-8">
      <h2 className="text-4xl font-bold text-center mb-4">
        How CivicMind AI Works
      </h2>

      <p className="text-center text-gray-400 mb-16 max-w-3xl mx-auto">
        From citizen reports to AI-powered decisions, CivicMind transforms
        community data into actionable intelligence.
      </p>

      <div className="grid md:grid-cols-5 gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-slate-800 rounded-2xl p-6 text-center hover:scale-105 transition duration-300"
          >
            <div className="flex justify-center mb-4">{step.icon}</div>
            <h3 className="text-xl font-bold">{step.title}</h3>
            <p className="text-gray-400 mt-3">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}