'use client'

import { useState, useRef } from "react";
import PopupCard from "./PopupCard";

export default function Table() {
  const [isOpen, setIsOpen] = useState(true);
  const toggleModal = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <>
      <div className="flex flex-row justify-center w-full mt-2">
        <label className="flex justify-center w-9/12 pt-2">
          Todo
        </label>
      </div>
      <div className="flex justify-center w-full mt-2">
        <div className="flex flex-col justify-center items-start w-9/12 box-border border-2 rounded-md customShadow">
        <button className="w-full text-left px-2 py-2 text-sm hover:bg-gray-100 box-border rounded-md" onClick={() => toggleModal()}>
          Task One
          <PopupCard open={isOpen} setIsOpen={setIsOpen}/>
        </button>
          bye
        </div>
      </div>
      
    </>
    
  )
}
