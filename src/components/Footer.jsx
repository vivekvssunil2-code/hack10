import {
  FaMapMarkedAlt,
  FaRobot,
  FaChartLine,
  FaLightbulb,
} from "react-icons/fa";

export default function Features() {
  const features = [
    {
      icon: <FaMapMarkedAlt size={40} className="text-cyan-400" />,
      title: "Smart Issue Reporting",
      desc: "Citizens can report civic problems with photos, location, and descriptions in just a few clicks.",
    },
    {
      icon: <FaRobot size={40} className="text-cyan-400" />,
      title: "AI Problem Analysis",
      desc: "Our AI analyzes complaints, identifies patterns, and classifies issues based on severity and urgency.",
    },
    {
      icon: <FaChartLine size={40} className="text-cyan-400" />,
      title: "Future Risk Prediction",
      desc: "Predicts the possible consequences if issues remain unresolved, helping authorities take preventive action.",
    },
    {
      icon: <FaLightbulb size={40} className="text-cyan-400" />,
      title: "Action Recommendations",
      desc: "Provides intelligent suggestions and priority rankings to help officials resolve problems efficiently.",
    },
  ];

  return (
    <section className="bg-slate-950 text-white py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center">
          Why Choose <span className="text-cyan-400">CivicSense AI?</span>
        </h2>

        <p className="text-center text-gray-400 mt-4 max-w-3xl mx-auto">
          Transforming civic issue management with Artificial Intelligence,
          predictive analytics, and data-driven decision making.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-700 rounded-2xl p-8 shadow-lg hover:border-cyan-400 hover:-translate-y-2 hover:shadow-cyan-500/20 transition-all duration-300"
            >
              <div className="mb-6">{item.icon}</div>

              <h3 className="text-2xl font-semibold">{item.title}</h3>

              <p className="text-gray-400 mt-4 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
