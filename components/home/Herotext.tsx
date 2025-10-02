import { Button } from "../ui/button";
import { FaBookOpen, FaStar } from "react-icons/fa";
import { AnimatedTooltipPreview } from "./tooltip";


export function HeroText(){
    return(
        <div className="flex flex-col h-full wi-full justify-center items-center gap-8">
            <div className="flex flex-col text-5xl justify-center items-center font-bold">
                <div className="flex">
                    <h1>
                        <span className="text-sidebar-foreground"> Verto Quiz App! </span> Clear any
                    </h1>
                </div>
                <h1>
                    test by practicing here
                </h1>
            </div>

            <div className="flex justify-center items-center text-center text-gray-600">
                Practice smart, learn faster, and confidently clear <br/> any test with personalized quizzes.
            </div>
            
            <div className="flex justify-center items-center text-center text-gray-600">
                <Button className="h-12 rounded-4xl bg-sidebar-foreground hover:bg-blue-700">Get Started Today! <span><FaBookOpen className=""/></span></Button>
            </div>
            
            <div className="flex justify-center items-center text-center mt-4 gap-6">
                <div>
                    <AnimatedTooltipPreview/>
                </div>
                <div className="flex gap-2 justify-center items-center"> 
                    <FaStar className="text-xl text-yellow-400"/> <b>4.8/5</b> <p className="text-gray-500">Ratings over 500 Reviews</p>
                </div>
                
            </div>
        </div>
    )
}