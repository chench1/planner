'use client'

import { useState } from "react";

export default function DateHeader() {
  const [date, setDate] = useState(new Date());
  
  const handleDate = (change: number) => {
    setDate(new Date(date.getTime() + change * 1000*60*60*24*1))
  }

  return (
    <div className="w-full flex flex-row mt-20 justify-center">
      <div className="flex justify-center w-9/12 rounded-lg box-border border-2 border-indigo-500/50 ">
        <button className="mr-3 text-3xl" onClick={() => handleDate(-1)}>
          {"<"}
        </button>
        <label className="text-3xl">
          {`${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}` + ' tasks'}
        </label>
        <button className="ml-3 text-3xl" onClick={() => handleDate(1)}>
          {">"}
        </button>
      </div>
    </div>
  )
}