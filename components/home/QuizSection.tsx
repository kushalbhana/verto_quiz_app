import { FaMagic } from "react-icons/fa"
import ListQuiz from "./ListQuiz"
export function QuizSection(){
    return(
        <div className="w-full h-full flex flex-col items-center gap-4 mt-6">
            <div className=" h-10 w-44 bg-white rounded-3xl shadow-2xl shadow-gray-500 flex gap-2 p-1 items-center pl-4">
                <div className="bg-sidebar-foreground/20 h-6 w-8 rounded-full flex justify-center items-center -ml-2">
                    <FaMagic className="text-sidebar-foreground p-1 text-xl rounded-md" />
                </div>
                <div className="text-xs h-6 px-2 w-full bg-sidebar-foreground/20 rounded-3xl flex justify-center items-center">
                    Test Your Skills
                </div>
            </div>
            <div className="mt-2">
                <h1 className="text-4xl font-bold text-center">
                    Test Your <span className="text-sidebar-foreground"> Skills </span> on the given <span className="text-sidebar-foreground"> Quizes </span>
                </h1>
            </div>
            <div>
                <h1 className="text-base text-gray-500">
                    All in one place to give your quiz before interview
                </h1>
            </div>
            <div className="mt-10">
                <ListQuiz/>
            </div>
        </div>
    )
}