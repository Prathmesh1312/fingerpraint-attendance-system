"use client";
import React, { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { CalendarDays, CloudCog } from "lucide-react";
import { addMonths } from "date-fns";
import { Calendar } from "@/components/ui/calendar";

import moment from "moment";

function MonthSelect({selectedMonth}) {
  // const today = new Date();

  const NextMonth = addMonths(new Date(), 0); 

  const [month, setMonth] = useState(NextMonth);

  return (
    <div >
      <Popover>
        <PopoverTrigger>
          <div className="flex gap-2 items-center border p-3 rounded-lg bg-primary font-bold ">
            <CalendarDays className="h-5 w-5" />
            {moment(month).format("MMM yyyy")}
          </div>
        </PopoverTrigger>
        <PopoverContent>
          <Calendar
            mode="single"
            month={month}
            onMonthChange={(value) => {
              selectedMonth(value);
              setMonth(value)
            }}
            className='flex flex-1 justify-center'
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default MonthSelect;
