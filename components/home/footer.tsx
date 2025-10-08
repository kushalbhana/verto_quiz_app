export function Footer(){
    return(
        <div className="flex flex-wrap gap-2 sm:justify-between justify-center items-center px-8 text-white sm:h-12 h-20 bg-sidebar-foreground w-full mt-14">
            <div>
                Copyright 2025 | All Rights Reserved
            </div>
            
            <div className="flex justify-center items-center gap-10">
                <h1>
                    <a href="https://kushalbhana.dev/">
                        Portfolio
                    </a>
                </h1>
                <h1>
                    <a href="https://github.com/kushalbhana/">
                        Github
                    </a>
                </h1>
                <h1>
                    <a href="https://www.linkedin.com/in/kushalbhana">
                        LinkedIn
                    </a>
                </h1>
            </div>  
        </div>
    )
}