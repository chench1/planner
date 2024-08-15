import { useState } from "react"

export default function Tag({
  value, 
  enabled, 
  datakey, 
  setTagsCallback
}: {
  value: string, 
  enabled?: boolean, 
  datakey: number,
  setTagsCallback: (content: string, index: number) => void
}) {

  const [text, setText] = useState(value);

  return (
    <form onSubmit={(e) => {e.preventDefault()}}>
      <div className='rounded-md w-min-0 box-border border-2 border-gray-100'>
        <input 
          className="pl-2" 
          type='text' 
          value={text}
          size={text.length > 4 ? text.length - 2 : text.length == 0 ? 3 : text.length}
          onChange={(e) => {setText(e.target.value); setTagsCallback(e.target.value, datakey)}}
          readOnly={enabled}
        />
      </div>
    </form>
    
  )
}
