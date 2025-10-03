import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function ReviewCard(){
    return(
        <div className="flex justify-center items-center gap-4">
            <div>
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>

            <div>
                Got the Dream job 🎊
            </div>
        </div>
    )
}

export function ReviewCard2(){
    return(
        <div className="flex flex-col justify-center items-center gap-4">
            <h1 className="text-xs font-bold">
                Which hook manages state in functional components?
            </h1>
            <div className="w-full flex flex-col gap-2">
                <div className="w-full border-1 border-gray-400 rounded-3xl text-xs">
                    <h1 className="ml-4">
                        a. useEffect
                    </h1>
                </div>

                <div className="w-full border-1 border-gray-400 rounded-3xl text-xs bg-sidebar-foreground/50">
                    <h1 className="ml-4">
                        b. UseState
                    </h1>
                </div>

                <div className="w-full border-1 border-gray-400 rounded-3xl text-xs">
                    <h1 className="ml-4">
                        c. useRef
                    </h1>
                </div>

                <div className="w-full border-1 border-gray-400 rounded-3xl text-xs">
                    <h1 className="ml-4">
                        d. useReducer
                    </h1>
                </div>

            </div>
        </div>
    )
}


export function ReviewCard3(){
    return(
        <div className="div flex flex-col gap-4">
            <div className="flex gap-2">
                <div>
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
                
                <div>
                    <h1 className="text-xs font-bold">
                        Kushal Bhana
                    </h1>
                    <h1 className="text-xs">
                        User
                    </h1>
                </div>
            </div>
            
            <div className="flex gap-2 w-full items-center justify-center">
                <div className="absolute h-1 w-24 bg-sidebar-foreground/80 -ml-28">

                </div>
                <div className="flex gap-10">
                    <div className=" h-3 w-3 bg-sidebar-foreground/80 rounded-full">

                    </div>
                    <div className=" h-3 w-3 bg-sidebar-foreground/80 rounded-full">

                    </div>
                    <div className=" h-3 w-3 bg-sidebar-foreground/80 rounded-full">

                    </div>
                    <div className=" h-3 w-3 bg-sidebar-foreground/80 rounded-full">

                    </div>
                    <div className=" h-3 w-3 bg-sidebar-foreground/80 rounded-full">

                    </div>
                </div>
            </div>
        </div>
    )
}