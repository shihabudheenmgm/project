import Link from "next/link";
import Image from "next/image";

import Navbar from "./Navbar";

const Header = () => {
    return (
        <>
            <header
                className={`sticky top-0 left-0 w-full bg-white z-[999] shadow-md`}>
                <nav className={`flex items-center justify-between container`}>
                    <Link href="/" className="py-6">
                        <Image
                            src="/images/logo.svg"
                            alt=""
                            width={"60"}
                            height={"60"}
                            className="w-24"
                        />
                    </Link>
                    <Navbar />
                </nav>
            </header>
        </>
    );
};

export default Header;
