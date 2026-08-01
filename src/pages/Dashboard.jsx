import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useAI } from "../context/AIContext";

import DashboardHero from "../components/DashboardHero";
import DashboardCards from "../components/DashboardCards";
import AnalyticsCharts from "../components/AnalyticsCharts";
import RiskMap from "../components/RiskMap";
import CivicMemory from "../components/CivicMemory";

export default function Dashboard() {

  const {
    analysis,
    complaints = [],
    updateComplaintStatus,
  } = useAI();

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const totalComplaints = complaints.length;

  const solvedComplaints =
    complaints.filter(c => c.solved).length;

  const unsolvedComplaints =
    totalComplaints - solvedComplaints;

  const decisions = [
    "Prioritize drainage repair in affected areas.",
    "Increase municipal inspection frequency.",
    "Allocate emergency response teams.",
    "Monitor recurring citizen complaints.",
  ];

  const filteredComplaints = complaints.filter(c => {

    const text =
      c.text ||
      c.complaint ||
      c.description ||
      c.message ||
      "";

    const matchSearch =
      text
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchFilter =
      filter === "all" ||
      (filter === "solved" && c.solved) ||
      (filter === "unsolved" && !c.solved);

    return matchSearch && matchFilter;

  });

  return (

<div className="min-h-screen bg-slate-950 text-white p-8">

<DashboardHero />

<DashboardCards complaints={complaints} />

<AnalyticsCharts complaints={complaints} />

{/* COMPLAINT STATISTICS */}

<div className="grid md:grid-cols-3 gap-6 mt-10">

<div className="bg-slate-800 rounded-3xl p-6 shadow-xl">

<h2 className="text-5xl font-bold text-cyan-400">

{totalComplaints}

</h2>

<p className="text-gray-400 mt-2">

Total Complaints

</p>

</div>

<div className="bg-slate-800 rounded-3xl p-6 shadow-xl">

<h2 className="text-5xl font-bold text-green-400">

{solvedComplaints}

</h2>

<p className="text-gray-400 mt-2">

Solved Complaints

</p>

</div>

<div className="bg-slate-800 rounded-3xl p-6 shadow-xl">

<h2 className="text-5xl font-bold text-red-400">

{unsolvedComplaints}

</h2>

<p className="text-gray-400 mt-2">

Pending Complaints

</p>

</div>

</div>
{/* AI PREDICTION */}

<div className="grid lg:grid-cols-2 gap-8 mt-10">

  <div className="bg-slate-800 rounded-3xl p-8 shadow-xl">

    <h2 className="text-3xl font-bold text-cyan-400 mb-6">
      🤖 AI Prediction
    </h2>

    <div className="bg-slate-700 rounded-2xl p-6">

      <div className="flex justify-between mb-4">

        <span className="text-gray-300">
          Risk Level
        </span>

        <span className="px-4 py-1 rounded-full bg-red-500 text-white font-bold">
          HIGH
        </span>

      </div>

      <div className="w-full bg-slate-600 rounded-full h-3 mb-6">

        <div className="bg-red-500 h-3 rounded-full w-[92%]"></div>

      </div>

      <p className="text-lg leading-8 text-gray-200">

        Based on complaint history, recurring incidents,
        environmental conditions and AI pattern analysis,
        CivicMind predicts a

        <span className="text-red-400 font-bold">
          {" "}High Priority Civic Risk
        </span>

        requiring immediate municipal attention.

      </p>

    </div>

  </div>



  <div className="bg-slate-800 rounded-3xl p-8 shadow-xl">

    <h2 className="text-3xl font-bold text-cyan-400 mb-6">
      AI Recommended Actions
    </h2>

    <div className="space-y-4">

      {

      decisions.map((d,index)=>(

        <div
          key={index}
          className="flex items-center gap-4 bg-slate-700 p-5 rounded-2xl hover:bg-slate-600 transition"
        >

          <FaCheckCircle className="text-green-400 text-xl"/>

          <p className="text-gray-200">

            {d}

          </p>

        </div>

      ))

      }

    </div>

  </div>

</div>



{/* GEMINI REPORT */}

{

analysis &&

<div className="bg-slate-800 rounded-3xl p-8 shadow-xl mt-10">

<h2 className="text-3xl font-bold text-cyan-400 mb-6">

🧠 Latest Gemini AI Report

</h2>

<div className="bg-slate-700 rounded-2xl p-6 whitespace-pre-wrap text-gray-200 leading-8">

{analysis}

</div>

</div>

}
{/* COMPLAINT MANAGEMENT */}

<div className="bg-slate-800 rounded-3xl p-8 shadow-xl mt-10">

<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">

<div>

<h2 className="text-3xl font-bold text-cyan-400">

📋 Complaint Management

</h2>

<p className="text-gray-400 mt-2">

Monitor and resolve citizen complaints.

</p>

</div>


<div className="flex gap-4">

<input

type="text"

placeholder="🔍 Search complaint..."

value={search}

onChange={(e)=>setSearch(e.target.value)}

className="bg-slate-700 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-400"

/>

<select

value={filter}

onChange={(e)=>setFilter(e.target.value)}

className="bg-slate-700 rounded-xl px-4 py-3 outline-none"

>

<option value="all">

All

</option>

<option value="solved">

Solved

</option>

<option value="unsolved">

Pending

</option>

</select>

</div>

</div>

<div className="overflow-x-auto rounded-2xl">

<table className="w-full">

<thead>

<tr className="bg-slate-700">

<th className="p-4 text-left">

Complaint

</th>

<th>

Category

</th>

<th>

Priority

</th>

<th>

Status

</th>

<th>

Action

</th>

</tr>

</thead>

<tbody>

{

filteredComplaints.length===0 ?

(

<tr>

<td

colSpan="5"

className="text-center p-8 text-gray-400"

>

No complaints found.

</td>

</tr>

)

:

filteredComplaints.map((c)=>(

<tr key={c.id}>

<td>{c.title}</td>

<td>{c.category}</td>

<td>
  <span
    className={`px-3 py-1 rounded-full text-sm font-bold ${
      c.priority === "High"
        ? "bg-red-500 text-white"
        : c.priority === "Medium"
        ? "bg-yellow-400 text-black"
        : "bg-green-500 text-white"
    }`}
  >
    {c.priority || "Low"} Priority
  </span>
</td>

<td>
  {c.solved ? (
    <span className="bg-green-600 px-3 py-1 rounded-full">
      🟢 Solved
    </span>
  ) : (
    <span className="bg-red-600 px-3 py-1 rounded-full">
      🔴 Pending
    </span>
  )}
</td>

<td>
  <button
    onClick={() => updateComplaintStatus(c.id)}
    className="bg-cyan-500 hover:bg-cyan-600 transition px-4 py-2 rounded-xl font-semibold"
  >
    {c.solved ? "Undo" : "Resolve"}
  </button>
</td>
</tr>
))
}

</tbody>

</table>

</div>

</div>
{/* RISK MAP & CIVIC MEMORY */}

<div className="grid lg:grid-cols-2 gap-8 mt-10">

  <div className="bg-slate-800 rounded-3xl p-6 shadow-xl">

    <div className="flex items-center justify-between mb-6">

      <div>

        <h2 className="text-3xl font-bold text-cyan-400">
          🗺️ Smart Risk Map
        </h2>

        <p className="text-gray-400 mt-2">
          Live visualization of predicted civic hotspots.
        </p>

      </div>

    </div>

    <div className="rounded-2xl overflow-hidden border border-slate-700">

      <RiskMap />

    </div>

  </div>



  <div className="bg-slate-800 rounded-3xl p-6 shadow-xl">

    <div>

      <h2 className="text-3xl font-bold text-cyan-400">
        🧠 Civic Memory
      </h2>

      <p className="text-gray-400 mt-2">
        Historical complaint intelligence and AI memory.
      </p>

    </div>

    <div className="mt-6 rounded-2xl border border-slate-700 overflow-hidden">

      <CivicMemory />

    </div>

  </div>

</div>



{/* FOOTER */}

<div className="mt-12 rounded-3xl bg-gradient-to-r from-cyan-700 via-blue-700 to-slate-900 p-8 text-center shadow-2xl">

  <h2 className="text-3xl font-bold">

    🚀 CivicMind AI

  </h2>

  <p className="text-cyan-100 mt-3">

    AI Powered Civic Intelligence Platform

  </p>

  <div className="mt-6 flex justify-center gap-6 flex-wrap">

    <span className="bg-green-500/20 px-4 py-2 rounded-full text-green-300">
      🟢 AI Online
    </span>

    <span className="bg-cyan-500/20 px-4 py-2 rounded-full text-cyan-300">
      📊 Live Analytics
    </span>

    <span className="bg-purple-500/20 px-4 py-2 rounded-full text-purple-300">
      🤖 Gemini AI
    </span>

  </div>

  <p className="text-gray-300 mt-6 text-sm">

    Built for Smart Governance • Hackathon 2026

  </p>

</div>

</div>

);

}