import { motion } from "framer-motion";
import { FaRobot, FaMapMarkedAlt, FaShieldAlt } from "react-icons/fa";

export default function DashboardHero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-cyan-900 to-slate-900 p-10 mb-8 shadow-2xl border border-cyan-500/20"
    >
      <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-8">

        <div>

          <h1 className="text-5xl lg:text-6xl font-black text-white">
            CivicMind <span className="text-cyan-400">AI</span>
          </h1>

          <p className="mt-4 text-xl text-slate-300 max-w-2xl">
            AI Powered Civic Risk Prediction & Decision Support System
          </p>

          <div className="flex flex-wrap gap-4 mt-8">

            <div className="bg-cyan-500/20 px-4 py-2 rounded-full border border-cyan-400">
              🟢 Gemini Online
            </div>

            <div className="bg-green-500/20 px-4 py-2 rounded-full border border-green-400">
              📍 Live Monitoring
            </div>

            <div className="bg-yellow-500/20 px-4 py-2 rounded-full border border-yellow-400">
              ⚡ AI Prediction Active
            </div>

          </div>

        </div>

        <div className="flex gap-6 text-6xl">

          <FaRobot className="text-cyan-400" />
          <FaMapMarkedAlt className="text-yellow-400" />
          <FaShieldAlt className="text-red-400" />

        </div>

      </div>
    </motion.div>
  );
}