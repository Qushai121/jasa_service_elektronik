import { BigMxWrapper } from "@/Layouts/wrapper/BigMxWrapper";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Thumbs } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/navigation";
import { Link } from "@inertiajs/react";

const BigetronMenus = [
    {
        image: "/images/bg-second.jpg",
        subTitle: "Memiliki Pekerja Bersertif",
        deskripsi:
            "Pekerja Memiliki Skill mumpuni. Cepat dalam melaksanaka tugas",
        icons: "/images/maintenance.png",
    },
    {
        image: "/parts/bg-arduino.jpg",
        subTitle: "iya",
        icons: "/images/maintenance.png",
    },
    {
        image: "/images/bg-main.jpg",
        subTitle: "turu",
        icons: "/images/maintenance.png",
    },
    {
        image: "/images/bg-main.jpg",
        subTitle: "turu",
        icons: "/images/maintenance.png",
    },
];

export const BigetronMain = ({ JenisServices }) => {
    const [swiperBerubah, setSwiperBerubah] = useState(0);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    // console.log(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    return (
        <section className="relative xl:pb-36">
            <Swiper
                className="mySwiper"
                style={{
                    "--swiper-navigation-color": "#2980b9",
                }}
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                }}
                spaceBetween={50}
                slidesPerView={1}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                onSlideChange={(swiper) => {
                    setSwiperBerubah(swiper?.activeIndex);
                }}
                modules={[Navigation, Autoplay, Thumbs]}
            >
                {JenisServices.map((data, key) => {
                    return (
                        <SwiperSlide key={key}>
                            <div
                                className="w-[100vw] duration-300 swiper-slide-sini even:items-end"
                                style={{
                                    backgroundImage: `url(http://127.0.0.1:8000/storage/${data.background_foto})`,
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
                                        }  duration-700 flex flex-col h-[40vh]  xl:h-[60vh]  py-[10%] px-10`}
                                    >
                                        <div className="bg-blueSecondary w-fit px-4 my-1 rounded-sm ">
                                            <h1
                                                className={` duration-1000 xl:text-[2rem] font-bold text-whiteMain font-montserrat my-1`}
                                            >
                                                {data.judul}
                                            </h1>
                                        </div>
                                        <div className="w-[45vw] px-2 rounded-sm bg-opacity-70 overflow-hidden">
                                            <h1
                                                className={`xl:text-xl px-3 bg-white w-fit font-semibold text-blackMain font-montserrat`}
                                            >
                                                {data.sub_judul}
                                            </h1>
                                        </div>
                                        <div className="mt-5">
                                            <Link
                                                href={route(
                                                    "jenisServiceUmum.show",
                                                    data.id
                                                )}
                                                className="btn btn-sm bg-opacity-70  "
                                            >
                                                Kunjungi
                                            </Link>
                                        </div>
                                    </div>
                                </BigMxWrapper>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
            <div className="xl:flex hidden justify-center h-fit  ">
                <div className="w-[40vw] absolute -bottom-2">
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        spaceBetween={10}
                        slidesPerView={JenisServices.length}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[Navigation, Thumbs]}
                        className="mySwiper"
                    >
                        {JenisServices.map((data, key) => {
                            return (
                                <SwiperSlide key={key}>
                                    <div
                                        className={`${
                                            key == swiperBerubah &&
                                            "bg-opacity-90"
                                        } bg-blackThird bg-opacity-70 backdrop-blur-sm h-56 text-whiteMain py-2 px-4 rounded-lg flex flex-col items-center`}
                                    >
                                        <img
                                            className="h-20"
                                            src={
                                                "http://127.0.0.1:8000/storage/" +
                                                data.icon
                                            }
                                        />
                                        <div>
                                            <h5 className="text-center mt-4 line-clamp-4">
                                                {data.sub_judul}
                                            </h5>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};
