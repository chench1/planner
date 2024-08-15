'use client'

import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'

import { useState, useRef } from "react";
import InputField from './InputField';
import TagsGrid from './TagsGrid';


export default function PopupCard({ type, open, setIsOpen }: { type: string, open: boolean, setIsOpen: (open: boolean) => void}) {

  return (
    <form action={() => {console.log('hi')}}>
      <Dialog open={open} onClose={() => setIsOpen(false)}>
        <div className='fixed box-border border-grey-500 border-2 rounded-md customShadow w-5/12'>
          <DialogPanel>
            <DialogTitle className="flex text-2xl items-center justify-center">
              {type === 'add' ? 'Add Task' : 'Edit Task'}
            </DialogTitle>
            <div className='pl-2 gap-2'>
              <div className='flex grid grid-cols-2'>
                <InputField placeholder={type === 'add' ? '' : 'Task One'} labelText='Task Name: '/>
                <InputField placeholder={type === 'add' ? '' : '8/7/2024'} labelText='Start Date:'/>
                <InputField placeholder={type === 'add' ? '' : '8/7/2024'} labelText='End Date:'/>
                <label className='flex items-center justify-end mr-2 self-start'>
                  Tags:
                </label>
                <TagsGrid />
              </div>
            </div>
            <div className='flex justify-center item-center mt-1'>
              <button type='submit' className='w-2/12 bg-blue-500 rounded-md text-white'>
                Submit
              </button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </form>
  )
}
