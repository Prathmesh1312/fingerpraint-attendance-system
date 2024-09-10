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
import { toast } from "sonner";

function AddNewStudent({refershData}) {
  const [open, setOpen] = useState(false);
  const [grades, setGrades] = useState([]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

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

  const  onSubmit = async(data) => {
    if (data){
      setOpen(false);
      
    }
    await GlobalAPI.CreateStudent(data).then(res=>{
    refershData()
    reset()
    toast('New Student Added !')
    })
  };


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
              <form onSubmit={handleSubmit(onSubmit)} className="flex gap-y-5 flex-col" >
                <div className="flex flex-col">
                  <label className="mb-3"> Student ID </label>
                  <div className="flex flex-row gap-3">
                    <Input className="mb-3" type="text" placeholder="ID : yfPKqZjui7ySxSstn5vt" {...register("id", { required: true })} />
                    <Button variant='outline'>Get ID</Button>
                  </div>
                </div>
                <div className="flex flex-col">
                  <label className="mb-3">Student Full Name</label>
                  <Input className="mb-3" type="text" placeholder="Name : ex. jhon doe" {...register("name", { required: true })} />
                </div>
                <div className="flex flex-col">
                  <label className="mb-3">Select Grade</label>
                  <select className="p-3 rounded-lg mb-3" {...register("grade", { required: true })} >
                    <option>Select Grade</option>
                    {grades.map((item, index)=>( <option key={index} value={item.Grade}>{item.Grade}</option> ))}
                  </select>
                </div>
                <div className="flex justify-between">
                  <Button type='button' onClick={() => setOpen(false)} variant="outline"> Cancel </Button>
                  <Button type="submit"> Save </Button>
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
