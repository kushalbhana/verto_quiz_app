import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { MdOutlineShowChart } from "react-icons/md";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

const data = [
  { subject: "Core Subjects", value: 120 },
  { subject: "Accuracy", value: 98 },
  { subject: "Time", value: 86 },
  { subject: "Data Structures", value: 99 },
  { subject: "Aptitude", value: 85 },
  { subject: "Devops", value: 65 },
];

export function ExpertiseChart() {
  return (
    <Card className="w-56 h-40 p-2 flex items-center justify-center mt-16">
        
            <CardTitle className="text-xs whitespace-nowrap flex gap-2"> <MdOutlineShowChart className="text-lg"/> Analyze performance</CardTitle>
        
        <CardContent className="p-0 w-full h-full">
            <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" tick={{ fontSize: 8 }} />
                <PolarRadiusAxis tick={{ fontSize: 8 }} />
                <Radar
                name="Score"
                dataKey="value"
                stroke="#3357a3"
                fill="#3357a3"
                fillOpacity={0.6}
                strokeWidth={1}
                />
            </RadarChart>
            </ResponsiveContainer>
        </CardContent>
    </Card>
  );
}
