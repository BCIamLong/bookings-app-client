import { useState } from "react";
import DatePicker from "react-datepicker";
import { HiCalendarDays } from "react-icons/hi2";

import "react-datepicker/dist/react-datepicker.css";
import { useSearchParams } from "react-router-dom";


export default function DateBox() {
  const [startDate, setStartDate] = useState('');
  const [searchParams, setSearchParams] = useSearchParams()
  if (!searchParams.get('date')) searchParams.set('date', 'none')
  return (
    <DatePicker className="px-4 " customInput={<div className="flex gap-2 w-48 items-center">
      <span className="cursor-pointer">
        <HiCalendarDays className="text-stone-600 text-2xl" />
      </span>
      <input className="w-full" type="text" value={!startDate ? 'Date' : startDate} disabled />
    </div>} selected={!startDate ? new Date() : new Date(startDate)} onChange={(date) => {
      const dateStr = date!.toLocaleDateString('en-US', { month: 'long', year: 'numeric', day: '2-digit' })
      setStartDate(dateStr)
      setSearchParams(params => {
        params.set('date', dateStr)
        return params
      })
    }}
    />
  );
}
