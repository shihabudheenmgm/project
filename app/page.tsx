import Image from "next/image";

export default function Home() {
    return (
        <>
            <section className="py-9">
                <div className="container">
                    <div className="flex flex-wrap -mx-4 items-center">
                        <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
                            <h1 className="text-4xl lg:text-5xl text-black mb-6 leading-tight">
                                Learn New Skills Every Day with{" "}
                                <span className="text-baseclr">
                                    Top Online Instructors
                                </span>
                            </h1>
                            <div className="max-w-96">
                                <p className="text-gray-500 text-base">
                                    There are numerous versions of Lorem Ipsum
                                    passages out there, though most have been
                                    modified in some way.
                                </p>
                            </div>
                            <div className="lg:mt-8 mt-4">
                                <button
                                    type="button"
                                    className="text-base font-light uppercase bg-baseclr transition hover:bg-black text-white px-6 py-3 cursor-pointer tracking-widest">
                                    Get Started
                                </button>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 px-4">
                            <Image
                                src="/images/team.jpg"
                                alt=""
                                width={1024}
                                height={800}
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
