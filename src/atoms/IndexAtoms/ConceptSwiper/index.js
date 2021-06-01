import React,{useEffect} from 'react';

//import npm packages
import {Swiper,SwiperSlide} from "swiper/react";
import SwiperCore,{Navigation} from "swiper/core";
import AOS from 'aos';

//import component in project
import SwiperCard from "./SwiperCard";

//import data
import {conceptSwiper} from "../../../helper/IndexData";

//import style
import './conceptswiper.scss';

SwiperCore.use([Navigation]);

const ConceptSwiper = () => {

    useEffect(()=>{

        AOS.init()
        AOS.refresh()

    },[])

    return (
        <>
            <Swiper
                spaceBetween={18}
                centeredSlides={true}
                slidesPerView={2}
                className="conceptSwiper"
                grabCursor={true}
            >
                <SwiperSlide
                    className="conceptSlide"
                >
                    <SwiperCard
                        img={conceptSwiper[0].img}
                        alt={conceptSwiper[0].alt}
                        title={conceptSwiper[0].title}
                        link={'/yesilyakasu'}
                    />
                </SwiperSlide>
                <SwiperSlide
                    className="conceptSlide"
                >
                    <SwiperCard
                        img={conceptSwiper[1].img}
                        alt={conceptSwiper[1].alt}
                        title={conceptSwiper[1].title}
                        link={'/yesilyakakoru'}
                    />
                </SwiperSlide>
            </Swiper>
        </>
    )
}
export default ConceptSwiper;