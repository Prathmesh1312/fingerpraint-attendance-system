"use client";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import GlobalAPI from "@/app/_services/GlobalAPI";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

function AddNewStudent() {
  const [open, setOpen] = useState(false);
  const [grades, setGrades] = useState([]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  useEffect(()=>{
    GetAllGradesList()
  },[])

  const GetAllGradesList=()=>{
    GlobalAPI.GetAllGrades().then(res=>{
      const a = res.data
      a.sort((a, b) => a.id - b.id)
      console.log(a)
      setGrades(a)
    })
  }

  const onSubmit = (data) => console.log(data);


  return (
    <div>
      <Button onClick={() => setOpen(true)}>+ Add New Student</Button>
      <Dialog open={open}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              <div className="mb-3">Add New Student</div>
            </DialogTitle>
            <DialogDescription>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex gap-y-5 flex-col"
              >
                <div className="flex flex-col">
                  <label className="mb-3">Student Full Name</label>
                  <Input
                    className="mb-3"
                    type="text"
                    placeholder="Name : ex. jhon doe"
                    {...register("name", { required: true })}
                  />
                </div>
                <div className="flex flex-col">
                  <label className="mb-3">Select Grade</label>
                  <select
                    className="p-3 rounded-lg mb-3"
                    {...register("grade", { required: true })}
                  >
                    <option>Select Grade</option>
                    {grades.map((item, index)=>(
                      <option key={index} value={item.Grade}>{item.Grade}</option>
                    ))}
                    {/* <option value={"5th"}>5th</option>
                    <option value={"6th"}>6th</option>
                    <option value={"7th"}>7th</option>
                    <option value={"8th"}>8th</option>
                    <option value={"9th"}>9th</option>
                    <option value={"10th"}>10th</option> */}
                  </select>
                </div>
                <div className="flex justify-between">
                  <Button onClick={() => setOpen(false)} variant="outline">
                    Cancel
                  </Button>
                  <Button type="submit">Save</Button>
                </div>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddNewStudent;
