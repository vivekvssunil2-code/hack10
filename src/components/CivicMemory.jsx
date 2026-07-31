import { FaHistory, FaBrain } from "react-icons/fa";

export default function CivicMemory() {
  const history = [
    {
      date: "March 2025",
      issue: "Flooding reported in Ward 5",
      color: "border-red-500",
    },
    {
      date: "August 2025",
      issue: "Drainage blockage reported",
      color: "border-yellow-500",
    },
    {
      date: "January 2026",
      issue: "Heavy rainfall caused flooding again",
      color: "border-red-500",
    },
  ];

  return (
    <section className="bg-slate-800 rounded-2xl p-8 mt-10">

      <h2 className="text-3xl font-bold text-cyan-400 mb-8 flex items-center gap-3">
        <FaHistory />
        Civic Memory Timeline
      </h2>

      <div className="space-y-5">
        {history.map((item, index) => (
          <div
            key={index}
            className={`border-l-4 ${item.color} bg-slate-700 rounded-xl p-5`}
          >
            <p className="text-cyan-400 font-bold">{item.date}</p>
            <p className="mt-2">{item.issue}</p>
          </div>
        ))}
      </div>

      <div className="bg-slate-900 rounded-xl p-6 mt-8">

        <h3 className="text-2xl text-cyan-400 font-bold flex items-center gap-3">
          <FaBrain />
          AI Insight
        </h3>

        <p className="mt-4 text-gray-300 leading-8">
          CivicMind AI detected repeated flooding in Ward 5 based on historical
          complaints. The AI predicts that without preventive maintenance,
          flooding is highly likely during the next heavy rainfall.
        </p>

      </div>

    </section>
  );
}