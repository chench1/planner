'use client'

import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'

import { useState, useRef } from "react";

export default function PopupCard({ open }: {open: boolean}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  if (open) {
    dialogRef.current?.close();
  } else {
    dialogRef.current?.showModal();
  }
  return (
    <div>
      <dialog className="w-3/12 mt-12 customShadow box-border rounded-md" ref={dialogRef}>
        <div className="flex flex-col">
          <label className="pl-2 text-xs">
            Edit Task
          </label>
          <input className='text-xs' value='hi'/>
        </div>
        
      </dialog>
    </div>
  )
}
