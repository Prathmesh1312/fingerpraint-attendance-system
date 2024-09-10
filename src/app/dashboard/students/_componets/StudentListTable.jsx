"use client";
import React, {  useEffect, useRef, useState } from "react";
import { AgGridReact } from "ag-grid-react"; 
import "ag-grid-community/styles/ag-grid.css"; 
import "ag-grid-community/styles/ag-theme-quartz.css";
import { Button } from "@/components/ui/button";
import { Search, Trash } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";       
import GlobalAPI from "@/app/_services/GlobalAPI";
import { toast } from "sonner";


const pagination = true;
const paginationPageSize = 15;
const paginationPageSizeSelector = [25, 50, 100];

function StudentListTable({studentList, refreshData}) {
  const CustumButton = (props) => {
    return (
      <AlertDialog>
        <AlertDialogTrigger>
          <Button variant="destructive">
            <Trash />
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete student record and removed from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={()=>DeleteRecord(props?.data?.id)}>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    ); 
  };
  const [rowData, setRowData] = useState([]);
  const [searchInput, setSearchInput] = useState();
  const DeleteRecord=(id)=>{
    GlobalAPI.DeleteStudentRecord(id).then(res=>{
      if (res.data){
        toast('Student Record Deletd Successfully !') 
        refreshData()
      }
    })
  }
  const [colDef, setColDef] = useState([
    // { field: "id", filter: true, flex: 1 },
    { field: "name", filter: true, flex:1},
    { field: "grade", filter: true, flex: 0.5 },
    { field: "action", cellRenderer: CustumButton,width:80 },
  ]);

  useEffect(() => {
    studentList && setRowData(studentList.tempDoc);
  }, [studentList]);



  return (
    <div
      className="ag-theme-quartz-dark my-8" 
      style={{ height: 500 }} 
    >
      <div className="p-2 rounded-xl border shadow-sm flex gap-2 mb-4 max-w-sm text-white">
        <Search />
        <input
          type="text"
          placeholder="Search here...."
          className="outline-none w-full"
          onChange={(event) => setSearchInput(event.target.value)}
        />
      </div>
      {/* <Button onClick={Refresh()}>Refresh</Button> */}
      <AgGridReact
        rowData={rowData}
        columnDefs={colDef}
        quickFilterText={searchInput}       
      />
    </div>
  );
}

export default StudentListTable;
