import React from 'react';

//import components in project
import YesilKayaIndexFlow from "../../../../atoms/YesilyakaAtoms/IndexFlow";
import ContactSocials from "../../../../atoms/ContactSocials";

//import images
import { suIndex } from "../../../../helper/Su/SuData";
import mapyesilkaya from '../../../../assets/images/mapmesa.jpg';

//import styles
import * as classes from "./yesilkayasu.module.scss";

const YesilkayaSuHero = () => {
    return (
        <>
            <div className={classes.hero}>
                <div className={classes.heroWrap}>
                    <img src={suIndex[0].img} alt={suIndex[0].alt} />
                </div>
                <p>
                    Yeşilyaka’da ruhunuz huzurlu, hayatınız hiç olmadığı kadar dingin olacak.
                </p>
            </div>
            <div className="mb-3 mt-5 text-center" data-aos={'zoom-in'} data-aos-duration={'1300'}>
                <h1 style={{ fontSize: 3.5 + 'rem' }}>DOĞA İÇİNDE YAŞA</h1>

            </div>
            <YesilKayaIndexFlow

                text="157.282 m²’lik yeşil alan içerisinde konumlanan müstakil bahçeli villanızda zaman su gibi akacak."
                first={suIndex[1].img}
                second={suIndex[2].img}
            />
            <div className="mb-3 mt-5 text-center" data-aos={'zoom-in'} data-aos-duration={'1300'}>
                <h1 style={{ fontSize: 3.5 + 'rem' }}>MAVİ YEŞİL EŞSİZ BİR PEYZAJ</h1>

            </div>
            <YesilKayaIndexFlow
                background={'#FFFFFF'}

                text="122.000 m²’lik su alanına komşu ağaçlar ve binbir renkte çiçekler, Yeşilyaka Su’da hayatınıza renk katmayı bekliyor. "
                first={suIndex[3].img}
                second={suIndex[4].img}
            />
            <div className="mb-3 mt-5 text-center" data-aos={'zoom-in'} data-aos-duration={'1300'}>
                <h1 style={{ fontSize: 3.5 + 'rem' }}>GÖLET MANZARASI</h1>

            </div>
            <YesilKayaIndexFlow

                text="Birkaç adımda ulaşabileceğiniz gölet, manzarasıyla ruhunuzu arındıracak eşsiz bir doğa harikası."
                first={suIndex[5].img}
                second={suIndex[6].img}
            />
            <div className="mb-3 mt-5 text-center" data-aos={'zoom-in'} data-aos-duration={'1300'}>
                <h1 style={{ fontSize: 3.5 + 'rem' }}>YEŞİLYAKA KULUBÜ</h1>

            </div>
            <YesilKayaIndexFlow
                background={'#FFFFFF'}

                text="Açık hava sinemasından spor alanlarına 3.500 m², ruhunuza ve sağlığınıza iyi gelecek aktivitelere özel olarak tasarlandı."
                first={suIndex[7].img}
                second={suIndex[8].img}
            />
            <div className="mb-3 mt-5 text-center" data-aos={'zoom-in'} data-aos-duration={'1300'}>
                <h1 style={{ fontSize: 3.5 + 'rem' }}>ÇOCUK OYUN ALANLARI</h1>

            </div>
            <YesilKayaIndexFlow

                text="Parklar, güvenle büyümesini istediğiniz çocuklarınıza özel geniş eğlence olanaklarıyla dolu."
                first={suIndex[9].img}
                second={suIndex[10].img}
            />

            <div className={classes.socials}>
                <ContactSocials title="HASTANELER">
                    <p><strong>Bahçeşehir Acıbadem</strong></p>
                    <p><strong>Tıp Merkezi : </strong>10 dakika</p>
                    <p><strong>Bahçeşehir Medikal Park : </strong>10 dakika</p>
                    <p><strong>Medicana International</strong></p>
                    <p><strong>Hospital : </strong>15 dakika</p>
                </ContactSocials>
                <ContactSocials title="ALIŞVERİŞ MERKEZLERİ">
                    <p><strong>Metro Grossmarket : </strong>5 Dakika</p>
                    <p><strong>Akbatı AVM : </strong>10 Dakika</p>
                    <p><strong>Mall of İstanbul : </strong>15 dakika</p>
                </ContactSocials>
                <ContactSocials title="ULAŞIM">
                    <p><strong>Bahçeşehir : </strong>10 Dakika</p>
                    <p><strong>Büyükçekmece Marina : </strong>15 Dakika</p>
                    <p><strong>İstanbul Havalimanı : </strong>30 Dakika</p>
                    <p><strong>West İstanbul Marina : </strong>20 Dakika</p>
                    <p><strong>Güzelce Marina : </strong>20 Dakika</p>
                    <p><strong>Maslak, Levent : </strong>45 Dakika</p>
                </ContactSocials>
                <ContactSocials title="EĞİTİM KURUMLARI">
                    <p><strong>Kültür Koleji : </strong>2 Dakika</p>
                    <p><strong>İstanbul Üniversitesi</strong></p>
                    <p><strong>Büyükçekmece Yerleşkesi : </strong>2 Dakika</p>
                    <p><strong>Community School : </strong>5 Dakika</p>
                    <p><strong>Alkev : </strong>6 Dakika</p>
                    <p><strong>Özel Mev Koleji : </strong>6 Dakika</p>
                    <p><strong>Doğa Koleji Bahçeşehir : </strong>8 Dakika</p>
                </ContactSocials>
            </div>

            <div className={classes.mapYesilKaya}>
                <a href="https://goo.gl/maps/dBWh8jmadzWN9Bec8" target="_blank">
                    <img src={mapyesilkaya} alt="map" />
                </a>
            </div>

            <div className={classes.video}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/CyL9KR6dC60"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
            </div>
        </>
    )
}

export default YesilkayaSuHero;