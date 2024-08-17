import SigninCard from "../ui/SigninCard";

export default function page() {
  return (
    <div>
      <div className="flex h-screen">
        <div className="m-auto">
          <SigninCard type="Log in"/>
        </div>
      </div>
    </div>
  )
}
