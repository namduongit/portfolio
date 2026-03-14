import DotLine from "../dot-line/dot-line";
import RepositorySection from "../repository-section/repository-section";

const ProjectSection = () => {
    return (
        <div className="flex gap-5 lg:gap-10">
            <div className="min-h-125 grid grid-cols-2 gap-6 px-2 py-2 auto-rows-fr">
                <div className="col-span-2 lg:col-span-1 h-full">
                    <RepositorySection
                        name="appointments-hospital"
                        description="A web application for booking and managing doctor appointments online."
                        lang={{
                            name: "Typscript, Java",
                            color: "yellow"
                        }}
                    />
                </div>
                <div className="col-span-2 lg:col-span-1 h-full">
                    <RepositorySection
                        name="green-life"
                        description="This is a really awesome shopping website."
                        lang={{
                            name: "Typscript",
                            color: "blue"
                        }}
                    />
                </div>
                <div className="col-span-2 lg:col-span-1 h-full">
                    <RepositorySection
                        name="flash-card"
                        description="Learning English with an interactive flashcard system."
                        lang={{
                            name: "Typscript",
                            color: "blue"
                        }}
                    />
                </div>
                <div className="col-span-2 lg:col-span-1 h-full">
                    <RepositorySection
                        name="url-shorter"
                        description="URL Shortener is a backend service that converts long URLs into short, shareable links."
                        lang={{
                            name: "GoLang",
                            color: "blue"
                        }}
                    />
                </div>
                <div className="col-span-2 lg:col-span-1 h-full">
                    <RepositorySection
                        name="sgo-chat"
                        description="Realtime chat app."
                        lang={{
                            name: "Typscript, GoLang, Java",
                            color: "orange"
                        }}
                    />
                </div>
            </div>

            <DotLine  />
        </div>
    )
}

export default ProjectSection;