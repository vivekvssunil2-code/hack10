import { FaDatabase, FaBrain, FaMapMarkedAlt, FaChartLine } from "react-icons/fa";

export default function Stats() {
  const stats = [
    {
      icon: <FaDatabase size={32} className="text-cyan-400" />,
      value: "12,480+",
      title: "Reports Analyzed",
    },
    {
      icon: <FaBrain size={32} className="text-cyan-400" />,
      value: "96%",
      title: "AI Accuracy",
    },
    {
      icon: <FaMapMarkedAlt size={32} className="text-cyan-400" />,
      value: "120",
      title: "Communities Monitored",
    },
    {
      icon: <FaChartLine size={32} className="text-cyan-400" />,
      value: "850+",
      title: "Predictions Generated",
    },
  ];

  return (
    <section className="bg-slate-900 py-20 px-8">
      <h2 className="text-4xl font-bold text-center text-white mb-14">
        CivicMind AI at a Glance
      </h2>

      <div className="grid md:grid-cols-4 gap-8">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-slate-800 rounded-2xl p-8 text-center shadow-lg hover:scale-105 transition"
          >
            <div className="flex justify-center">{item.icon}</div>

            <h1 className="text-5xl font-bold text-cyan-400 mt-5">
              {item.value}
            </h1>

            <p className="text-gray-300 mt-3">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}