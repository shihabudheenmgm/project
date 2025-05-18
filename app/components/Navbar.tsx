"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import AuthModal from "./AuthModal";

type NavLink = {
    name: string;
    path: string;
};

const links: NavLink[] = [
    { name: "Masterclass", path: "/masterclass" },
    { name: "Alumni", path: "/alumni" },
    { name: "Resources", path: "/resources" },
];

const Navbar = () => {
    const pathname = usePathname();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [openModal, setOpenModal] = useState<"login" | "signup" | null>(null);
    const [isMobile, setIsMobile] = useState(false);
    const [isMobMenu, setIsMobmenuOpen] = useState(false);

    // Toggle dropdown
    const toggleDropdown = () => {
        setDropdownOpen((prev) => !prev);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Detect screen resize
    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth < 1024);
        }

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <div
                className={`flex items-center justify-between w-full pl-8 ${
                    isMobile
                        ? "fixed flex-col gap-6 justify-center items-start top-0 bottom-0 -right-full w-full bg-white transition-all duration-500 z-10"
                        : ""
                } ${isMobMenu ? "!right-0" : ""}`}>
                <div className="relative" ref={dropdownRef}>
                    <button
                        type="button"
                        onClick={toggleDropdown}
                        className="text-base font-light uppercase bg-baseclr transition hover:bg-black text-white px-5 py-2 cursor-pointer tracking-widest">
                        Programs
                    </button>
                    {dropdownOpen && (
                        <div className="lg:absolute top-full left-0 mt-2 bg-white lg:shadow-md z-50 min-w-72">
                            <div className="flex flex-col p-4">
                                <h5 className="text-base text-black uppercase mb-4">
                                    Online Programs
                                </h5>
                                <ul className="">
                                    <li>
                                        <Link href={"/"}>
                                            Software Development
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
                <ul className="flex max-lg:flex-col lg:items-center lg:ml-auto gap-4 lg:gap-8">
                    {links.map((link, index) => {
                        const isActive = pathname === link.path;

                        return (
                            <li key={index}>
                                <Link
                                    href={link.path}
                                    className={`text-base transition-all hover:text-baseclr uppercase tracking-wide ${
                                        isActive ? "text-baseclr" : "text-black"
                                    }`}>
                                    <span>{link.name}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
                <div className="flex lg:gap-6 gap-4 lg:pl-8">
                    <button
                        onClick={() => setOpenModal("login")}
                        className="text-sm lg:text-base text-black border border-black/20 px-4 py-2 uppercase hover:bg-baseclr hover:text-white hover:border-baseclr transition cursor-pointer">
                        Login
                    </button>
                    <button
                        onClick={() => setOpenModal("signup")}
                        className="text-sm lg:text-base text-black border border-black/20 px-4 py-2 uppercase hover:bg-baseclr hover:text-white hover:border-baseclr transition cursor-pointer">
                        Apply Now
                    </button>
                </div>
            </div>
            {isMobile && (
                <button
                    onClick={() => setIsMobmenuOpen(!isMobMenu)}
                    type="button"
                    className="w-6 h-4 relative flex flex-col ml-4 my-auto justify-between z-20">
                    <span className="w-full block h-0.5 bg-black"></span>
                    <span className="w-full block h-0.5 bg-black"></span>
                    <span className="w-full block h-0.5 bg-black"></span>
                </button>
            )}

            {/* Modal */}
            <AuthModal openModal={openModal} setOpenModal={setOpenModal} />
        </>
    );
};

export default Navbar;
