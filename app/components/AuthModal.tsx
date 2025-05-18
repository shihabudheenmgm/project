import { useRef, useState } from "react";
import Image from "next/image";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

type ModalType = "login" | "signup" | null;

interface Props {
    openModal: ModalType;
    setOpenModal: (value: ModalType) => void;
}

const AuthModal = ({ openModal, setOpenModal }: Props) => {
    const modalRef = useRef<HTMLDivElement | null>(null);
    const [phone, setPhone] = useState("");

    if (!openModal) return null;

    return (
        <div className="fixed inset-0 z-50 bg-white flex items-center justify-center sm:px-8 px-6">
            <div
                ref={modalRef}
                className="border border-gray-400 p-6 lg:p-10 rounded-xl lg:rounded-3xl relative shadow-lg w-full md:max-w-xl">
                <button
                    onClick={() => setOpenModal(null)}
                    className="absolute top-4 right-4 bg-gray-400 rounded-full hover:bg-black p-2.5 cursor-pointer">
                    <Image
                        src="/images/close-icon.svg"
                        alt="Google"
                        width={10}
                        height={10}
                    />
                </button>

                {openModal === "login" ? (
                    <div>
                        <h2 className="text-xl font-bold mb-8">Login</h2>

                        <div className="relative mb-6">
                            <PhoneInput
                                country={"in"}
                                value={phone}
                                onChange={setPhone}
                                inputProps={{
                                    name: "phone",
                                    autoComplete: "tel",
                                    className: `border-darkclr h-12 w-full border bg-transparent px-3 pl-12 py-1 text-base transition-colors`,
                                }}
                                containerClass="phone-input-container"
                                buttonClass="phone-input-button"
                                dropdownClass="phone-input-dropdown"
                            />
                        </div>
                        <button
                            type="button"
                            className="w-full bg-baseclr text-white py-3 cursor-pointer">
                            Login with OTP
                        </button>
                        <div className="text-sm text-center text-gray-500 my-6">
                            OR
                        </div>
                        <div className="flex flex-col gap-4">
                            <button
                                type="button"
                                className="w-full bg-white border border-baseclr text-baseclr py-3 cursor-pointer">
                                Login with Email
                            </button>
                            <button
                                type="button"
                                className="w-full bg-gray-800 text-white py-3 mb-3 flex items-center justify-center gap-2 cursor-pointer">
                                <Image
                                    src="/images/google.svg"
                                    alt="Google"
                                    width={20}
                                    height={20}
                                />
                                Login with Google
                            </button>
                        </div>
                        <div className="text-center mt-4">
                            <p className="text-base">
                                Don’t have an account?&nbsp;
                                <span
                                    onClick={() => setOpenModal("signup")}
                                    className="cursor-pointer hover:text-baseclr transition underline">
                                    Sign Up
                                </span>
                            </p>
                        </div>
                    </div>
                ) : (
                    <div>
                        <h2 className="text-xl font-bold mb-4">Sign Up</h2>

                        <div className="flex flex-col">
                            <div className="mb-4">
                                <label className="text-sm text-black block mb-1">
                                    Your Topic of Interest*
                                </label>
                                <select className="w-full border p-2 px-3 h-12">
                                    <option value="">Select Program</option>
                                    <option value="software">
                                        Software Development
                                    </option>
                                    <option value="data">
                                        Data Science & ML
                                    </option>
                                    <option value="devops">DevOps</option>
                                    <option value="ai">AI & ML</option>
                                </select>
                            </div>

                            <div className="mb-4">
                                <label className="text-sm text-black block mb-1">
                                    Enter Your Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    className="w-full border p-2 px-3 h-12"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="text-sm text-black block mb-1">
                                    Enter Your Email
                                </label>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full border p-2 px-3 h-12"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="text-sm text-black block mb-1">
                                    Phone Number
                                </label>
                                <div className="relative">
                                    <PhoneInput
                                        country={"in"}
                                        value={phone}
                                        onChange={setPhone}
                                        inputProps={{
                                            name: "phone",
                                            autoComplete: "tel",
                                            className: `border-darkclr h-12 w-full border bg-transparent px-3 pl-12 py-1 text-base transition-colors`,
                                        }}
                                        containerClass="phone-input-container"
                                        buttonClass="phone-input-button"
                                        dropdownClass="phone-input-dropdown"
                                    />
                                </div>
                            </div>
                            <div className="mt-3">
                                <button
                                    type="submit"
                                    className="w-full bg-baseclr text-white py-3 cursor-pointer">
                                    Sign Up
                                </button>
                            </div>
                        </div>

                        <div className="text-center mt-4">
                            <p className="text-base">
                                Already have an account?&nbsp;
                                <span
                                    onClick={() => setOpenModal("login")}
                                    className="cursor-pointer hover:text-baseclr transition underline">
                                    Login
                                </span>
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AuthModal;
