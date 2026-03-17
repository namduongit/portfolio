const Footer = () => {
    const year = new Date().getFullYear();

    const navLinks = [
        { label: "Home", href: "#Home" },
        { label: "About", href: "#About" },
        { label: "Skill", href: "#Skill" },
        { label: "Project", href: "#Project" },
    ];

    const contact = [
        { label: "Email", value: "nguyennamduong205@gmail.com", href: "mailto:nguyennamduong205@gmail.com" },
        { label: "GitHub", value: "github.com/namduongit", href: "https://github.com/namduongit" },
    ];

    return (
        <footer className="border-t border-gray-200 bg-gray-50">
            <div className="container mx-auto px-6 py-8 grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
                <div className="space-y-3">
                    <p className="text-xs uppercase tracking-[0.4em] text-gray-500">Nguyen Nam Duong</p>
                    <h2 className="text-2xl font-semibold text-gray-900">Backend-focused student engineer · Saigon University</h2>
                    <p className="text-sm text-gray-600">
                        GPA 3.43 / 4.0 · 8.31 / 10.0 · Ready for backend/full-stack internship opportunities in 2025.
                    </p>
                    <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-gray-600">
                        <span className="px-3 py-1 rounded-full bg-white border">{year}</span>
                        <span className="px-3 py-1 rounded-full bg-white border">Saigon University</span>
                        <span className="px-3 py-1 rounded-full bg-white border">Ho Chi Minh City</span>
                    </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-gray-500">Navigate</p>
                        <ul className="mt-3 space-y-2 text-sm font-medium text-gray-700">
                            {navLinks.map((link) => (
                                <li key={link.label}>
                                    <a href={link.href} className="hover:text-gray-900">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-gray-500">Contact</p>
                        <ul className="mt-3 space-y-2 text-sm font-medium text-gray-700">
                            {contact.map((item) => (
                                <li key={item.label}>
                                    <a href={item.href} target="_blank" rel="noreferrer" className="hover:text-gray-900">
                                        {item.label}: {item.value}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;