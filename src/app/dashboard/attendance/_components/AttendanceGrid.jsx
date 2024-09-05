/* eslint-disable react-hooks/exhaustive-deps */
"use client";   
import React, { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import moment from "moment";

const pagination = true;
const paginationPageSize = 20;
const paginationPageSizeSelector = [25, 50, 100];

function AttendanceGrid({ attendanceList,selectedMonth}) {
  const [colDef, setColDef] = useState([
    { field: "stu_id", filter: true },
    { field: "name", filter: true },
    { field: "grade", filter: true },
    { field: "month", filter: true },
    { field: "days", filter: true },
  ]);

  const daysInMonth =(year,month)=>new Date(year,month,0).getDate()
  const numberOfDays = daysInMonth(moment(selectedMonth).format('yyyy'),moment(selectedMonth).format('MM'))
  const daysArrays = Array.from({length:numberOfDays},(_,i)=>i+1)


  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    if(attendanceList){
    attendanceList && setRowData(attendanceList);

    daysArrays.forEach((date)=>{
      setColDef(prevdata=>[...prevdata,{
        field:date.toString(),width:50,editablie:true
      }])
    })
    }
  },  );

  return (
    <div className="ag-theme-quartz-dark my-8" style={{ height: 500 }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={colDef}
        pagination={pagination}
        paginationPageSize={paginationPageSize}
        paginationPageSizeSelector={paginationPageSizeSelector}
      />
    </div>
  );
}

export default AttendanceGrid;
