'use client'

import { useState, useRef, ChangeEvent } from "react";
import PopupCard from "./PopupCard";
import SearchBar from "./SearchBar";
import Task from "./Task";

export default function Table() {
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [isOpenCreate, setIsOpenCreate] = useState(false);

  const [tasks, setTasks] = useState();

  const toggleModalEdit = () => {
    if (isOpenEdit) {
      setIsOpenEdit(false);
    } else {
      setIsOpenEdit(true);
    }
  };

  const toggleModalCreate = () => {
    if (isOpenCreate) {
      setIsOpenCreate(false);
    } else {
      setIsOpenCreate(true);
    }
  }

  const filter = (text: ChangeEvent) => {

  }

  return (
    <>
      <div className="flex flex-row justify-center w-full mt-2">
        <label className="text-4xl flex justify-center w-9/12 pt-2">
          Todo
        </label>
      </div>
      <div className="flex justify-center w-full mt-2">
        <div className="flex flex-col justify-center w-9/12 box-border border-2 rounded-md customShadow">
          <div className="flex flex-row justify-between mt-2">
            <SearchBar filter={filter} />
            <button className="mr-2 w-2/12 bg-blue-500 rounded-md text-white" onClick={() => toggleModalCreate()}>
              Add New Task
            </button>
          </div>
          <div className="flex flex-row ml-2 mt-2 items-center">
            <label className="h-4">
              Filter By
            </label>
          </div>

          <div className="mt-2">
            <Task toggleModal={toggleModalEdit}/>
          </div>
        </div>
      </div>
      <PopupCard open={isOpenEdit} setIsOpen={setIsOpenEdit}/>
      <PopupCard open={isOpenCreate} setIsOpen={setIsOpenCreate} />

    </>
    
  )
}
