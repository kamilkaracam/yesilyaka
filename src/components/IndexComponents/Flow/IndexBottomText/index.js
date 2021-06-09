import React, { useEffect } from 'react';

//import npm packages
import AOS from 'aos';

//import styles
import * as classes from "./bottomtext.scss";
import mesawithnurol from "../../../../assets/images/mesawithnurol-1.png";
import nur from "../../../../assets/images/nurol.svg";
import { Swiper, SwiperSlide } from "swiper/react";


const BottomText = () => {

    useEffect(() => {

        AOS.init()

    }, [])

    return (
        <main>
            <div className="imgwrap" data-aos={'zoom-in'} data-aos-duration={'1300'} style={{ marginLeft: 25 }}>
                <div className="classes.imgbox">
                    <img
                        className="d-block"
                        src={mesawithnurol}
                        alt="mesa"
                        width={'100%'}
                    />
                </div>
            </div>

            <Swiper
                spaceBetween={12}
                centeredSlides={true}
                pagination={true}
                slidesPerView={'auto'}
                autoplay={{
                    "delay": 6000,
                    "disableOnInteraction": true
                }}
                className="bottomSwiper"
            >
                <SwiperSlide
                    className="bottomSlide"
                >
                    <p data-aos={'flip-down'} data-aos-duration={'1300'}>
                        50 yılı aşkın süredir sadece<br />
                        yeni yuvalar için değil,<br />
                        yeni hatıralar biriktirmek için de çalışıyoruz.<br />
                        Çünkü biz insanın biriktirebileceği <br />
                        en değerli şeyin anıları olduğuna inanıyoruz.

                    </p>
                </SwiperSlide>
                <SwiperSlide
                    className="bottomSlide"
                >
                    <p data-aos={'flip-down'} data-aos-duration={'1300'}>
                        Bugüne kadar hayata geçirdiğimiz yüzlerce projeye değer katan,<br />
                        bizi büyük bir aile yapan yüz binlerce dostumuzun<br />
                        en güzel anılarının ortak noktası olmanın mutluluğunu yaşıyoruz.<br />
                        Şimdi de güzel ve unutulmaz anılarınıza yenilerini ekleyeceğiniz,<br />
                        muhteşem doğasıyla kendinizi hep genç hissedeceğiniz<br />
                        Yeşilyaka’yı beğeninize sunuyoruz.<br />
                    </p>
                </SwiperSlide>
            </Swiper>
        </main>
    )
}

export default BottomText;