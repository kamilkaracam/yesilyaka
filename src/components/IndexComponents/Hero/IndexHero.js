import React, { useEffect } from 'react';

//import npm packages
import { Carousel } from "react-bootstrap";
import AOS from 'aos';

//import images
import { indexCarousel } from '../../../helper/IndexData';
import mesa from '../../../assets/images/mesa.svg';
import nur from '../../../assets/images/nurol.svg';
import mesamurol from '../../../assets/images/mesa-nurol.png';
import arrowDown from '../../../assets/icons/arrowDown.png';

//import styles
import '../../../assets/styles/helper.scss';
import * as classes from './indexhero.module.scss';

const IndexHero = () => {

    return (
        <>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className={classes.carouselImage}
                        src={indexCarousel[0].img}
                        alt={indexCarousel[0].alt}
                    />
                </Carousel.Item>
            </Carousel>
            <div className="d-flex justify-content-center align-items-center position-relative"
                style={{ height: '25px', backgroundColor: '#eeeeee' }}>
                <img src={arrowDown} className={classes.arrow} />
            </div>
            <div className={classes.promo}>
                <h1 data-aos={'zoom-in'} data-aos-duration={'1300'}>

                    YEŞİLYAKA'DA YAŞAM BAŞLADI! 
                  

                </h1>
                  <h1 data-aos={'zoom-in'} data-aos-duration={'1300'}>

                    VİLLANIZ HEMEN TESLİM.
                     

                </h1>
                 
                <div className={classes.imgwrap} data-aos={'zoom-in'} data-aos-duration={'1300'}>
                    <div className={classes.imgbox}>
                        <img
                            className="d-block"
                            src={mesamurol}
                            alt="nurol"
                            width={'100%'}
                        />
                    </div>
                </div>
            </div>
        </>

    )

}

export default IndexHero;