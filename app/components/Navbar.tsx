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

    return (
        <>
            <div className="flex items-center justify-between w-full pl-8">
                <div className="relative" ref={dropdownRef}>
                    <button
                        type="button"
                        onClick={toggleDropdown}
                        className="text-base font-light uppercase bg-baseclr transition hover:bg-black text-white px-5 py-2 cursor-pointer tracking-widest">
                        Programs
                    </button>
                    {dropdownOpen && (
                        <div className="absolute top-full left-0 mt-2 bg-white shadow-md z-50 min-w-72">
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
                <ul className="flex items-center ml-auto gap-8">
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
                <div className="flex gap-6 pl-8">
                    <button
                        onClick={() => setOpenModal("login")}
                        className="text-base text-black border border-black/20 px-4 py-2 uppercase hover:bg-baseclr hover:text-white hover:border-baseclr transition cursor-pointer">
                        Login
                    </button>
                    <button
                        onClick={() => setOpenModal("signup")}
                        className="text-base text-black border border-black/20 px-4 py-2 uppercase hover:bg-baseclr hover:text-white hover:border-baseclr transition cursor-pointer">
                        Apply Now
                    </button>
                </div>
            </div>

            {/* Modal */}
            <AuthModal openModal={openModal} setOpenModal={setOpenModal} />
        </>
    );
};

export default Navbar;
