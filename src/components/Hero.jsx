import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center text-center bg-slate-900 text-white px-6">
      <h1 className="text-6xl font-bold">
        Predict Community Risks
      </h1>

      <h2 className="text-6xl font-bold text-cyan-400 mt-2">
        Before They Become Problems.
      </h2>

      <p className="mt-6 text-xl text-gray-300 max-w-3xl">
        CivicMind AI is an AI-powered decision intelligence platform that
        analyzes community issues, predicts future risks, prioritizes
        resources, and recommends preventive actions for smarter communities.
      </p>

      <div className="mt-10 flex gap-5">
        <Link to="/report">
          <button className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl font-semibold transition">
            Report Issue
          </button>
        </Link>

        <Link to="/dashboard">
          <button className="border border-cyan-500 px-6 py-3 rounded-xl hover:bg-cyan-500 hover:text-white transition">
            View Dashboard
          </button>
        </Link>
      </div>
    </section>
  );
}