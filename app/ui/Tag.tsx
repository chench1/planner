import { useState } from "react"

export default function Tag({value, enabled}: {value: string, enabled?: boolean}) {

  const [text, setText] = useState(value);

  return (
    <form onSubmit={(e) => {e.preventDefault()}}>
      <div className={`rounded-md w-min-0`}>
        <input 
          className="pl-2" 
          type='text' 
          value={text}
          size={text.length > 4 ? text.length - 2 : text.length == 0 ? 3 : text.length}
          onChange={(e) => {setText(e.target.value)}}
        />
      </div>
    </form>
    
  )
}
