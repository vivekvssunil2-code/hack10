import { useState } from "react";
import { analyzeComplaint } from "../services/gemini";
import { useAI } from "../context/AIContext";

export default function Report() {
  const [complaint, setComplaint] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const { addComplaint } = useAI();

  async function handleAnalyze() {
    if (!complaint.trim()) return;

    setLoading(true);
    setResult(null);

    try {
      const response = await analyzeComplaint(complaint);

      // Create complaint object
      const complaintData = {
        id: Date.now(),
        complaint,
        risk: response.risk,
        priority: response.priority,
        confidence: response.confidence,
        category: response.category,
        location: response.location,
        recommendation: response.recommendation,
        status: "Unsolved",
        date: new Date().toLocaleString(),
      };

      // Save locally
      addComplaint(complaintData);

      // Display on report page
      setResult(complaintData);

      // Optional: clear textarea after analysis
      // setComplaint("");

    } catch (err) {
      console.error("FULL GEMINI ERROR:", err);

      setResult({
        error: err.message || "Unknown Gemini error",
      });
    }

    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white flex justify-center p-6">
      <div className="bg-slate-800 p-8 rounded-2xl w-full max-w-5xl shadow-2xl">
        <h1 className="text-4xl font-bold text-cyan-400">
          CivicMind AI
        </h1>

        <p className="text-gray-400 mt-2 mb-6">
          AI-powered civic issue analysis and risk prediction system.
        </p>

        <textarea
          className="w-full h-40 bg-slate-700 rounded-xl p-4 outline-none focus:ring-2 focus:ring-cyan-400"
          placeholder="Example: Broken street lights near a school causing safety issues..."
          value={complaint}
          onChange={(e) => setComplaint(e.target.value)}
        />

        <button
          onClick={handleAnalyze}
          disabled={loading}
          className="mt-6 bg-cyan-500 hover:bg-cyan-600 px-8 py-3 rounded-xl font-bold transition"
        >
          {loading ? "🤖 AI is analyzing..." : "Analyze Complaint"}
        </button>

        {loading && (
          <div className="mt-8 bg-slate-700 p-5 rounded-xl">
            <p className="text-cyan-400 animate-pulse">
              🔍 Scanning complaint...
            </p>

            <p className="text-gray-300 mt-2">
              Evaluating risk factors and generating recommendations...
            </p>
          </div>
        )}

        {result && !result.error && (
          <div className="mt-10">
            <h2 className="text-3xl font-bold text-cyan-400 mb-6">
              🧠 AI Safety Report
            </h2>

            <div className="grid md:grid-cols-3 gap-5">
              <div className="bg-slate-700 p-5 rounded-xl border-l-4 border-red-500">
                <p className="text-gray-400">Risk Score</p>

                <p className="text-3xl font-bold text-red-400">
                  {result.risk}%
                </p>
              </div>

              <div className="bg-slate-700 p-5 rounded-xl border-l-4 border-yellow-400">
                <p className="text-gray-400">Priority</p>

                <p className="text-3xl font-bold text-yellow-400">
                  {result.priority}
                </p>
              </div>

              <div className="bg-slate-700 p-5 rounded-xl border-l-4 border-green-400">
                <p className="text-gray-400">AI Confidence</p>

                <p className="text-3xl font-bold text-green-400">
                  {result.confidence}%
                </p>
              </div>
            </div>

            <div className="mt-8 bg-slate-700 rounded-xl p-6 border border-cyan-500">
              <h3 className="text-2xl font-bold text-cyan-400 mb-5">
                📋 Detailed AI Analysis
              </h3>

              <div className="space-y-4 text-lg">
                <p>
                  <b>Complaint:</b> {result.complaint}
                </p>

                <p>
                  <b>Category:</b> {result.category}
                </p>

                <p>
                  <b>Location:</b> {result.location}
                </p>

                <p>
                  <b>Recommendation:</b> {result.recommendation}
                </p>

                <p>
                  <b>Status:</b>{" "}
                  <span className="text-red-400 font-bold">
                    {result.status}
                  </span>
                </p>

                <p>
                  <b>Analyzed:</b> {result.date}
                </p>
              </div>
            </div>
          </div>
        )}

        {result?.error && (
          <div className="mt-8 bg-red-900 p-5 rounded-xl">
            <h3 className="font-bold mb-2">
              Gemini Error:
            </h3>

            <p>{result.error}</p>
          </div>
        )}
      </div>
    </div>
  );
}