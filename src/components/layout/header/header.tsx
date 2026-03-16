import { useEffect, useState } from "react"
import HireButton from "../../ui/hire-button/hire-button";

type InViewElement = "Home" | "About" | "Skill" | "Project";

const Header = () => {
    const [inView, setInView] = useState<InViewElement>();
    const [isShowSidebar, setIsShowSibar] = useState<boolean>(false);

    const ListActive = () => {
        return (
            <>
                <li className="nav-header cursor-pointer hover:text-green-700" onClick={() => activeContent("Home")}>HOME</li>
                <li className="nav-header cursor-pointer hover:text-green-700" onClick={() => activeContent("About")}>ABOUT ME</li>
                <li className="nav-header cursor-pointer hover:text-green-700" onClick={() => activeContent("Skill")}>SKILL</li>
                <li className="nav-header cursor-pointer hover:text-green-700" onClick={() => activeContent("Project")}>PROJECT</li>
                <HireButton />
            </>
        )
    }

    const activeContent = (viewName: InViewElement) => {
        setInView(viewName);
        setIsShowSibar(false)
    }

    useEffect(() => {
        if (!inView) return;
        const element = document.getElementById(inView);
        if (!element) return;

        const elementRect = element.getBoundingClientRect();
        const scrollLeft = elementRect.left + window.scrollX - (window.innerWidth / 2) + (elementRect.width / 2);
        const scrollTop = elementRect.top + window.scrollY - (window.innerHeight / 2) + (elementRect.height / 2);

        window.scrollTo({
            left: scrollLeft,
            top: scrollTop,
            behavior: "smooth"
        });
    }, [inView]);

    return (
        <header className="sticky top-0 left-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200">
            <div className="container mx-auto flex justify-between items-center py-4 px-4 lg:px-6">
                <div className="flex flex-col">
                    <span className="text-xs uppercase tracking-[0.5em] text-gray-500">namduong.dev</span>
                    <span className="text-2xl md:text-3xl font-semibold text-gray-900">Developer Portfolio</span>
                </div>
                <div>
                    <ul className="hidden md:flex md:items-center gap-8 lg:gap-10 text-sm font-semibold text-gray-700">
                        <ListActive />
                    </ul>

                    <button className="md:hidden p-2 hover:bg-gray-100 rounded"
                        onClick={() => setIsShowSibar(true)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                        </svg>
                    </button>

                </div>
            </div>

            {
                isShowSidebar && (
                    <div className="md:hidden absolute top-0 left-0 w-screen h-screen bg-gray-900/50"
                        onClick={() => setIsShowSibar(false)}
                    >
                        <div className="sidebar absolute top-0 right-0 w-64 h-screen bg-white p-5"
                            onClick={e => e.stopPropagation()}
                        >
                            <div className="flex justify-between items-center mb-5">
                                <p className="text-lg font-semibold">Menu</p>
                                <button onClick={() => setIsShowSibar(false)} className="p-2">✕</button>
                            </div>
                            <ul className="flex flex-col gap-5 text-gray-800">
                                <ListActive />
                            </ul>
                        </div>
                    </div>
                )
            }
        </header>
    )
}

export default Header;