import {
  FaExclamationTriangle,
  FaMapMarkerAlt,
  FaChartLine,
  FaRobot,
  FaCheckCircle,
} from "react-icons/fa";

import { useAI } from "../context/AIContext";
import RiskMap from "../components/RiskMap";
import CivicMemory from "../components/CivicMemory";

export default function Dashboard() {
  const { analysis } = useAI();

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">

      <h1 className="text-5xl font-bold text-cyan-400 mb-2">
        CivicMind AI
      </h1>

      <p className="text-gray-400 mb-10">
        AI Decision Intelligence Dashboard
      </p>

      {/* Top Stats */}

      <div className="grid md:grid-cols-4 gap-6">

        <div className="bg-slate-800 rounded-2xl p-6">
          <FaExclamationTriangle className="text-red-400 text-3xl mb-4" />
          <h2 className="text-4xl font-bold">84%</h2>
          <p className="text-gray-400 mt-2">
            Community Risk Index
          </p>
        </div>

        <div className="bg-slate-800 rounded-2xl p-6">
          <FaMapMarkerAlt className="text-yellow-400 text-3xl mb-4" />
          <h2 className="text-4xl font-bold">6</h2>
          <p className="text-gray-400 mt-2">
            High Risk Areas
          </p>
        </div>

        <div className="bg-slate-800 rounded-2xl p-6">
          <FaChartLine className="text-green-400 text-3xl mb-4" />
          <h2 className="text-4xl font-bold">14</h2>
          <p className="text-gray-400 mt-2">
            Predicted Issues
          </p>
        </div>

        <div className="bg-slate-800 rounded-2xl p-6">
          <FaRobot className="text-cyan-400 text-3xl mb-4" />
          <h2 className="text-4xl font-bold">96%</h2>
          <p className="text-gray-400 mt-2">
            AI Confidence
          </p>
        </div>

      </div>

      {/* AI Recommendation */}

      <div className="bg-slate-800 rounded-2xl p-8 mt-10">

        <h2 className="text-3xl font-bold text-cyan-400 mb-6">
          🤖 AI Recommendation
        </h2>

        <div className="bg-slate-700 rounded-xl p-6">
          <p className="text-xl leading-9">
            Repair drainage systems in
            <span className="font-bold text-cyan-400"> Ward 5 </span>
            before the next heavy rainfall.

            AI predicts
            <span className="text-red-400 font-bold">
              {" "}92% flood probability{" "}
            </span>

            due to recurring drainage complaints and weather forecasts.
          </p>
        </div>

      </div>

      {/* High Risk Locations */}

      <div className="mt-10">

        <h2 className="text-3xl font-bold text-cyan-400 mb-6">
          High Risk Locations
        </h2>

        <div className="space-y-5">

          <div className="bg-slate-800 rounded-xl p-5 flex justify-between">
            <div>
              <h3 className="text-xl font-bold">🔴 Ward 5</h3>
              <p className="text-gray-400">Flood Risk</p>
            </div>

            <div className="text-red-400 font-bold text-2xl">
              92%
            </div>
          </div>

          <div className="bg-slate-800 rounded-xl p-5 flex justify-between">
            <div>
              <h3 className="text-xl font-bold">🟠 Ward 3</h3>
              <p className="text-gray-400">Road Damage</p>
            </div>

            <div className="text-yellow-400 font-bold text-2xl">
              81%
            </div>
          </div>

          <div className="bg-slate-800 rounded-xl p-5 flex justify-between">
            <div>
              <h3 className="text-xl font-bold">🟡 Ward 7</h3>
              <p className="text-gray-400">Water Leakage</p>
            </div>

            <div className="text-orange-400 font-bold text-2xl">
              74%
            </div>
          </div>

        </div>

      </div>

      {/* AI Decisions */}

      <div className="mt-10 bg-slate-800 rounded-2xl p-8">

        <h2 className="text-3xl font-bold text-cyan-400 mb-6">
          AI Decisions
        </h2>

        <div className="space-y-4">

          <div className="flex items-center gap-4">
            <FaCheckCircle className="text-green-400" />
            Prioritize drainage repair in Ward 5.
          </div>

          <div className="flex items-center gap-4">
            <FaCheckCircle className="text-green-400" />
            Increase inspection frequency in Ward 3.
          </div>

          <div className="flex items-center gap-4">
            <FaCheckCircle className="text-green-400" />
            Allocate emergency maintenance crew to Ward 7.
          </div>

        </div>

      </div>

      {/* Latest AI Analysis */}

      {analysis && (
        <div className="mt-10 bg-slate-800 rounded-2xl p-8">

          <h2 className="text-3xl font-bold text-cyan-400 mb-6">
            🧠 Latest AI Analysis
          </h2>

          <div className="bg-slate-700 rounded-xl p-6 whitespace-pre-wrap leading-8">
            {analysis}
          </div>

        </div>
      )}

           {/* AI Community Risk Map */}

      <RiskMap />

      {/* Civic Memory Timeline */}

      <CivicMemory />

    </div>
  );
}