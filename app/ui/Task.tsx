
export default function Task({toggleModal}: {toggleModal: () => void}) {
  return (
    <>
      <button className="w-full text-left mx-1 px-1 my-1 py-1 text-2xl hover:bg-gray-100 box-border rounded-md" onClick={() => toggleModal()}>
        Task One
      </button>
    </>
  )
}
