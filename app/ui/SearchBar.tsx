import { ChangeEvent } from "react";

export default function SearchBar({filter} : {filter: (text: ChangeEvent) => void}) {
  return (
    <div className="px-2 w-full">
      <input className='text-xs w-full' type='text' placeholder="Type here" onChange={(text) => filter(text)}/>
    </div>
  )
}
