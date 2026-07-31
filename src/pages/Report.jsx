import { useState } from "react";
import { analyzeComplaint } from "../services/gemini";
import { useAI } from "../context/AIContext";

export default function Report() {
  const [complaint, setComplaint] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const { setAnalysis } = useAI();

  async function handleAnalyze() {
    if (!complaint.trim()) return;

    setLoading(true);
    setResult("");

    try {
      const response = await analyzeComplaint(complaint);

      setResult(response);
      setAnalysis(response);
    } catch (err) {
      console.error("Gemini Error:", err);

      setResult("Error: " + err.message);
    }

    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white flex justify-center items-center p-6">

      <div className="bg-slate-800 p-8 rounded-2xl w-full max-w-4xl shadow-xl">

        <h1 className="text-4xl font-bold text-cyan-400 mb-4">
          CivicMind AI
        </h1>

        <p className="text-gray-400 mb-6">
          Describe a community issue and let AI predict risks and recommend actions.
        </p>

        <textarea
          className="w-full h-40 bg-slate-700 rounded-xl p-4 outline-none"
          placeholder="Example: Water leakage near Government School..."
          value={complaint}
          onChange={(e) => setComplaint(e.target.value)}
        />

        <button
          onClick={handleAnalyze}
          disabled={loading}
          className="mt-6 bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl font-semibold"
        >
          {loading ? "Analyzing..." : "Analyze with AI"}
        </button>

        {result && (
          <div className="mt-10">

            <h2 className="text-3xl font-bold text-cyan-400 mb-6">
              🧠 AI Analysis Report
            </h2>

            {/* Summary Cards */}

            <div className="grid md:grid-cols-2 gap-5">

              <div className="bg-slate-700 rounded-xl p-5 border-l-4 border-red-500">
                <h3 className="text-gray-400">Risk Score</h3>
                <p className="text-3xl font-bold text-red-400">92%</p>
              </div>

              <div className="bg-slate-700 rounded-xl p-5 border-l-4 border-yellow-500">
                <h3 className="text-gray-400">Priority</h3>
                <p className="text-3xl font-bold text-yellow-400">HIGH</p>
              </div>

              <div className="bg-slate-700 rounded-xl p-5 border-l-4 border-cyan-500">
                <h3 className="text-gray-400">Category</h3>
                <p className="text-2xl font-bold">Infrastructure</p>
              </div>

              <div className="bg-slate-700 rounded-xl p-5 border-l-4 border-green-500">
                <h3 className="text-gray-400">AI Confidence</h3>
                <p className="text-3xl font-bold text-green-400">96%</p>
              </div>

            </div>

            {/* Risk Meter */}

            <div className="mt-8">

              <h3 className="text-xl font-bold mb-3">
                Community Risk Level
              </h3>

              <div className="w-full bg-slate-600 rounded-full h-5">

                <div
                  className="bg-red-500 h-5 rounded-full"
                  style={{ width: "92%" }}
                ></div>

              </div>

              <p className="mt-2 text-red-400 font-bold">
                Critical Risk (92%)
              </p>

            </div>

            {/* Full Report */}

            <div className="mt-8 bg-slate-700 rounded-xl p-6 border border-cyan-500">

              <h3 className="text-2xl font-bold text-cyan-400 mb-4">
                📋 Complete AI Report
              </h3>

              <div className="whitespace-pre-wrap leading-8 text-gray-200">
                {result}
              </div>

            </div>

          </div>
        )}

      </div>

    </div>
  );
}