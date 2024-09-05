'use client'
import React, { useEffect, useState } from "react";
import GlobalAPI from "@/app/_services/GlobalAPI";


function GradeSelect({selectedGrade}) {
  const [grades, setGrades] = useState([]);

  useEffect(()=>{
    GetAllGradesList()
  },[])

  const GetAllGradesList=()=>{
    GlobalAPI.GetAllGrades().then(res=>{
      const a = res.data
      a.sort((a, b) => a.id - b.id)
      setGrades(a)
    })
  }

  return (
    <div>
      <select className="rounded-lg p-3" onChange={(e)=>selectedGrade(e.target.value)}>
        <option>Select Grade</option>
        {grades.map((item, index) => (
          <option key={index} value={item.Grade}>
            {item.Grade} 
          </option>
        ))}
      </select>
    </div>
  );
}

export default GradeSelect;
