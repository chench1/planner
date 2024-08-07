import { ChangeEvent } from "react";

export default function SearchBar({filter} : {filter: (text: ChangeEvent) => void}) {
  return (
    <div className="px-2 w-10/12">
      <input className='text-2xl w-full hover:bg-gray-100' type='text' placeholder="Type here" onChange={(text) => filter(text)}/>
    </div>
  )
}
