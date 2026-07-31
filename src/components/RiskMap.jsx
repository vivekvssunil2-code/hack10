export default function RiskMap() {
  const wards = [
    { name: "Ward 1", risk: "Low", color: "bg-green-500" },
    { name: "Ward 2", risk: "Medium", color: "bg-yellow-500" },
    { name: "Ward 3", risk: "High", color: "bg-orange-500" },
    { name: "Ward 4", risk: "Low", color: "bg-green-500" },
    { name: "Ward 5", risk: "Critical", color: "bg-red-500" },
    { name: "Ward 6", risk: "Medium", color: "bg-yellow-500" },
    { name: "Ward 7", risk: "High", color: "bg-orange-500" },
    { name: "Ward 8", risk: "Low", color: "bg-green-500" },
    { name: "Ward 9", risk: "Medium", color: "bg-yellow-500" },
  ];

  return (
    <section className="bg-slate-800 rounded-2xl p-8 mt-10">

      <h2 className="text-3xl font-bold text-cyan-400 mb-8">
        🗺️ AI Community Risk Map
      </h2>

      <div className="grid grid-cols-3 gap-6">

        {wards.map((ward) => (
          <div
            key={ward.name}
            className={`${ward.color} rounded-xl h-28 flex flex-col justify-center items-center shadow-lg hover:scale-105 transition`}
          >
            <h3 className="font-bold text-lg">{ward.name}</h3>
            <p>{ward.risk}</p>
          </div>
        ))}

      </div>

      <div className="flex gap-6 mt-8 justify-center">

        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-green-500"></div>
          Low
        </div>

        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-yellow-500"></div>
          Medium
        </div>

        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-orange-500"></div>
          High
        </div>

        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-red-500"></div>
          Critical
        </div>

      </div>

    </section>
  );
}