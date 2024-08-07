'use client'

import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'

import { useState, useRef } from "react";
import InputField from './InputField';


export default function PopupCard({ open, setIsOpen }: { open: boolean, setIsOpen: (open: boolean) => void}) {

  return (
    <div>
      <Dialog open={open} onClose={() => setIsOpen(false)}>
        <div className='fixed box-border border-grey-500 border-2 rounded-md customShadow w-5/12'>
          <DialogPanel>
            <DialogTitle className="flex text-2xl items-center justify-center">
              Edit Task
            </DialogTitle>
            <div className='pl-2 gap-2'>
              <div className='flex grid grid-cols-3'>
                <InputField inputClass='' placeholder='Task One' labelText='Task Name: '/>
                <InputField inputClass='' placeholder='8/7/2024' labelText='Start Date:'/>
                <InputField inputClass='' placeholder='8/7/2024' labelText='End Date:'/>
                <InputField inputClass='' labelText='Tags:'/>
              </div>
              
            </div>
            
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  )
}
