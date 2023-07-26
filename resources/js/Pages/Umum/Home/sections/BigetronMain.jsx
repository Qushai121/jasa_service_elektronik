import { BigMxWrapper } from "@/Layouts/wrapper/BigMxWrapper";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const BigetronMenus = [
    {
        image: "/images/bg-second.jpg",
        keterangan: "Memiliki Pekerja Bersertif",
    },
    { image: "/images/bg-second.jpg", keterangan: "iya" },
    { image: "/images/bg-main.jpg", keterangan: "turu" },
];

export const BigetronMain = () => {
    const [swiperBerubah, setSwiperBerubah] = useState(0);

    return (
        <section>
            <Swiper
                className="mySwiper"
                style={{
                    "--swiper-navigation-color": "#2980b9",
                }}
                spaceBetween={50}
                slidesPerView={1}
                navigation={true}
                onSlideChange={(swiper) => {
                    // const animatedText = document.querySelector(".animated-text");
                    // animatedText.classList.remove("active");
                    const currentSlide = swiper?.slides[swiper?.activeIndex];
                    // const animatedTextInSlide = currentSlide.querySelector(".animated-text");
                    setSwiperBerubah(swiper?.activeIndex);
                    // animatedTextInSlide.classList.add("active");
                }}
                modules={[Navigation]}
            >
                {BigetronMenus.map((data, key) => {
                    if (key == swiperBerubah) {
                        console.log(key);
                    }
                    return (
                        <SwiperSlide key={key}>
                            <div
                                className="w-[100vw] duration-300 swiper-slide-sini even:items-end"
                                style={{
                                    backgroundImage: `url(${data.image})`,
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundColor: "rgba(248, 247, 216, 0.2)",
                                    backgroundBlendMode: "lighten",
                                }}
                            >
                                <BigMxWrapper>
                                    <div
                                        className={`${
                                            key == swiperBerubah
                                                ? "translate-y-0 "
                                                : "translate-y-96"
                                        }  duration-700 flex flex-col h-[40vh]  lg:h-[60vh]  py-[10%] px-10`}
                                    >
                                        <div className="bg-blueSecondary w-fit px-4 my-1 rounded-sm ">
                                            <h1
                                                className={` duration-1000 lg:text-[2rem] font-bold text-whiteMain font-montserrat my-1`}
                                            >
                                                {data.keterangan}
                                            </h1>
                                        </div>
                                        <div className="bg-white w-fit px-2 rounded-sm bg-opacity-70 overflow-hidden">
                                            <h1
                                                className={`lg:text-xl font-semibold text-blackMain font-montserrat`}
                                            >
                                                Pekerja Memilik Skill Mempuni.
                                            </h1>
                                            <h1 className="lg:text-xl font-semibold text-blackMain font-montserrat">
                                                Cepat Dalam Melaksanakan
                                                Pekerjaan.
                                            </h1>
                                        </div>
                                    </div>
                                </BigMxWrapper>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </section>
    );
};
