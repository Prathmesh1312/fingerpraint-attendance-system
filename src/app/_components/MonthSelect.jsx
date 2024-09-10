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
import { useMediaQuery } from "@uidotdev/usehooks";

import moment from "moment";

function MonthSelect({selectedMonth}) {

  const NextMonth = addMonths(new Date(), 0); 
  const [month, setMonth] = useState(NextMonth);
  const isDesktop = useMediaQuery("(min-width:768px)");

  return (
    <div >
      <Popover>
        <PopoverTrigger>
          {isDesktop ?(
            <div className="flex gap-2 items-center border p-3 rounded-lg bg-primary font-bold text-sm ">
            <CalendarDays  />
            {moment(month).format("MMM yyyy")}
          </div>
        ):(
          <div className="flex gap-2 items-center border p-1 rounded-lg bg-primary font-bold text-sm ">
            <CalendarDays  />
            {moment(month).format("MMM yyyy")}
          </div>
        )}
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
