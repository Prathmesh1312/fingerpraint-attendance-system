/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useState } from "react";
import moment from "moment";
import {
  Area,
  AreaChart,
  Bar,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function AreaCharts({ attendanceList, selectedMonth, totalStudent, todayData }) {
  const data1 = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
    },
  ];
  const [presentcount, setpresentcount] = useState([]);
  const [rowData, setRowData] = useState([]);
  const [colDef, setColDef] = useState([
    { field: "id", filter: true },
    { field: "name", filter: true },
    { field: "grade", filter: true },
    { field: "month", filter: true },
  ]);
  const today = moment().format("D");
  const daysInMonth = (year, month) => new Date(year, month, 0).getDate();
  const numberOfDays = daysInMonth(
    moment(selectedMonth).format("yyyy"),
    moment(selectedMonth).format("MM")
  );
  const daysArrays = Array.from({ length: numberOfDays }, (_, i) => i + 1);
  let data = [];
  useEffect(() => {
    if (attendanceList) {
      setRowData(attendanceList);
      colDef.splice(4);
      daysArrays.forEach((date) => {
        setColDef((prevdata) => [
          ...prevdata,
          {
            field: date.toString(),
            width: 50,
          },
        ]);
        attendanceList.forEach((obj) => {
          isPresent(obj, attendanceList, date);
        });
      });
      let i, j;
      let day_count = 0;
      let temp = [];
      let bigtemp = [];
      for (j = 0; j < attendanceList.length; j++) {
        for (i = 0; i < 32; i++) {
          if (attendanceList[j][i] == true) {
            day_count++;
            temp.push(i);
          }
        }
      }
      for (i = 1; i < Number(today)+2; i++) {
        bigtemp.push({
          day: i,
          presentStudnets: temp.filter((x) => x == i).length,
          absentStudents:
            totalStudent - Number(temp.filter((x) => x == i).length),
        });
      }
      // console.log(bigtemp)
      setpresentcount(bigtemp);
      todayData(bigtemp)
    }
  }, [attendanceList]);

  function isPresent(obj, List, date) {
    List.forEach((a) => {
      if (a.id == obj.id) {
        a.days?.day_num?.forEach((e) => {
          if (e == date) {
            obj[date] = true;
          }
        });
      }
    });
  }

  return (
    <div className="p-5 border rounded-lg shadow-sm">
      <h2 className="my-2 font-bold text-lg">Attendance</h2>
      <ResponsiveContainer width={"100%"} height={350}>
        <AreaChart
          data={presentcount}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#2278FB" stopOpacity={0.7} />
              <stop offset="95%" stopColor="#2278FB" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#6BDFDB" stopOpacity={0.9} />
              <stop offset="95" stopColor="#6BDFDB" stopOpacity={0.0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="day" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            name="Total Present Studnets"
            dataKey="presentStudnets"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
          <Area
            type="monotone"
            name="Total Absent Studnets"
            dataKey="absentStudents"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default AreaCharts;
