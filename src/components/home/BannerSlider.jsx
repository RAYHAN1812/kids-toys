import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const slides = [
    {
        id: 1,
        title: "Discover Local Gems",
        subtitle: "Support your local toy sellers and find unique toys.",
        bgColor: "from-indigo-500 via-purple-500 to-pink-500"
    },
    {
        id: 2,
        title: "Building Blocks of Fun",
        subtitle: "Unleash creativity with the largest collection of construction toys.",
        bgColor: "from-green-400 via-teal-400 to-blue-500"
    },
    {
        id: 3,
        title: "Action Figures & More",
        subtitle: "Collectibles and play sets for every young hero.",
        bgColor: "from-yellow-400 via-orange-400 to-red-500"
    },
];
const BannerSlider = () => {
    return (
        <div className="rounded-xl overflow-hidden shadow-2xl h-[400px] lg:h-[60vh] w-full">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="h-full"
            >
                {slides.map(slide => (
                    <SwiperSlide key={slide.id}>
                        <div
                            className="relative h-full w-full bg-cover bg-center transition-transform duration-700 hover:scale-105"
                            style={{ backgroundImage: `url(${slide.imgUrl})` }}
                        >
                            <div className={`absolute inset-0 ${slide.bgGradient} flex flex-col justify-center items-center text-white p-6 lg:p-12`}>
                                <h2 className="text-3xl lg:text-6xl font-extrabold mb-4 animate__animated animate__fadeInDown">
                                    {slide.title}
                                </h2>
                                <p className="text-lg lg:text-2xl font-medium mb-6 animate__animated animate__fadeInUp">
                                    {slide.subtitle}
                                </p>
                                <button className="btn btn-secondary btn-lg animate__animated animate__fadeInUp animate__delay-1s">
                                    Shop Now
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default BannerSlider;
