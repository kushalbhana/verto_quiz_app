"use client"

import { ReviewCard, ReviewCard2, ReviewCard3 } from "./ReviewCard";
import { ExpertiseChart } from "../common/Expertise-chart";

export function HeroOverlay() {
  return (
    <div 
      className="absolute inset-0 w-full h-full lg:grid grid-cols-3 z-20 pointer-events-none hidden -mt-14">
      {/* Column 1 */}
      <div className="flex flex-col justify-center items-center space-y-4">
        <div 
        style={{
            animation: 'floating 8s ease-in-out infinite',
          }}
        className="bg-white shadow-lg rounded-2xl p-4 ml-56 mt-32 pointer-events-auto"><ReviewCard/></div>
        <div className="bg-white shadow-lg rounded-2xl p-4 w-60 h-48 mt-28 -ml-48 pointer-events-auto"><ReviewCard2/></div>
      </div>

      {/* Column 2 (empty for now, overlay space) */}
      <div></div>

      {/* Column 3 */}
      <div className="flex flex-col justify-center items-center space-y-4">
        <div
        style={{
            animation: 'floating 6s ease-in-out infinite',
          }}
        className="bg-white shadow-lg rounded-2xl p-4 w-72 h-28 ml-12 pointer-events-auto"><ReviewCard3/></div>
        <div
          style={{
            animation: 'floating 6s ease-in-out infinite',
          }}
        >
          <ExpertiseChart />
        </div>

        <style jsx>{`
          @keyframes floating {
            0% { transform: translate(0, 0) rotate(0deg); }
            25% { transform: translate(4px, -6px) rotate(1deg); }
            50% { transform: translate(-3px, 5px) rotate(-1deg); }
            75% { transform: translate(5px, 3px) rotate(1deg); }
            100% { transform: translate(0, 0) rotate(0deg); }
          }
        `}</style>
        
      </div>
    </div>
  );
}
