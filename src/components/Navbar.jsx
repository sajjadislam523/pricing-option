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
        <nav className="flex items-center gap-4 py-4 px-4">
            <div
                className="md:hidden cursor-pointer"
                onClick={() => setOpen(!open)}
            >
                {open === true ? (
                    <RiMenuLine className="text-2xl" />
                ) : (
                    <RiCloseFill className="text-2xl" />
                )}
            </div>
            <ul className="md:flex items-center gap-4 py-4 px-4 hidden">
                {routes.map((route) => (
                    <Link key={route.id} route={route} />
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
