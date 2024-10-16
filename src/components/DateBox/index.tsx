import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


export default function DateBox() {
  const [startDate, setStartDate] = useState('');
  return (
    <DatePicker className="px-4 " customInput={<div className="flex gap-2">
      <span className="cursor-pointer">📅</span>
      <input type="text" value={!startDate ? 'Date filter' : startDate} disabled />
    </div>} selected={!startDate ? new Date() : new Date(startDate)} onChange={(date) => setStartDate(date!.toLocaleDateString('en-US', { month: 'long', year: 'numeric', day: '2-digit' }))}
    />
  );
}
