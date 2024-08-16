import Image from "next/image";
import Date from "./ui/Date";
import Table from "./ui/Table";
import SigninButton from "./ui/SigninButton";

export default function Home() {
  return (
    <div className="flex h-screen">
      <div className="m-auto">
        <h1 className="text-4xl">
          Welcome To Your Digital Planner
        </h1>
        <div className="flex flex-row justify-center gap-2 mt-2">
          <SigninButton text="Sign up"/>
          <SigninButton text="Log in"/>
        </div>
      </div>
    </div>
  );
}
