import { useState } from "react";

const HireButton = () => {
    const [isShowHireInfo, setIsShowHireInfo] = useState<boolean>(false);

    return (
        <div className="relative">
            <button className="px-10 py-2 ring ring-gray-500
                hover:ring-3 hover:ring-green-600 hover:bg-green-600 hover:text-white hover:font-semibold
                rounded transition-all"
                onClick={() => setIsShowHireInfo(!isShowHireInfo)}
            >
                HIRE ME
            </button>

            {isShowHireInfo && (
                <div className="hidden md:block absolute left-0 -translate-x-[15%] top-[115%] min-w-[140%] bg-white shadow-lg rounded px-4 py-4"
                >
                    <div className="flex flex-col gap-2">
                        <button className="text-lg font-medium text-green-700 ring-2 ring-green-700 py-2 rounded transition-all duration-200
                                    hover:font-semibold hover:bg-green-700 hover:text-white"
                        >VIEW MY CV</button>
                        <div className="flex gap-2 items-center">
                            <hr className="flex-1 border-gray-300" />
                            <span className="text-sm font-medium text-gray-500">OR</span>
                            <hr className="flex-1 border-gray-300" />
                        </div>
                        <button className="text-lg font-medium text-white bg-green-700 py-2 rounded ring-2 ring-green-700 transition-all duration-200
                                    hover:font-semibold hover:bg-white hover:text-green-700"
                        >CONTACT ME</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default HireButton;