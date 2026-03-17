import { useState } from "react";
import avatar from "../../../assets/gifs/avatar-github.gif";
import icon from "../../../assets/images/github-icon.png";

const GithubSection = () => {
    const [textButton, setTextButton] = useState<"Hi, I'm here" | "Go to my Github page">("Hi, I'm here");
    const [isClickIcon, setIsClickIcon] = useState<boolean>(false);

    return (
        <div className="space-y-3">
            <div className="relative max-w-40">
                <div className="rounded-full overflow-hidden ring-2 ring-gray-500">
                    <img src={avatar} alt="Github Section Avatar" className="w-full h-full" />
                </div>
                <div className={`absolute h-8 rounded-full bg-gray-900 ring-1 ring-gray-500 bottom-0 right-0 -translate-y-3/2 z-10
                    flex items-center justify-center cursor-pointer ${isClickIcon ? "translate-x-4 w-16 flex items-center gap-1 px-2" : "-translate-x-1/2 w-8"}`}
                    onClick={() => setIsClickIcon(!isClickIcon)}
                >
                    <img src={icon} alt="Github Avatar Icon" className="w-4 h-4" />
                    {isClickIcon && (<div className="text-gray-300 text-sm font-semibold">Hi</div>)}
                </div>
            </div>
            <div className="space-y-2">
                <div>
                    <h1 className="text-2xl font-semibold">Nguyễn Nam Dương</h1>
                    <p className="flex gap-2 text-lg font-light text-gray-700">
                        <span>namduongit</span>
                        <span>-</span>
                        <span>he/him</span>
                    </p>
                </div>

                <button className="bg-gray-500/90 text-white w-full py-1 rounded-lg
                    hover:bg-white hover:text-gray-500 hover:ring-2 hover:ring-gray-500 hover:font-semibold transition-all duration-100"
                    onMouseEnter={() => setTextButton("Go to my Github page")}
                    onMouseLeave={() => setTextButton("Hi, I'm here")}
                >
                    <span>{textButton}</span>
                </button>
            </div>
            <div className="space-y-2">
                <div className="flex gap-2 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                    </svg>
                    <span>Sai Gon University</span>
                </div>
                <div className="flex gap-2 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                    <span>Xuan Lap, Dong Nai, Viet nam</span>
                </div>
                <div className="flex gap-2 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                    </svg>
                    <span>namduongit</span>
                </div>
            </div>
        </div>
    )
}

export default GithubSection;