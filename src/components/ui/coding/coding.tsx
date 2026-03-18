const Coding = () => {
    return (
        <div className="w-150 md:w-full flex text-sm lg:text-base p-4 text-gray-200 tracking-[0.008em] jetbrains-mono">
            <div className="flex-1">
                <p className="space-x-1">
                    <span>package</span>
                    <span>
                        <span className="text-pink-400">com.software.engineer</span>
                        <span>{";"}</span>
                    </span>
                </p>
                <p className="py-3"></p>
                <p>
                    <span>@</span>
                    <span className="text-sky-400">Service</span>
                </p>
                <p className="space-x-1">
                    <span className="text-pink-400">public class</span>
                    <span className="text-sky-400">AboutMeService</span>
                    <span className="text-white">{"{"}</span>
                </p>
                <p className="ps-10">
                    <p className="space-x-1">
                        <span className="text-pink-400">public</span>
                        <span className="text-sky-400">Map</span>
                        <span>
                            <span>{"<"}</span>
                            <span className="text-sky-400">String</span>
                            <span>, {" "}</span>
                            <span className="text-sky-400">Object</span>
                            <span>{">"}</span>
                        </span>
                        <span className="text-green-400">getAboutMe</span>
                        <span className="text-pink-400">()</span>
                        <span className="text-pink-400">{"{"}</span>
                    </p>

                    <p className="ps-10 space-x-1">
                        <span className="text-pink-400">return</span>
                        <span className="text-pink-400">new</span>
                        <span className="text-green-400">HashMap</span>
                        <span className="space-x-1">
                            <span>
                                <span>{"<"}</span>
                                <span className="text-sky-400">String</span>
                                <span>, {" "}</span>
                                <span className="text-sky-400">Object</span>
                                <span>{">"}</span>
                                <span>()</span>
                            </span>
                            <span>
                                <span className="text-sky-400">{"{"}</span>
                                <span className="text-green-400">{"{"}</span>
                            </span>
                        </span>
                        <p className="ps-10">
                            <p>
                                <span>
                                    <span className="text-green-400">put</span>
                                    <span className="text-purple-400">{"("}</span>
                                    <span className="text-yellow-200">"Name"</span>
                                    <span>, {" "}</span>
                                    <span className="text-yellow-200">"Nguyen Nam Duong"</span>
                                    <span className="text-purple-400">{")"}</span>
                                    <span>{";"}</span>
                                </span>
                            </p>
                            <p>
                                <span>
                                    <span className="text-green-400">put</span>
                                    <span className="text-purple-400">{"("}</span>
                                    <span className="text-yellow-200">"Birthday"</span>
                                    <span>, {" "}</span>
                                    <span className="space-x-1">
                                        <span className="text-pink-400">new</span>
                                        <span>
                                            <span className="text-sky-400">int</span>
                                            <span className="text-orange-400">{"[]"}</span>
                                            <span>
                                                <span className="text-orange-400">{"{"}</span>
                                                <span>
                                                    <span className="text-purple-400">2005</span>
                                                    <span>, {" "}</span>
                                                    <span className="text-purple-400">02</span>
                                                    <span>, {" "}</span>
                                                    <span className="text-purple-400">14</span>
                                                </span>
                                                <span className="text-orange-400">{"}"}</span>
                                            </span>
                                        </span>
                                    </span>
                                    <span className="text-purple-400">{")"}</span>
                                    <span>{";"}</span>
                                </span>
                            </p>
                            <p>
                                <span>
                                    <span className="text-green-400">put</span>
                                    <span className="text-purple-400">{"("}</span>
                                    <span className="text-yellow-200">"Intern position"</span>
                                    <span>, {" "}</span>
                                    <span className="space-x-1">
                                        <span className="text-pink-400">new</span>
                                        <span>
                                            <span className="space-x-1">
                                                <span>
                                                    <span className="text-green-400">ArrayList</span>
                                                    <span>{"<"}</span>
                                                    <span className="text-sky-400">String</span>
                                                    <span>{">"}</span>
                                                    <span>{"()"}</span>
                                                </span>
                                                <span>
                                                    <span className="text-sky-400">{"{"}</span>
                                                    <span className="text-green-400">{"{"}</span>
                                                </span>
                                            </span>
                                            <p className="ps-10">
                                                <p>
                                                    <span>
                                                        <span className="text-green-400">put</span>
                                                        <span className="text-purple-400">{"("}</span>
                                                        <span className="text-yellow-200">"Backend Intern"</span>
                                                        <span className="text-purple-400">{")"}</span>
                                                        <span>{";"}</span>
                                                    </span>
                                                </p>
                                                <p>
                                                    <span>
                                                        <span className="text-green-400">put</span>
                                                        <span className="text-purple-400">{"("}</span>
                                                        <span className="text-yellow-200">"Fullstack Intern"</span>
                                                        <span className="text-purple-400">{")"}</span>
                                                        <span>{";"}</span>
                                                    </span>
                                                </p>
                                            </p>
                                            <span>
                                                <span className="text-purple-400">{")"}</span>
                                                <span className="text-sky-400">{"}"}</span>
                                                <span className="text-green-400">{"}"}</span>
                                            </span>
                                            <span>{";"}</span>
                                        </span>
                                    </span>
                                </span>
                            </p>
                        </p>
                        <span>
                            <span className="text-sky-400">{"}"}</span>
                            <span className="text-green-400">{"}"}</span>
                        </span>
                        <span>{";"}</span>
                    </p>
                    <span className="text-pink-400">{"}"}</span>
                </p>
                <p>
                    <span>{"}"}</span>
                </p>
            </div>

            <div>
                <button className="bg-green-600 px-3 py-2 text-sm font-semibold rounded
                    hover:bg-green-700 transition-colors duration-200">
                    <span>Run code</span>
                </button>
            </div>
        </div>
    )
}

export default Coding;