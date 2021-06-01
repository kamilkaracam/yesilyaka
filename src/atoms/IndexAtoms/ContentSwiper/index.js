import React, {useEffect} from 'react';

//import npm packages
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore,{Navigation} from "swiper/core";
import SwiperCard from "./SwiperCard";
import AOS from 'aos';

//import images
import {contentSwiper} from '../../../helper/IndexData';

//import styles
import './contentswiper.scss';

SwiperCore.use([Navigation]);

const ContentSwiper = () => {

    return(
        <>
            <Swiper
                slidesPerView={'auto'}
                spaceBetween={25}
                navigation={true}
                className="contentSwiper"
                centeredSlides={true}
            >
                <SwiperSlide className="contentSlide">
                    <SwiperCard
                        img={contentSwiper[0].img}
                        alt={contentSwiper[0].alt}
                        subtitle={contentSwiper[0].subtitle}
                        title={contentSwiper[0].title}
                    />
                </SwiperSlide>
                <SwiperSlide className="contentSlide">
                    <SwiperCard
                        img={contentSwiper[1].img}
                        alt={contentSwiper[1].alt}
                        subtitle={contentSwiper[1].subtitle}
                        title={contentSwiper[1].title}
                    />
                </SwiperSlide>
                <SwiperSlide className="contentSlide">
                    <SwiperCard
                        img={contentSwiper[2].img}
                        alt={contentSwiper[2].alt}
                        subtitle={contentSwiper[2].subtitle}
                        title={contentSwiper[2].title}
                    />
                </SwiperSlide>
                <SwiperSlide className="contentSlide">
                    <SwiperCard
                        img={contentSwiper[3].img}
                        alt={contentSwiper[3].alt}
                        subtitle={contentSwiper[3].subtitle}
                        title={contentSwiper[3].title}
                    />
                </SwiperSlide>
            </Swiper>
        </>
    )

}

export default ContentSwiper;