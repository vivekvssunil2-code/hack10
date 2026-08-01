
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";


export default function ComplaintCharts({ complaints }) {

  const solved = complaints.filter(
    c => c.status === "Solved"
  ).length;

  const pending = complaints.length - solved;


  const pieData = [
    {
      name: "Solved",
      value: solved
    },
    {
      name: "Pending",
      value: pending
    }
  ];


  const categoryData = complaints.reduce((acc, item) => {

    const category = item.category || "Other";

    acc[category] = (acc[category] || 0) + 1;

    return acc;

  }, {});


  const barData = Object.keys(categoryData).map(key => ({
    name: key,
    complaints: categoryData[key]
  }));


  return (

    <div className="grid md:grid-cols-2 gap-8 mt-10">


      {/* Pie Chart */}

      <div className="bg-slate-800 p-6 rounded-2xl">

        <h2 className="text-xl font-bold mb-5">
          Complaint Status
        </h2>


        <ResponsiveContainer width="100%" height={300}>

          <PieChart>

            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              outerRadius={100}
            >

              {
                pieData.map((entry,index)=>(

                  <Cell key={index}/>

                ))
              }

            </Pie>

            <Tooltip />

          </PieChart>

        </ResponsiveContainer>


      </div>



      {/* Bar Chart */}

      <div className="bg-slate-800 p-6 rounded-2xl">


        <h2 className="text-xl font-bold mb-5">
          Complaint Categories
        </h2>


        <ResponsiveContainer width="100%" height={300}>

          <BarChart data={barData}>

            <XAxis dataKey="name"/>

            <YAxis/>

            <Tooltip/>

            <Bar
              dataKey="complaints"
            />

          </BarChart>


        </ResponsiveContainer>


      </div>


    </div>

  );
}