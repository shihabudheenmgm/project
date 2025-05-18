import Image from "next/image";
import Link from "next/link";

type FooterLink = {
    label: string;
    href: string;
};

type FooterSection = {
    title: string;
    links: FooterLink[];
};

const footerData: FooterSection[] = [
    {
        title: "Explore",
        links: [
            { label: "Software Development", href: "#" },
            { label: "Data Science & Machine Learning", href: "#" },
            { label: "DevOps", href: "#" },
            { label: "Advanced AI & Machine Learning", href: "#" },
            { label: "Masters in Software Development", href: "#" },
            { label: "Masters in Data Science & ML", href: "#" },
            { label: "Masters in DevOps", href: "#" },
        ],
    },
    {
        title: "Resources",
        links: [
            { label: "Alumni Reviews", href: "#" },
            { label: "Blogs", href: "#" },
            { label: "Contact Us", href: "#" },
            { label: "Careers", href: "#" },
            { label: "Discord", href: "#" },
            { label: "Terms of Use", href: "#" },
            { label: "Privacy Policy", href: "#" },
        ],
    },
    {
        title: "Others",
        links: [
            { label: "About us", href: "#" },
            { label: "Become a Mentor", href: "#" },
            { label: "Become a TA", href: "#" },
            { label: "Hire from us", href: "#" },
        ],
    },
    {
        title: "Socials",
        links: [
            { label: "YouTube", href: "#" },
            { label: "LinkedIn", href: "#" },
            { label: "Facebook", href: "#" },
            { label: "Instagram", href: "#" },
            { label: "Twitter", href: "#" },
        ],
    },
];

const Footer = () => {
    return (
        <footer className="bg-baseclr/10 py-12">
            <div className="container">
                <div className="flex flex-wrap gap-8">
                    <div className="flex flex-col gap-4 w-full lg:w-1/5">
                        <Link href="/">
                            <Image
                                src="/images/logo.svg"
                                alt=""
                                width={"60"}
                                height={"60"}
                                className="lg:w-24 w-20"
                            />
                        </Link>
                        <Link href={"https://google.com"}>
                            <Image
                                src="/images/google-play.png"
                                alt=""
                                width={"180"}
                                height={"60"}
                                className="lg:w-40 w-28"
                            />
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full lg:w-4/5">
                        {footerData.map((section, index) => (
                            <div key={index} className="flex flex-col">
                                <h5 className="text-base text-gray-800 font-semibold mb-4">
                                    {section.title}
                                </h5>
                                <ul className="space-y-2">
                                    {section.links.map((link, linkIndex) => (
                                        <li key={linkIndex}>
                                            <Link
                                                href={link.href}
                                                className="text-gray-500 text-sm lg:text-base hover:text-baseclr transition">
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="mt-20">
                <p className="text-center text-xs text-gray-400">
                    © 2025 Name. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
