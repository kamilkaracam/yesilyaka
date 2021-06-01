import React, { useRef, useState } from "react";


// Import npm packages
import { Swiper, SwiperSlide } from "swiper/react";
import
SwiperCore,
{
    Navigation,
    Thumbs
}
    from 'swiper/core';

//import images & data
import { KoruGallery } from "../../../../helper/Koru/KoruData";


//import style
import './korugallery.scss';
import { Button } from "react-bootstrap";
import "swiper/components/navigation/navigation.min.css";
import Title from "../../../../atoms/Title";



// install Swiper modules
SwiperCore.use([Navigation, Thumbs]);


const KoruGalleryComponent = () => {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [activeOne, setActiveOne] = useState('');
    const [activeTwo, setActiveTwo] = useState('');
    const [activeThree, setActiveThree] = useState('');
    const [activeFour, setActiveFour] = useState('');


    return (
        <>
            <Title title="YEŞİLYAKA KORU" subtitle="GALERİ" data-aos={'zoom-in'} data-aos-duration={'1300'} />

            <Swiper
                spaceBetween={10}
                thumbs={{ swiper: thumbsSwiper }}
                data-aos={'fade-down'} data-aos-duration={'1300'}
                className="gallerySwiper">
                {/* Outside Button Swiper */}
                <SwiperSlide>
                    <Swiper
                        navigation={true}
                        className="villaInside"
                    >
                        <SwiperSlide>
                            <div className="imageCase">
                                <img src={KoruGallery.outside1} alt={KoruGallery.alt} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="imageCase">
                                <img src={KoruGallery.outside2} alt={KoruGallery.alt} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="imageCase">
                                <img src={KoruGallery.outside3} alt={KoruGallery.alt} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="imageCase">
                                <img src={KoruGallery.outside4} alt={KoruGallery.alt} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="imageCase">
                                <img src={KoruGallery.outside5} alt={KoruGallery.alt} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="imageCase">
                                <img src={KoruGallery.outside6} alt={KoruGallery.alt} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="imageCase">
                                <img src={KoruGallery.outside7} alt={KoruGallery.alt} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="imageCase">
                                <img src={KoruGallery.outside8} alt={KoruGallery.alt} />
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </SwiperSlide>
                {/* Inside Button Swiper */}
                <SwiperSlide>
                    <Swiper
                        navigation={true}
                        className="villaInside"
                    >
                        <SwiperSlide>
                            <div className="imageCase">
                                <img src={KoruGallery.inside} alt={KoruGallery.alt} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="imageCase">
                                <img src={KoruGallery.inside2} alt={KoruGallery.alt} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="imageCase">
                                <img src={KoruGallery.inside3} alt={KoruGallery.alt} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="imageCase">
                                <img src={KoruGallery.inside4} alt={KoruGallery.alt} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="imageCase">
                                <img src={KoruGallery.inside5} alt={KoruGallery.alt} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="imageCase">
                                <img src={KoruGallery.inside6} alt={KoruGallery.alt} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="imageCase">
                                <img src={KoruGallery.inside7} alt={KoruGallery.alt} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="imageCase">
                                <img src={KoruGallery.inside8} alt={KoruGallery.alt} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="imageCase">
                                <img src={KoruGallery.inside9} alt={KoruGallery.alt} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="imageCase">
                                <img src={KoruGallery.inside10} alt={KoruGallery.alt} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="imageCase">
                                <img src={KoruGallery.inside11} alt={KoruGallery.alt} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="imageCase">
                                <img src={KoruGallery.inside12} alt={KoruGallery.alt} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="imageCase">
                                <img src={KoruGallery.inside13} alt={KoruGallery.alt} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="imageCase">
                                <img src={KoruGallery.inside14} alt={KoruGallery.alt} />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </SwiperSlide>
                {/* Social Button Swiper */}
                <SwiperSlide>
                    <Swiper
                        navigation={true}
                        className="villaInside"
                    >
                        <SwiperSlide>
                            <div className="imageCase">
                                <img src={KoruGallery.social} alt={KoruGallery.alt} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="imageCase">
                                <img src={KoruGallery.social1} alt={KoruGallery.alt} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="imageCase">
                                <img src={KoruGallery.social2} alt={KoruGallery.alt} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="imageCase">
                                <img src={KoruGallery.social3} alt={KoruGallery.alt} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="imageCase">
                                <img src={KoruGallery.social4} alt={KoruGallery.alt} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="imageCase">
                                <img src={KoruGallery.social5} alt={KoruGallery.alt} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="imageCase">
                                <img src={KoruGallery.social7} alt={KoruGallery.alt} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="imageCase">
                                <img src={KoruGallery.social8} alt={KoruGallery.alt} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="imageCase">
                                <img src={KoruGallery.social9} alt={KoruGallery.alt} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="imageCase">
                                <img src={KoruGallery.social10} alt={KoruGallery.alt} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="imageCase">
                                <img src={KoruGallery.social11} alt={KoruGallery.alt} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="imageCase">
                                <img src={KoruGallery.social12} alt={KoruGallery.alt} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="imageCase">
                                <img src={KoruGallery.social13} alt={KoruGallery.alt} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="imageCase">
                                <img src={KoruGallery.social14} alt={KoruGallery.alt} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="imageCase">
                                <img src={KoruGallery.social15} alt={KoruGallery.alt} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="imageCase">
                                <img src={KoruGallery.social16} alt={KoruGallery.alt} />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </SwiperSlide>
                {/* Video Button Swiper */}
                <SwiperSlide>
                    <iframe width="100%" height="500px" src="https://www.youtube.com/embed/GAyh_5xt4ds"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
                </SwiperSlide>
            </Swiper>
            <Swiper
                onSwiper={
                    setThumbsSwiper}
                onClick={(aa) => {
                    console.log(aa.clickedIndex);
                }}
                spaceBetween={0}
                slidesPerView={'auto'}
                watchSlidesVisibility={true}
                watchSlidesProgress={true}
                allowTouchMove={false}
                slideToClickedSlide={false}
                className="galleryThumbSwiper">
                <SwiperSlide className="thumbSlide">
                    <Button
                        data-aos={'fade-up'} data-aos-duration={'1300'}
                        className="btn-secondary"
                        style={{ 'backgroundColor': `${activeTwo}`, borderRadius: '15px' }}
                        onClick={() => {
                            setActiveOne('')
                            setActiveTwo('black')
                            setActiveThree('')
                            setActiveFour('')
                        }}
                    >Villa Dış Mekan</Button>
                </SwiperSlide>
                <SwiperSlide
                    className="thumbSlide"
                >
                    <Button
                        className="btn-secondary"
                        data-aos={'fade-up'} data-aos-duration={'1300'}
                        style={{ 'backgroundColor': `${activeOne}`, borderRadius: '15px' }}
                        onClick={() => {
                            setActiveOne('black')
                            setActiveTwo('')
                            setActiveThree('')
                            setActiveFour('')
                        }}
                    >Villa İç Mekan</Button>
                </SwiperSlide>
                <SwiperSlide
                    className="thumbSlide"
                >
                    <Button
                        className="btn-secondary"
                        data-aos={'fade-up'} data-aos-duration={'1300'}
                        style={{ 'backgroundColor': `${activeThree}`, borderRadius: '15px' }}
                        onClick={() => {
                            setActiveOne('')
                            setActiveTwo('')
                            setActiveThree('black')
                            setActiveFour('')
                        }}
                    >Sosyal Alanlar</Button>
                </SwiperSlide>
                <SwiperSlide
                    className="thumbSlide"
                >
                    <Button
                        className="btn-secondary"
                        data-aos={'fade-up'} data-aos-duration={'1300'}
                        style={{ 'backgroundColor': `${activeFour}`, borderRadius: '15px' }}
                        onClick={() => {
                            setActiveOne('')
                            setActiveTwo('')
                            setActiveThree('')
                            setActiveFour('black')
                        }}
                    >Videolar</Button>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default KoruGalleryComponent;