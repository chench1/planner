import { useState } from "react"

export default function Tag({text, enabled}: {text: string, enabled?: boolean}) {
  const [editable, setEditable] = useState(false);

  return (
    <div className="rounded-md bg-blue-200 disabled:bg-blue-200 w-min-0">
      <input 
        className="pl-2" 
        type='text' 
        disabled={editable} 
        value={text} 
        size={text.length > 4 ? text.length - 4 : 4} 
        onClick={() => setEditable(true)} 
        onSubmit={() => setEditable(false)}
      />
    </div>
  )
}
