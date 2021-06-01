import React, { useEffect } from 'react';

//import npm packages
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper/core";
import AOS from 'aos';

//import component in project
import SwiperCard from "./SwiperCard";

//import data
import { newsSwiper } from "../../../helper/IndexData";

//import style
import './newsswiper.scss';

SwiperCore.use([Pagination, Autoplay]);

const NewsSwiper = () => {

    useEffect(() => {

        AOS.init()
        AOS.refresh()

    }, [])

    return (
        <>
            <Swiper
                spaceBetween={12}
                centeredSlides={true}
                pagination={true}
                slidesPerView={'auto'}
                autoplay={{
                    "delay": 12000,
                    "disableOnInteraction": false
                }}
                className="newsSwiper"
            >
                <SwiperSlide
                    className="newsSlide"
                >
                    <SwiperCard
                        img={newsSwiper[0].img}
                        alt={newsSwiper[0].alt}
                        title={newsSwiper[0].title}
                        text={newsSwiper[0].text}
                    />
                </SwiperSlide>
                <SwiperSlide
                    className="newsSlide"
                >
                    <SwiperCard
                        img={newsSwiper[1].img}
                        alt={newsSwiper[1].alt}
                        title={newsSwiper[1].title}
                        text={newsSwiper[1].text}
                    />
                </SwiperSlide>

            </Swiper>
        </>
    )
}
export default NewsSwiper;