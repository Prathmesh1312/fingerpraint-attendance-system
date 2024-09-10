/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useState } from "react";
import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from "recharts";

function PieCharts({ data, totalStudent }) {
  const [piedata, setpiedata] = useState();
  const [avpersent, setavgpersent] = useState(0);
  const COLORS = ['#0088FE', '#00C49F',];
  useEffect(() => {
    let tempadd = 0;
    let count = -1;
    data?.forEach((element) => {
      tempadd += (Number(element.presentStudnets) * 100) / totalStudent;
      count++;
    });
    setavgpersent(Math.ceil((tempadd / count) * 100) / 100);
    setpiedata([
      {
        name: "Avg. Absent % ",
        value: 100 - Math.ceil((tempadd / count) * 100) / 100,
      },
      {
        name: "Avg. Present % ",
        value: Math.ceil((tempadd / count) * 100) / 100,
      },
    ]);
  }, [data]);
  return (
    <div className="border rounded-lg shadow-sm p-5">
      <h2 className="font-bold text-lg my-2 ">Average Monthly Attendance</h2>
      <div>
        <ResponsiveContainer width={"100%"} height={350}>
          <PieChart>
            <Legend iconSize={16} />
            <Pie
              paddingAngle={5}
              data={piedata}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={80}
              fill="#6d28d9"
              label
              legendType="line"
            >
            {piedata?.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))} 
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default PieCharts;
