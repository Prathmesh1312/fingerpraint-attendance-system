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
        {/* <option value={'1st'}>1st</option>
        <option value={'2nd'}>2nd</option>
        <option value={'3rd'}>3rd</option> */}
        <option value={'4th'}>4th</option>
        <option value={'5th'}>5th</option>
        <option value={'6th'}>6th</option>
        <option value={'7th'}>7th</option>
        <option value={'9th'}>9th</option>
        <option value={'9th'}>9th</option>
        <option value={'10th'}>10th</option>
        <option value={'11th'}>11th</option>
        <option value={'12th'}>12th</option>
      </select>
    </div>
  );
}

export default GradeSelect;
