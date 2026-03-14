const SkillItem = (props: { title: string, description: string, iconUrl: string }) => {
    return (
        <div className="px-3 md:px-4 ld:px-5 py-2 ring-2 ring-gray-500 rounded-lg group
                hover:ring-green-600 hover:scale-[1.05] hover:shadow-lg hover:shadow-green-500/40 hover:bg-green-10
                overflow-hidden cursor-pointer transition-all duration-100
                flex items-center gap-5">
            <div>
                <img src={props.iconUrl} alt="Icon tech skill" />
            </div>
            <div>
                <h1 className="font-semibold text-md lg:text-xl group-hover:text-green-700">{props.title}</h1>
                <p className="text-sm lg:text-md">{props.description}</p>
            </div>
        </div>
    )
}

export default SkillItem;