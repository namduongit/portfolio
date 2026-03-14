import { useEffect, useRef, useState } from "react";

import mainAvatar from "../../assets/images/main-avatar.png"
import otherOne from "../../assets/images/other-avatar-1.png"
import otherTwo from "../../assets/images/other-avatar-2.png"
import GithubSection from "../../components/ui/github-section/github-section";
import ProjectSection from "../../components/ui/project-section/project-section";
import SkillItem from "../../components/ui/skill-item/skill-item";
import DotLine from "../../components/ui/dot-line/dot-line";

const Home = () => {
    const titleString = "Hi, I'm Nguyen Nam Duong";

    const [pattern, setPattern] = useState(false);
    const [index, setIndex] = useState(0);

    const direction = useRef<1 | -1>(1);

    useEffect(() => {
        const cursor = setInterval(() => {
            setPattern(prev => !prev);
        }, 600);

        const typing = setInterval(() => {
            setIndex(prev => {
                if (prev === titleString.length) {
                    direction.current = -1;
                }

                if (prev === 0) {
                    direction.current = 1;
                }

                return prev + direction.current;
            });
        }, 150);

        return () => {
            clearInterval(cursor);
            clearInterval(typing);
        }
    }, []);

    const sourceAvatars = [
        {
            index: 0,
            path: mainAvatar
        },
        {
            index: 1,
            path: otherOne
        },
        {
            index: 2,
            path: otherTwo
        }
    ];

    const [avatar, setAvatar] = useState<{ index: number, path: string } | null>(null);

    useEffect(() => {
        if (!avatar) {
            setAvatar(sourceAvatars[0]);
        }
    }, []);

    return (
        <div className="container mx-auto space-y-20 px-8 lg:px-5 xl:px-3 2xl:px-0">
            {/* Introduction */}
            <div id="Home" className="flex flex-col md:flex-row items-center">
                <div className="relative">
                    <iframe src="https://lottie.host/embed/98d20880-1b80-46ee-938d-bce130f2ead0/HcHZXBp6YQ.lottie"
                        className="w-120 h-120 md:hidden">
                    </iframe>
                </div>

                <div className="space-y-2 md:space-y-3 ld:space-y-5">
                    <h1 className="text-xl md:text-2xl lg:text-4xl font-semibold">
                        {titleString.slice(0, index).split("").map((char, idx) => (
                            <span key={idx} className={`${("Nguyen Nam Duong".includes(char) && idx > 6) && "text-blue-700"}`}>{char}</span>
                        ))}
                        {pattern && ("|")}
                    </h1>
                    <p className="text-md md:text-lg lg:text-xl text-gray-700">
                        Hello, I'm a <span className="font-semibold text-gray-900">software engineering student</span>.
                        <br />
                        I enjoy building scalable <span className="font-semibold text-gray-900">backend systems</span>
                        {" "}and <span className="font-semibold text-gray-900">modern web applications</span>.
                        <br />
                        Currently looking for <span className="font-semibold text-gray-900">backend</span> or {" "}
                        <span className="font-semibold text-gray-900">full-stack</span> internship opportunities.
                        <br />
                        My goal is to gain practical experience, build impactful applications, and continue growing as a developer.
                    </p>
                </div>

                <div className="relative">
                    <iframe src="https://lottie.host/embed/98d20880-1b80-46ee-938d-bce130f2ead0/HcHZXBp6YQ.lottie"
                        className="hidden md:block lg:w-180 lg:h-180">
                    </iframe>
                </div>
            </div>

            {/* About me */}
            <div id="About" className="space-y-6">
                <div>
                    <h1 className="text-3xl md:text-4xl font-semibold text-green-700">About me</h1>
                    <p className="text-gray-700 text-sm md:text-md">
                        Software engineering student passionate about backend development and modern web technologies.
                    </p>
                </div>

                <div className="grid grid-cols-12 gap-8 items-start">
                    <div className="col-span-12 lg:col-span-2 relative">
                        <button
                            className={`cursor-pointer transition-all duration-200 rounded-xl overflow-hidden hover:scale-105 hover:shadow-xl`}
                        >
                            <img
                                src={mainAvatar}
                                alt={`Avatar image`}
                                className="w-50 h-64 object-cover rounded-xl"
                            />
                        </button>
                    </div>

                    <div className="col-span-12 lg:col-span-7 grid grid-cols-2 gap-6">
                        <div className="space-y-1">
                            <h3 className="text-xl font-semibold text-gray-900">Education</h3>
                            <p className="text-gray-700 leading-relaxed">
                                <span className="font-semibold">Software Engineering</span>
                                <br />
                                <span className="text-blue-700 font-semibold">Saigon University (SGU)</span>
                                <br />
                                GPA: <span className="font-semibold">3.43 / 4.0</span> and <span className="font-semibold">8.31/10.0</span>
                                <br />
                                Graduate in: <span className="font-semibold">May 2028</span>
                            </p>
                        </div>

                        <div className="space-y-1">
                            <h3 className="text-xl font-semibold text-gray-900">Languages</h3>
                            <p className="text-gray-700 leading-relaxed">
                                <span className="font-semibold">Code:</span> TypeScript/JavaScript, GoLang, Java and Python
                                <br />
                                <span className="font-semibold">Natural:</span> Vietnamese, English
                            </p>
                        </div>

                        <div className="col-span-2 space-y-1">
                            <h3 className="text-xl font-semibold text-gray-900">Focus Areas</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Backend development, API design, database optimization, and DevOps practices.
                            </p>
                        </div>

                    </div>

                    <div className="col-span-12 lg:col-span-3 bg-white shadow-lg rounded-xl p-6 space-y-4">
                        <h2 className="text-xl font-semibold text-green-700">
                            Contact
                        </h2>
                        <div className="space-y-3">

                            <a
                                href="mailto:nguyennamduong205@gmail.com"
                                className="flex items-center gap-3 text-gray-700 hover:text-green-700 transition"
                            >
                                <i className="fa-solid fa-inbox"></i>
                                <span>Email</span>
                            </a>

                            <div className="flex items-center gap-3 text-gray-700">
                                <i className="fa-solid fa-phone"></i>
                                <span>0388 853 835</span>
                            </div>

                            <a
                                href="https://github.com/namduongit"
                                target="_blank"
                                className="flex items-center gap-3 text-gray-700 hover:text-green-700 transition"
                            >
                                <i className="fa-brands fa-github"></i>
                                <span>GitHub</span>
                            </a>

                            <a
                                href="https://facebook.com/namduongit"
                                target="_blank"
                                className="flex items-center gap-3 text-gray-700 hover:text-green-700 transition"
                            >
                                <i className="fa-brands fa-facebook"></i>
                                <span>Facebook</span>
                            </a>

                        </div>

                    </div>

                </div>

            </div>

            {/* Skill */}
            <div id="Skill" className="space-y-5">
                <div>
                    <h1 className="text-3xl md:text-4xl font-semibold text-green-700">My Tech Skill</h1>
                    <p className="text-gray-700 text-sm md:text-md">
                        A collection of technologies and tools I use to build modern applications.
                    </p>
                </div>

                <div className="flex gap-5 lg:gap-10">

                    <DotLine />

                    <div className="flex-1 flex flex-col lg:flex-row gap-6 lg:gap-12">
                        <div className="flex-1 space-y-6">
                            <SkillItem
                                title="React"
                                description="Building modern UI with React and component-based architecture."
                                iconUrl="https://skillicons.dev/icons?i=react"
                            />

                            <SkillItem
                                title="Tailwind CSS"
                                description="Creating responsive and clean interfaces with utility-first CSS."
                                iconUrl="https://skillicons.dev/icons?i=tailwind"
                            />

                            <SkillItem
                                title="Node.js Ecosystem"
                                description="Backend development with Node.js, Express, and NestJS."
                                iconUrl="https://skillicons.dev/icons?i=nodejs"
                            />

                            <SkillItem
                                title="API Development"
                                description="Designing and building scalable RESTful APIs."
                                iconUrl="https://skillicons.dev/icons?i=graphql"
                            />
                        </div>

                        <div className="flex-1 space-y-6">
                            <SkillItem
                                title="Database & Analytics"
                                description="Working with MongoDB, PostgreSQL, MySQL, SQL Server, and Redis."
                                iconUrl="https://skillicons.dev/icons?i=mongodb"
                            />

                            <SkillItem
                                title="Cloud Services"
                                description="Using Firebase services such as Firestore and cloud storage."
                                iconUrl="https://skillicons.dev/icons?i=firebase"
                            />

                            <SkillItem
                                title="DevOps & Deployment"
                                description="Basic containerization and deployment using Docker, Git, and Linux.."
                                iconUrl="https://skillicons.dev/icons?i=docker"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Project */}
            <div id="Project" className="space-y-5">
                <div>
                    <h1 className="text-3xl md:text-4xl font-semibold text-green-700">My Project</h1>
                    <p className="text-gray-700 text-sm md:text-md">
                        A collection of personal and team projects built during my learning journey.
                    </p>
                </div>

                <div className="grid grid-cols-12 gap-10">
                    <div className="col-span-12 lg:col-span-3 xl:col-span-2">
                        <GithubSection />
                    </div>
                    <div className="col-span-12 lg:col-span-9 xl:col-span-10">
                        <ProjectSection />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;