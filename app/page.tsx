import Image from "next/image";
import Date from "./ui/Date";
import Table from "./ui/Table";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Date/>      
      <Table />
    </div>
  );
}
