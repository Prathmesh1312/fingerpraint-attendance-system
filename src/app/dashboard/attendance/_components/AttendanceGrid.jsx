/* eslint-disable react-hooks/exhaustive-deps */
"use client";   
import React, { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import moment from "moment";      
import Present from "./Present";

const pagination = true;
const paginationPageSize = 20;
const paginationPageSizeSelector = [25, 50, 100];

function AttendanceGrid({ attendanceList,selectedMonth }) {
  const [toatalpresentcount, setTotalPresentCount] = useState()
  const [rowData, setRowData] = useState([]);
  const [colDef, setColDef] = useState([
    { field: "id", filter: true  },
    { field: "name", filter: true },
    { field: "grade", filter: true },
    { field: "month", filter: true },
  ]);
  const daysInMonth =(year,month)=>new Date(year,month,0).getDate()
  const numberOfDays = daysInMonth(moment(selectedMonth).format('yyyy'),moment(selectedMonth).format('MM'))
  const daysArrays = Array.from({length:numberOfDays},(_,i)=>i+1)

  useEffect(() => {
    attendanceList && setRowData(attendanceList);
    if (attendanceList){
    colDef.splice(4)
    daysArrays.forEach((date)=>{
      setColDef(prevdata=>[...prevdata,{
        field:date.toString(),width:50,editable: false ,cellRenderer : Present
      }])       
      attendanceList.forEach(obj=>{
        isPresent(obj,attendanceList,date)
        })
    }) 
  let i,j
  let day_count = 0
  let temp = []
  let bigtemp = []
  for(j=0;j<rowData.length;j++){
    for(i=0;i<32;i++){
      if (rowData[j][i]==true){day_count++;temp.push(i)}
    }
  }
  for(i=1;i<32;i++){
    bigtemp.push({day:i,presentStudnets:temp.filter(x => x==i).length})
  }
  setTotalPresentCount(bigtemp)
}
},[attendanceList]);

function isPresent(obj,List,date){
  List.forEach(a=>{
    if(a.id==obj.id){
      a.days?.day_num?.forEach((e) =>{
        if(e == date){
        obj[date] = true
        }
      })
    } 
  })
}

  return (
    <div className="ag-theme-quartz-dark my-8" style={{ height: 550 }}>
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
