'use client'

import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'

import { useState, useRef } from "react";

export default function PopupCard({ open, setIsOpen }: { open: boolean, setIsOpen: (open: boolean) => void}) {

  return (
    <div>
      <Dialog open={open} onClose={() => setIsOpen(false)}>
        <div className='fixed box-border border-grey-500 border-2 rounded-md customShadow w-5/12'>
          <DialogPanel>
            <DialogTitle className="text-xs flex items-center justify-center">
              Edit Task
            </DialogTitle>
            <div className='pl-2 gap-2'>
              <div className='flex flex-row'>
                <Description className="text-xs">
                  Edit Name: 
                </Description>
                <input type='text' className='ml-1 h-4 text-xs' value={'Task Name'}/>
              </div>
              <div className='flex flex-row'>
                <Description className="text-xs">
                  Edit End Date:
                </Description>
              </div>
            </div>
            
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  )
}
