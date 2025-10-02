import { FaMagic } from "react-icons/fa";

export function FeatureSection() {
  const features = [
    "Quiz on various topics",
    "Free and Open Source",
    "Monitor your Progress",
    "View Result"
  ];

  return (
    <div className="flex justify-between items-center gap-10 mt-8 overflow-x-auto">
      {features.map((element: string, index: number) => (
        <div
          key={index}
          className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-4xl whitespace-nowrap"
        >
          <FaMagic className="text-sidebar-foreground bg-blue-400/20 p-1 text-xl rounded-md" />
          <span>{element}</span>
        </div>
      ))}
    </div>
  );
}
