
export default function InputField(
  {labelText, labelClass, inputClass, placeholder}: 
  {labelText: string, placeholder?: string, labelClass?: string, inputClass?: string}) 
  {
  return (
    <>
      <label className={labelClass + 'text-xl flex items-center justify-end mr-2'}>
        {labelText}
      </label>
      <input className={inputClass + 'text-xl ml-1 mt-1 w-10/12 hover:bg-gray-100 rounded-md'} type='text' defaultValue={placeholder}/>
    </>
  )
}
