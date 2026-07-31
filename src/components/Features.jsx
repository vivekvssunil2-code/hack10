import {
  FaBrain,
  FaSearch,
  FaChartLine,
  FaLightbulb,
} from "react-icons/fa";

export default function Features() {
  const features = [
    {
      icon: <FaBrain size={35} className="text-cyan-400" />,
      title: "AI Civic Memory",
      desc: "Stores and understands community issues over time.",
    },
    {
      icon: <FaSearch size={35} className="text-cyan-400" />,
      title: "Pattern Detection",
      desc: "Finds recurring problems across locations.",
    },
    {
      icon: <FaChartLine size={35} className="text-cyan-400" />,
      title: "Risk Prediction",
      desc: "Predicts future issues before they become serious.",
    },
    {
      icon: <FaLightbulb size={35} className="text-cyan-400" />,
      title: "Smart Recommendations",
      desc: "Suggests the best actions using AI.",
    },
  ];

  return (
    <section className="bg-slate-950 text-white py-20 px-8">
      <h2 className="text-4xl font-bold text-center mb-14">
        Why CivicMind AI?
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-slate-800 rounded-2xl p-8 hover:scale-105 transition duration-300"
          >
            {item.icon}
            <h3 className="text-2xl font-semibold mt-5">{item.title}</h3>
            <p className="text-gray-300 mt-4">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}