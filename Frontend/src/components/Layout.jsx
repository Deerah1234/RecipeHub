import Nav from "./Nav";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <div className="main">
                <div className="gradient" />
            </div>

            <main className="app">
                <Nav />
                <Outlet />
            </main>
        </>
    );
};
export default Layout;
