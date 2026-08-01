import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";

export default function AnalyticsCharts({ complaints = [] }) {

  const solved = complaints.filter(c => c.solved).length;
  const pending = complaints.length - solved;

  const pieData = [
    { name: "Solved", value: solved },
    { name: "Pending", value: pending }
  ];

  const categoryMap = {};

  complaints.forEach(c => {
    const category = c.category || "General";
    categoryMap[category] = (categoryMap[category] || 0) + 1;
  });

  const barData = Object.keys(categoryMap).map(key => ({
    category: key,
    complaints: categoryMap[key]
  }));

  const COLORS = ["#22c55e", "#ef4444"];

  return (

<div className="grid md:grid-cols-2 gap-6 mt-10">

<div className="bg-slate-800 rounded-3xl p-6">

<h2 className="text-2xl font-bold mb-4 text-cyan-400">

Solved vs Pending

</h2>

<div className="h-72">

<ResponsiveContainer>

<PieChart>

<Pie
data={pieData}
dataKey="value"
outerRadius={90}
label
>

{
COLORS.map((color,index)=>

<Cell key={index} fill={color}/>

)
}

</Pie>

<Tooltip/>

</PieChart>

</ResponsiveContainer>

</div>

</div>

<div className="bg-slate-800 rounded-3xl p-6">

<h2 className="text-2xl font-bold mb-4 text-cyan-400">

Complaints by Category

</h2>

<div className="h-72">

<ResponsiveContainer>

<BarChart data={barData}>

<XAxis dataKey="category"/>

<YAxis/>

<Tooltip/>

<Bar
dataKey="complaints"
fill="#06b6d4"
/>

</BarChart>

</ResponsiveContainer>

</div>

</div>

</div>

  );

}