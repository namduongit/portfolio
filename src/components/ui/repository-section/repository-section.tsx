type Color = "blue" | "green" | "red" | "orange" | "yellow";

const RepositorySection = (props: { name: string, description: string, lang: { name: string, color: Color } }) => {
    const getBgColor = (color: Color): string => {
        const colorMap: Record<Color, string> = {
            blue: "bg-blue-600",
            green: "bg-green-600",
            red: "bg-red-600",
            orange: "bg-orange-600",
            yellow: "bg-yellow-600"
        }
        return colorMap[color]
    }

    return (
        <div className="flex flex-col h-full p-3 ring ring-gray-500 rounded space-y-10 xl:space-y-0
                    hover:scale-[1.02] hover:ring-2 hover:ring-blue-600 hover:shadow-md hover:shadow-blue-600
                    cursor-pointer bg-white transition-all duration-200"
        >
            <div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9" />
                        </svg>
                        <span className="font-semibold text-blue-700">{props.name}</span>
                    </div>

                    <div className="text-gray-700 text-sm cursor-pointer">
                        <i className="fa-solid fa-grip-vertical"></i>
                    </div>
                </div>
                <p className="font-light text-gray-700">{props.description}</p>
            </div>

            <div className="mt-auto flex items-center gap-1">
                <div className={`w-3.5 h-3.5 rounded-full ${getBgColor(props.lang.color)}`}></div>
                <span className="text-sm text-gray-700">{props.lang.name}</span>
            </div>
        </div>
    )
}

export default RepositorySection;