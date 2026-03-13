const Footer = () => {
    return (
        <footer className="mt-10 border-t border-gray-300">
            <div className="container mx-auto text-lg font-semibold text-center py-2">
                <span>{new Date().getFullYear()}</span>
                <span>-</span>
                <span>Portfolio: Nguyen Nam Duong</span>
            </div>
        </footer>
    )
}

export default Footer;