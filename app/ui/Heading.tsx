

export default function Heading({ visible }: {visible?: boolean}) {
  return (
    <div>
      <header className="flex items-center justify-between place-content-between ">
        <p>
          Planner
        </p>
        <button className="rounded-lg border-black">
          Sign in
        </button>
      </header>
    </div>
  )
}
