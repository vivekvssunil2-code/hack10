import { motion } from "framer-motion";
import {
  FaExclamationTriangle,
  FaRobot,
  FaMapMarkerAlt,
  FaClipboardList,
} from "react-icons/fa";

export default function DashboardCards({ complaints = [] }) {
  const cards = [
    {
      title: "Community Risk",
      value: 92,
      suffix: "%",
      icon: FaExclamationTriangle,
      color: "from-red-500 via-red-600 to-red-700",
    },
    {
      title: "AI Confidence",
      value: 96,
      suffix: "%",
      icon: FaRobot,
      color: "from-cyan-500 via-sky-600 to-blue-700",
    },
    {
      title: "Total Complaints",
      value: complaints.length,
      suffix: "",
      icon: FaClipboardList,
      color: "from-purple-500 via-indigo-600 to-indigo-700",
    },
    {
      title: "High Risk Zones",
      value: 6,
      suffix: "",
      icon: FaMapMarkerAlt,
      color: "from-yellow-500 via-orange-500 to-orange-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">
      {cards.map((card, index) => {
        const Icon = card.icon;

        return (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.05,
              y: -8,
            }}
            whileTap={{
              scale: 0.98,
            }}
            transition={{
              duration: 0.25,
            }}
            className={`bg-gradient-to-br ${card.color}
            rounded-3xl
            p-6
            shadow-2xl
            cursor-pointer
            relative
            overflow-hidden`}
          >
            {/* Glow Effect */}
            <div className="absolute -top-10 -right-10 w-28 h-28 bg-white/10 rounded-full blur-2xl"></div>

            <div className="relative flex justify-between items-center">

              <div>

                <p className="text-white/80 text-sm font-medium">
                  {card.title}
                </p>

                <h2 className="text-5xl font-black mt-3 text-white">
                  {card.value}
                  {card.suffix}
                </h2>

              </div>

              <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-md">

                <Icon
                  size={38}
                  className="text-white"
                />

              </div>

            </div>

          </motion.div>
        );
      })}
    </div>
  );
}