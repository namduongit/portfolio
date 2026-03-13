import { Outlet } from "react-router"
import Header from "./header/header"
import Footer from "./footer/footer"

const Layout = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Layout;