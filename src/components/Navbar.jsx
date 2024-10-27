import { useState } from "react";
import Link from "./Link";
import { RiMenuLine } from "react-icons/ri";
import { RiCloseFill } from "react-icons/ri";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const routes = [
        { id: 1, path: "/home", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "/profile", name: "Profile" },
    ];
    return (
        <nav className="relative flex items-center gap-4 py-4 px-4">
            <div
                className="md:hidden cursor-pointer z-10"
                onClick={() => setOpen(!open)}
            >
                {open ? (
                    <RiCloseFill className="text-2xl" />
                ) : (
                    <RiMenuLine className="text-2xl" />
                )}
            </div>
            <ul
                className={`md:static flex flex-col md:flex-row md:items-center backdrop-blur-2xl shadow-md md:shadow-none duration-300 ease-in-out transition-all items-center gap-4 rounded-xl py-4 px-4 absolute
                ${
                    open ? "top-16 right-4 left-4" : "-top-60 right-4 left-4"
                } md:top-auto`}
            >
                {routes.map((route) => (
                    <Link key={route.id} route={route} />
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
