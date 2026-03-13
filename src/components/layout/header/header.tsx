import { useState } from "react"
import HireButton from "../../ui/button/hire/hire-button";

const ListActive = () => {
    return (
        <>
            <li className="nav-header cursor-pointer hover:text-green-700">HOME</li>
            <li className="nav-header cursor-pointer hover:text-green-700">ABOUT ME</li>
            <li className="nav-header cursor-pointer hover:text-green-700">SKILL</li>
            <li className="nav-header cursor-pointer hover:text-green-700">PROJECT</li>
            <HireButton />
        </>
    )
}


const Header = () => {
    const [isShowSidebar, setIsShowSibar] = useState<boolean>(false);

    return (
        <header className="bg-white py-4 px-8 lg:px-5 xl:px-3 2xl:px-0">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-2xl md:text-3xl font-semibold">
                    <span className="text-black">nam</span>
                    <span className="text-blue-800">duong</span>
                </div>
                <div>
                    <ul className="hidden md:flex md:items-center gap-6 lg:gap-10 text-md lg:text-xl font-semibold">
                        <ListActive />
                    </ul>

                    <button className="md:hidden p-2 hover:bg-gray-100 rounded"
                        onClick={() => setIsShowSibar(true)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                        </svg>
                    </button>

                </div>
            </div>

            {
                isShowSidebar && (
                    <div className="md:hidden absolute top-0 left-0 w-screen h-screen bg-gray-500/40 z-90"
                        onClick={() => setIsShowSibar(false)}
                    >
                        <div className="sidebar absolute top-0 right-0 w-60 h-screen bg-white p-5 z-100"
                            onClick={e => e.stopPropagation()}
                        >
                            <ul className="flex flex-col gap-5">
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