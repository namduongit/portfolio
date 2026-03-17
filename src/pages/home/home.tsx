import { useEffect, useRef, useState } from "react";
import avatar from "../../assets/images/main-avatar.png"
import GithubSection from "../../components/ui/github-section/github-section";
import ProjectSection from "../../components/ui/project-section/project-section";
import SkillItem from "../../components/ui/skill-item/skill-item";
import { heroTags, statTags, titleString } from "../../common/section/introduction";
import { aboutContents, contactLinks, focusAreas, hightLightTags } from "../../common/section/about";
import { skillCategories, skillTags } from "../../common/section/skill";
import { projectFocusAreas, projectStackBadges, projectStats } from "../../common/section/project";
import Coding from "../../components/ui/coding/coding";

const Home = () => {
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

    return (
        <div className="container mx-auto space-y-20 px-8 lg:px-5 xl:px-3 2xl:px-0">
            {/* Introduction */}
            <section id="Home" className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-center">
                <div className="space-y-6">
                    <div className="space-y-3">
                        <p className="text-xs font-semibold tracking-[0.3em] text-gray-500 uppercase">SOFRWARE ENGINEER</p>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900">
                            {titleString.slice(0, index).split("").map((char, idx) => (
                                <span key={idx} className={`${("Nguyen Nam Duong".includes(char) && idx > 6) && "text-blue-700"}`}>{char}</span>
                            ))}
                            {pattern && ("|")}
                        </h1>
                        <p className="text-gray-700 text-base md:text-lg">
                            I'm a 4th-year <span className="text-gray-900 font-semibold">Software Engineering</span> student (SGU) focused on backend-first products. I enjoy designing APIs with
                            TypeScript, GoLang, and Java, while self-deploying on Docker/Linux to simulate real-world environments.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {heroTags.map((item) => (
                            <span key={item} className="px-3 py-1 rounded-full bg-gray-900 text-white text-xs font-semibold uppercase tracking-wide">
                                {item}
                            </span>
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-4">
                        <a
                            href="mailto:nguyennamduong205@gmail.com"
                            className="px-6 py-3 rounded-full bg-black text-white text-sm font-semibold uppercase tracking-wide hover:opacity-90"
                        >
                            Email me
                        </a>
                        <a
                            href="https://github.com/namduongit"
                            target="_blank"
                            rel="noreferrer"
                            className="px-6 py-3 rounded-full border border-gray-900 text-gray-900 text-sm font-semibold uppercase tracking-wide hover:bg-gray-100"
                        >
                            GitHub
                        </a>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {statTags.map((stat) => (
                            <div key={stat.label} className="rounded-2xl border border-gray-200 bg-white p-4">
                                <p className="text-base xl:text-2xl font-semibold text-gray-900">{stat.value}</p>
                                <p className="text-sm uppercase tracking-[0.2em] text-gray-500">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white rounded-3xl shadow-md border border-gray-100 p-6 space-y-4">
                    <div className="relative h-72 rounded-2xl overflow-hidden">
                        <iframe
                            src="https://lottie.host/embed/98d20880-1b80-46ee-938d-bce130f2ead0/HcHZXBp6YQ.lottie"
                            className="w-full h-full"
                        ></iframe>
                    </div>
                    <div className="bg-gray-900 rounded-2xl p-4 text-gray-200 text-sm space-y-2">
                        <p>// keeping notes for internship 2025</p>
                        <p>const focus = ["NestJS", "Spring Boot", "GoLang", "Docker"];</p>
                        <p>const goal = "Ship reliable APIs + learn from real teams";</p>
                    </div>
                </div>
            </section>

            {/* About me */}
            <section id="About" className="space-y-6">
                <div className="space-y-2">
                    <p className="text-xs font-semibold tracking-[0.3em] text-gray-500 uppercase">Personal synopsis</p>
                    <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">Backend-focused student engineer from Saigon University.</h1>
                    <p className="text-gray-700 text-sm md:text-base">
                        Engineer in training with a passion for backend development, API design, and real-world deployment.
                    </p>
                </div>

                <div className="grid gap-6 grid-cols-12">
                    <div className="col-span-12 lg:col-span-4 xl:col-span-3 flex gap-8 lg:gap-0 lg:block bg-white rounded-2xl shadow-md p-6 space-y-5 border border-gray-100">
                        <div className="relative overflow-hidden rounded-2xl w-50 lg:w-full">
                            <img src={avatar} alt="Nguyen Nam Duong avatar" className="w-full object-cover" />
                        </div>

                        <div className="flex-1 space-y-5">
                            <div className="space-y-3">
                                <p className="text-lg font-semibold text-gray-900">Nguyễn Nam Dương</p>
                                <div className="flex flex-wrap gap-2">
                                    {hightLightTags.map((highlight) => (
                                        <span key={highlight} className="px-3 py-1 rounded-full bg-green-50 text-green-800 text-xs font-semibold tracking-wide">
                                            {highlight}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="space-y-2">
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">Focus right now</p>
                                <ul className="space-y-2 text-sm text-gray-700">
                                    {focusAreas.map((item) => (
                                        <li key={item} className="flex gap-2">
                                            <span className="text-green-600">▹</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-12 lg:col-span-8 xl:col-span-9 flex flex-col gap-5">
                        <div className="flex-1 flex flex-col gap-5 lg:gap-10">
                            <div className="gap-5 space-y-2">
                                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500 text-left">About Me</p>
                                <div className="flex-col grid grid-cols-2 gap-5">
                                    {aboutContents.map((content) => (
                                        <div key={content.title} className="bg-white rounded-2xl shadow-md p-5 space-y-2 border border-gray-100">
                                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">{content.title}</p>
                                            <h3 className="text-xl font-semibold text-gray-900">{content.description.name}</h3>
                                            <p className="text-gray-700 text-sm">
                                                {content.description.tags.map((tag, idx) => (
                                                    <span key={idx}>
                                                        {tag}
                                                        <br />
                                                    </span>
                                                ))}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex-1 bg-white rounded-2xl space-y-2">
                                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500 text-right lg:text-left">Contact</p>
                                <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-3">
                                    {contactLinks.map((link) => (
                                        <a
                                            key={link.label}
                                            href={link.href}
                                            target={link.label === "Email" || link.label === "Phone" ? "_self" : "_blank"}
                                            rel="noreferrer"
                                            className="flex items-center gap-3 rounded-2xl border border-gray-200 px-4 py-3 hover:border-green-600"
                                        >
                                            <i className={`${link.icon} text-green-700`}></i>
                                            <div>
                                                <p className="text-xs uppercase tracking-[0.2em] text-gray-500">{link.label}</p>
                                                <p className="text-sm font-semibold text-gray-900">{link.value}</p>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 bg-gray-900 rounded-2xl">
                            <Coding />
                        </div>
                    </div>
                </div>
            </section>

            {/* Skill */}
            <section id="Skill" className="space-y-6">
                <div className="space-y-2">
                    <p className="text-xs font-semibold tracking-[0.3em] text-gray-500 uppercase">Stack & habits</p>
                    <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">Tech I use everyday to ship backend-first apps.</h1>
                    <p className="text-gray-700 text-sm md:text-base">
                        Languages, frameworks, and tools I use daily to build backend-first applications,
                        all focused on becoming a backend/full-stack developer with a clear product mindset.
                    </p>
                </div>

                <div className="flex flex-wrap gap-3">
                    {skillTags.map((badge) => (
                        <span key={badge} className="px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-semibold tracking-wide">
                            {badge}
                        </span>
                    ))}
                </div>

                <div className="grid lg:grid-cols-3 gap-6">
                    {skillCategories.map((group) => (
                        <div key={group.title} className="bg-white rounded-2xl shadow-md p-5 space-y-4 border border-gray-100">
                            <div>
                                <h2 className="text-xl font-semibold text-gray-900">{group.title}</h2>
                                <p className="text-sm text-gray-600">{group.description}</p>
                            </div>
                            <div className="border-b border-dashed border-gray-200"></div>
                            <div className="space-y-4">
                                {group.skills.map((skill) => (
                                    <SkillItem
                                        key={skill.title}
                                        title={skill.title}
                                        description={skill.description}
                                        iconUrl={skill.icon}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Project */}
            <section id="Project" className="space-y-6">
                <div className="space-y-2">
                    <p className="text-xs font-semibold tracking-[0.3em] text-gray-500 uppercase">Project log</p>
                    <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">Shipping code that feels like developer tools.</h1>
                    <p className="text-gray-700 text-sm md:text-base">
                        Projects built with a focus on clean API design, real-world deployment practices, and continuous learning to prepare for internship opportunities.
                    </p>
                </div>

                <div className="flex flex-wrap gap-3">
                    {projectStackBadges.map((badge) => (
                        <span key={badge} className="px-3 py-1 rounded-full bg-green-50 text-green-800 text-xs font-semibold tracking-wide">
                            {badge}
                        </span>
                    ))}
                </div>

                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-12 xl:col-span-3 space-y-6">
                        <div className="bg-white rounded-2xl shadow-md p-4">
                            <GithubSection />
                        </div>

                        <div className="rounded-2xl border border-gray-200 bg-white p-5 space-y-3">
                            <div className="space-y-2">
                                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gray-500">Build focus 2024 - 2025</p>
                                <h3 className="text-xl font-semibold text-gray-900">What I'm improving right now</h3>
                            </div>
                            <ul className="space-y-2 text-sm text-gray-700">
                                {projectFocusAreas.map((item) => (
                                    <li key={item} className="flex gap-2">
                                        <span className="text-green-600">▹</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="grid grid-cols-1 xl:grid-cols-2 gap-3">
                                {projectStats.map((stat) => (
                                    <div key={stat.label} className="rounded-xl bg-gray-50 border border-gray-200 p-3">
                                        <p className="text-lg font-semibold text-gray-900">{stat.value}</p>
                                        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-gray-500">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="col-span-12 xl:col-span-9">
                        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-md">
                            <ProjectSection />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home;