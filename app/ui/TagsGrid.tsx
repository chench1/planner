import { useState } from "react";
import Tag from "./Tag";

export default function TagsGrid() {
  const [tags, setTags] = useState(['tag 1'])

  const createTag = () => {
    setTags(tags.concat(['']))
  }

  const updateTag = (content: string, index: number) => {
      const newTags = tags.map((c, i) => {
        if (i == index) {
          return content;
        }
        return c;
      });

      setTags(newTags);
  }

  return (
    <div className="flex flex-wrap gap-1">
      {tags && tags.map((tag, index) => (
        <Tag value={tag} key={index} datakey={index} setTagsCallback={updateTag}/>
      ))}
      <div className="flex items-center justify-center ml-1">
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
