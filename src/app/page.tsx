import Image from "next/image";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";



export default function Home() {
  return (
      
        
        <BackgroundBeamsWithCollision className="">

          <nav className="flex flex-col items-center bg-gray-950">
            <h1 className="font-orbitron text-6xl font-bold font-display bg-gradient-to-r from-indigo-500 via-purple-500 to-[#6A0DAD] bg-clip-text text-transparent">
              DarkArts
            </h1>
            <h2 className=" font-orbitron text-white text-lg font-sans">
              Precision in every layer
            </h2>
          </nav>

          
          
        </BackgroundBeamsWithCollision>
    
      
   
  );
}
