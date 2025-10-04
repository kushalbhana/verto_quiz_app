import { HeroText } from "./Herotext";

export function HeroBackground() {
  return (
    <div className="relative flex h-screen w-screen justify-center items-center overflow-hidden -mt-14">
      {/* Outer Circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full w-screen h-[1900px] bg-blue-200/10 flex justify-center items-center">
        {/* Second Circle */}
        <div className="rounded-full w-[1400px] h-[1400px] bg-white flex justify-center items-center">
          {/* Third Circle */}
          <div className="flex justify-center items-center rounded-full w-[1100px] h-[1100px] bg-blue-200/10 bg-gradient-to-b from-blue-200/10 to-white">
            {/* Inner Circle */}
            <div className="rounded-full w-[800px] h-[800px] bg-white flex justify-center items-center">
                 <HeroText  />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}