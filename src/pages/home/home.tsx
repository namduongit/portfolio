import { useEffect, useRef, useState } from "react";

import mainAvatar from "../../assets/images/main-avatar.png"
import otherOne from "../../assets/images/other-avatar-1.png"
import otherTwo from "../../assets/images/other-avatar-2.png"
import GithubSection from "../../components/ui/github-section/github-section";
import ProjectSection from "../../components/ui/project-section/project-section";
import SkillItem from "../../components/ui/skill-item/skill-item";

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

    const skillHighlights = [
        "TypeScript / JavaScript",
        "GoLang",
        "Java",
        "Python",
        "React",
        "Express",
        "NestJS",
        "Spring Boot",
        "Tailwind CSS",
        "Docker",
        "Linux",
        "RESTful API Structure"
    ];

    const skillPlaybook = [
        {
            title: "Languages",
            description: "Những ngôn ngữ mình dùng hằng ngày cho đồ án và dự án cá nhân.",
            skills: [
                { title: "TypeScript / JavaScript", description: "Writing backend + frontend codebase.", icon: "https://skillicons.dev/icons?i=ts" },
                { title: "GoLang", description: "Building concurrent services & CLI.", icon: "https://skillicons.dev/icons?i=go" },
                { title: "Java", description: "Spring Boot assignments & REST APIs.", icon: "https://skillicons.dev/icons?i=java" },
                { title: "Python", description: "Automation scripts & quick prototypes.", icon: "https://skillicons.dev/icons?i=py" }
            ]
        },
        {
            title: "Frameworks",
            description: "Những công nghệ mình học sâu để triển khai bài tập lớn.",
            skills: [
                { title: "React", description: "UI components và dashboard nội bộ.", icon: "https://skillicons.dev/icons?i=react" },
                { title: "Express", description: "REST API và authentication.", icon: "https://skillicons.dev/icons?i=nodejs" },
                { title: "NestJS", description: "Modular backend hướng domain.", icon: "https://skillicons.dev/icons?i=nestjs" },
                { title: "Spring Boot", description: "Course projects và microservices cơ bản.", icon: "https://skillicons.dev/icons?i=spring" },
                { title: "Tailwind CSS", description: "Ship UI nhanh cho prototype.", icon: "https://skillicons.dev/icons?i=tailwind" }
            ]
        },
        {
            title: "Workflow",
            description: "Cách mình triển khai và quản lý môi trường dev.",
            skills: [
                { title: "Docker", description: "Container hoá dịch vụ backend.", icon: "https://skillicons.dev/icons?i=docker" },
                { title: "Linux", description: "Triển khai trên VPS cá nhân.", icon: "https://skillicons.dev/icons?i=linux" },
                { title: "API Structure", description: "Thiết kế RESTful rõ ràng, versioning.", icon: "https://skillicons.dev/icons?i=postman" }
            ]
        }
    ];

    const aboutHighlights = [
        "4th-year Software Engineering student",
        "GPA 3.43 / 4.0 (8.31 / 10.0)",
        "Saigon University · Viet Nam",
        "Backend / full-stack internship ready"
    ];

    const focusAreas = [
        "Thiết kế backend với NestJS, Express và Spring Boot.",
        "Thử nghiệm GoLang cho service realtime và CLI.",
        "Triển khai bằng Docker trên server Linux tự quản.",
        "Viết tài liệu API rõ ràng và có versioning." 
    ];

    const contactLinks = [
        { label: "Email", value: "nguyennamduong205@gmail.com", href: "mailto:nguyennamduong205@gmail.com", icon: "fa-solid fa-inbox" },
        { label: "Phone", value: "0388 853 835", href: "tel:0388853835", icon: "fa-solid fa-phone" },
        { label: "GitHub", value: "github.com/namduongit", href: "https://github.com/namduongit", icon: "fa-brands fa-github" },
        { label: "Facebook", value: "facebook.com/namduongit", href: "https://facebook.com/namduongit", icon: "fa-brands fa-facebook" }
    ];

    const heroStats = [
        { label: "Year", value: "4th" },
        { label: "Major", value: "Software Eng" },
        { label: "Focus", value: "Backend" },
        { label: "Status", value: "Intern-ready" }
    ];

    const heroHighlights = [
        "Saigon University (SGU)",
        "GPA 3.43 / 4.0 · 8.31 / 10.0",
        "TypeScript · GoLang · Java · Python",
        "Building NestJS / Spring Boot APIs"
    ];

    const projectStackBadges = [
        "TypeScript backend",
        "NestJS APIs",
        "GoLang services",
        "Spring Boot practice",
        "Docker/Linux"
    ];

    const projectStats = [
        { label: "Active repos", value: "05" },
        { label: "Recent sprints", value: "API · Realtime" },
        { label: "Tooling", value: "Docker + Linux" },
        { label: "Focus", value: "Internship-ready" }
    ];

    const buildFocus = [
        "Refine RESTful APIs with Express/NestJS và Spring Boot.",
        "Áp dụng Clean Architecture cho các dự án backend tự học.",
        "Tự động hoá deploy bằng Docker trên server Linux cá nhân."
    ];

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
                            Mình là sinh viên năm 4 ngành Kỹ thuật phần mềm (SGU) tập trung vào backend-first products. Ưa thích thiết kế API bằng
                            TypeScript, GoLang và Java, đồng thời tự triển khai lên Docker/Linux để mô phỏng môi trường thật.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {heroHighlights.map((item) => (
                            <span key={item} className="px-3 py-1 rounded-full bg-gray-900 text-white text-xs uppercase tracking-wide">
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
                        {heroStats.map((stat) => (
                            <div key={stat.label} className="rounded-2xl border border-gray-200 bg-white p-4">
                                <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-gray-500">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 space-y-4">
                    <div className="relative h-72 rounded-2xl overflow-hidden">
                        <iframe
                            src="https://lottie.host/embed/98d20880-1b80-46ee-938d-bce130f2ead0/HcHZXBp6YQ.lottie"
                            className="w-full h-full"
                        ></iframe>
                    </div>
                    <div className="bg-gray-900 rounded-2xl p-4 text-gray-200 font-mono text-sm space-y-2">
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
                        Ghi chú nhanh về hành trình học tập, GPA hiện tại và những gì mình đang ưu tiên để sẵn sàng cho kỳ thực tập.
                    </p>
                </div>

                <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
                    <div className="bg-white rounded-3xl shadow-lg p-6 space-y-5 border border-gray-100">
                        <div className="relative overflow-hidden rounded-2xl">
                            <img src={mainAvatar} alt="Nguyen Nam Duong avatar" className="w-full h-72 object-cover" />
                        </div>
                        <div className="space-y-3">
                            <p className="text-lg font-semibold text-gray-900">Nguyễn Nam Dương</p>
                            <div className="flex flex-wrap gap-2">
                                {aboutHighlights.map((highlight) => (
                                    <span key={highlight} className="px-3 py-1 rounded-full bg-green-50 text-green-800 text-xs font-semibold tracking-wide">
                                        {highlight}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="space-y-2">
                            <p className="text-xs uppercase tracking-[0.3em] text-gray-500">Focus right now</p>
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

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white rounded-3xl shadow-lg p-5 space-y-3 border border-gray-100">
                            <p className="text-xs uppercase tracking-[0.3em] text-gray-500">Education</p>
                            <h3 className="text-xl font-semibold text-gray-900">Saigon University (SGU)</h3>
                            <p className="text-gray-700 text-sm">
                                Software Engineering · GPA 3.43 / 4.0 (8.31 / 10.0)
                                <br />
                                Expected graduation: May 2028
                            </p>
                        </div>

                        <div className="bg-white rounded-3xl shadow-lg p-5 space-y-3 border border-gray-100">
                            <p className="text-xs uppercase tracking-[0.3em] text-gray-500">Languages</p>
                            <h3 className="text-xl font-semibold text-gray-900">How I communicate</h3>
                            <p className="text-gray-700 text-sm">
                                <span className="font-semibold">Code:</span> TypeScript/JavaScript, GoLang, Java, Python
                                <br />
                                <span className="font-semibold">Natural:</span> Vietnamese, English
                            </p>
                        </div>

                        <div className="bg-white rounded-3xl shadow-lg p-5 space-y-3 border border-gray-100 md:col-span-2">
                            <p className="text-xs uppercase tracking-[0.3em] text-gray-500">Contact</p>
                            <div className="grid sm:grid-cols-2 gap-3">
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
                                            <p className="text-xs uppercase tracking-[0.3em] text-gray-500">{link.label}</p>
                                            <p className="text-sm font-semibold text-gray-900">{link.value}</p>
                                        </div>
                                    </a>
                                ))}
                            </div>
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
                        Ghi lại các ngôn ngữ, framework và quy trình mình đang luyện tập. Tất cả phục vụ cho mục tiêu trở thành
                        backend/full-stack developer với tư duy sản phẩm rõ ràng.
                    </p>
                </div>

                <div className="flex flex-wrap gap-3">
                    {skillHighlights.map((badge) => (
                        <span key={badge} className="px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-semibold tracking-wide">
                            {badge}
                        </span>
                    ))}
                </div>

                <div className="grid lg:grid-cols-3 gap-6">
                    {skillPlaybook.map((group) => (
                        <div key={group.title} className="bg-white rounded-2xl shadow-lg p-5 space-y-4 border border-gray-100">
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
                        Tổng hợp các dự án học tập và cá nhân sử dụng TypeScript/Go/Java. Tập trung vào backend-first mindset,
                        viết tài liệu rõ ràng và deploy bằng Docker để mô phỏng quy trình thật.
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
                    <div className="col-span-12 lg:col-span-3 space-y-6">
                        <div className="bg-white rounded-2xl shadow-lg p-4">
                            <GithubSection />
                        </div>

                        <div className="rounded-2xl border border-gray-200 bg-white p-5 space-y-5">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gray-500">Build focus 2024 - 2025</p>
                                <h3 className="text-xl font-semibold text-gray-900">What I'm improving right now</h3>
                            </div>
                            <ul className="space-y-2 text-sm text-gray-700">
                                {buildFocus.map((item) => (
                                    <li key={item} className="flex gap-2">
                                        <span className="text-green-600">▹</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="grid grid-cols-2 gap-3">
                                {projectStats.map((stat) => (
                                    <div key={stat.label} className="rounded-xl bg-gray-50 border border-gray-200 p-3">
                                        <p className="text-lg font-semibold text-gray-900">{stat.value}</p>
                                        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-gray-500">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="col-span-12 lg:col-span-9">
                        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-lg">
                            <ProjectSection />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home;