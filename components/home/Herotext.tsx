"use client"
import { Button } from "../ui/button";
import { FaBookOpen, FaStar } from "react-icons/fa";
import { AnimatedTooltipPreview } from "./tooltip";
import { FeatureSection } from "./FeatureSection";
import { BsStars } from "react-icons/bs";
import LogoCloud from "../logo-cloud";

export function HeroText(){
    const scrollToBottom = () => {
        window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth", // smooth scrolling
        });
    };

    return(
        <div className="flex flex-col h-screen w-full justify-end items-center gap-8 mt-10">
            <div className="flex flex-col text-2xl lg:text-4xl justify-center items-center font-bold">
                <div className="flex">
                    <div className="flex gap-2">
                        <h1>
                            <span className="text-sidebar-foreground"> Verto Quiz App </span>
                        </h1>
                        <h1>
                            <BsStars className="text-sidebar-foreground"/>
                        </h1>
                    </div>
                    <div>
                        <h1>
                            <span> Clear any </span> 
                        </h1>
                    </div>
                </div>
                <h1>
                    test by practicing here
                </h1>
            </div>

            <div className="flex justify-center items-center text-center text-gray-600">
                Practice smart, learn faster, and confidently clear <br/> any test with personalized quizzes.
            </div>
            
            <div className="flex justify-center items-center text-center text-gray-600">
                <Button 
                    className="h-12 rounded-4xl bg-sidebar-foreground hover:-translate-y-1 hover:cursor-pointer"
                    onClick={scrollToBottom}
                    >
                        Get Started Today! 
                        <span><FaBookOpen className=""/></span>
                </Button>
            </div>
            
            <div className="block lg:flex justify-center items-center text-center mt-4 gap-6">
                <div>
                    <AnimatedTooltipPreview/>
                </div>
                <div className="flex gap-2 justify-center items-center"> 
                    <FaStar className="text-xl text-yellow-400"/> <b>4.8/5</b> <p className="text-gray-500">Ratings over 500 Reviews</p>
                </div>
            </div>

            <div className="flex gap-2 justify-center items-center"> 
                <FeatureSection/>
            </div>
            
            <div className="w-full">
                <LogoCloud />
            </div>

        </div>
    )
}