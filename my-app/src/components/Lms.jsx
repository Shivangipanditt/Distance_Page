import React from "react";

const Lms = () => {
    return (
        <section className="flex border-b-5  border-orange-500  flex-col md:flex-row justify-between items-center px-30 py-12">

            {/* Left Section (Text) */}
            <div className="max-w-lg">
                <p className="text-orange-500 font-semibold mb-2">
                    #1 India's Trusted IT Platform
                </p>

                <h1 className="text-4xl font-extrabold text-orange-500 leading-snug">
                    Complete Solution
                </h1>

                <h2 className="text-3xl font-bold text-gray-800 mt-1">
                    For Managing Your University <br /> And Colleges Online
                </h2>

                <p className="text-gray-600 mt-3">
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text and
                    scrambled it to make a type specimen book.
                </p>

                <button className="bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full px-6 py-3 mt-6 shadow-md">
                    Enquire Now
                </button>


                <div>
                    <img
                        src="/dotted-element-veri.webp"
                        alt="LMS"
                        className=" h-[30px]  mt-20   object-cover"
                    />

                </div>
            </div>

            {/* Right Section (Images) */}
            <div className="relative flex flex-col items-center md:items-end mt-10 md:mt-0 space-y-6">

                {/* Bottom Image */}

                <div className="flex space-x-6 ">
                    <div className=" ">
                        <img
                            src="/front-image.webp"
                            alt="LMS"
                            className="rounded-xl h-[500px] object-cover"
                        />

                    </div>
                    <div>

                        <img
                            src="/dotted-element-hori.webp"
                            alt="LMS"
                            className=" h-[160px]  mt-80   object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Lms;
