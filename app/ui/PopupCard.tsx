'use client'

import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'

import { useState, useRef } from "react";
import InputField from './InputField';
import TagsGrid from './TagsGrid';


export default function PopupCard({ open, setIsOpen }: { open: boolean, setIsOpen: (open: boolean) => void}) {

  return (
    <form>
      <Dialog open={open} onClose={() => setIsOpen(false)}>
        <div className='fixed box-border border-grey-500 border-2 rounded-md customShadow w-5/12'>
          <DialogPanel>
            <DialogTitle className="flex text-2xl items-center justify-center">
              Edit Task
            </DialogTitle>
            <div className='pl-2 gap-2'>
              <div className='flex grid grid-cols-2'>
                <InputField placeholder='Task One' labelText='Task Name: '/>
                <InputField placeholder='8/7/2024' labelText='Start Date:'/>
                <InputField placeholder='8/7/2024' labelText='End Date:'/>
                <label className='flex items-center justify-end mr-2 self-start'>
                  Tags:
                </label>
                <TagsGrid />
              </div>
            </div>
            <div className='flex justify-center item-center'>
              <button className='w-2/12 bg-blue-500 rounded-md text-white'>
                Submit
              </button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </form>
  )
}
