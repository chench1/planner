import { useState } from "react";
import Tag from "./Tag";

export default function TagsGrid() {
  const [tags, setTags] = useState(['tag 1'])

  const createTag = () => {
    setTags(tags.concat(['']))
  }

  return (
    <div className="flex flex-wrap gap-1">
      {tags && tags.map((tag, index) => (
        <Tag text={tag} key={index} />
      ))}
      <div className="flex items-center justify-center ml-2">
        <button 
          className=" text-white bg-gray-200 rounded-lg h-6 w-6"
          onClick={createTag}
        >
          +
        </button>

      </div>
    </div>
  )
}
