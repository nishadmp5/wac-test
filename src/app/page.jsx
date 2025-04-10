import Image from "next/image";
import SectionOne from "./pages/Home/SectionOne";
import SectionTwo from "./pages/Home/SectionTwo";
import SectionThree from "./pages/Home/SectionThree";

export default function Home() {
  return (
    <main className="flex h-auto flex-col items-center justify-between ">
     <div className="flex flex-col gap-40">
     <SectionOne/>
     <SectionTwo/>
     </div>
     <SectionThree/>
    </main>
  );
}
