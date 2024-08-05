'use client'

import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'

import { useState, useRef } from "react";

export default function PopupCard({ open, setIsOpen }: { open: boolean, setIsOpen: (open: boolean) => void}) {

  return (
    <div>
      <Dialog open={open} onClose={() => setIsOpen(false)}>
        <div className='flex flex-col justify-center items-center '>
          <DialogPanel>
            Hi
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  )
}
