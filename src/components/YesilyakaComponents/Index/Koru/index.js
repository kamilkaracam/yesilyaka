import React, { useEffect } from "react";

//import npm packages
import AOS from 'aos';

//import components in project
import YesilKayaIndexFlow from "../../../../atoms/YesilyakaAtoms/IndexFlow";
import ContactSocials from "../../../../atoms/ContactSocials";

//import images
import { koruIndex } from "../../../../helper/Koru/KoruData";
import mapyesilkaya from '../../../../assets/images/mapmesa.jpg';

//import styles
import * as classes from "./yesilkayakoru.module.scss";

const YesilkayaKoruHero = () => {

    useEffect(() => {

        AOS.init()
        AOS.refresh()

    }, [])

    return (
        <>
            <div className={classes.hero} >
                <div className={classes.heroWrap}>
                    <img src={koruIndex[0].img} alt={koruIndex[0].img} />
                </div>
                <p>
                    Yeşilyaka’da ruhunuz huzurlu, hayatınız hiç olmadığı kadar dingin olacak.
                </p>

            </div>
            <div className="mb-3  mt-5 text-center" data-aos={'zoom-in'} data-aos-duration={'1300'}>
                <h1 style={{ fontSize: 3.5 + 'rem' }}>DOĞANIN İÇİNDE YAŞA</h1>

            </div>
            <YesilKayaIndexFlow
                first={koruIndex[1].img}
                second={koruIndex[2].img}

                text=" Müstakil bahçeli villanız,
                180.000 m²’lik peyzaj alanında adeta doğanın bir parçası."
            />
            <div className="mb-3  mt-5 text-center" data-aos={'zoom-in'} data-aos-duration={'1300'}>
                <h1 style={{ fontSize: 3.5 + 'rem' }}>İÇ AÇICI BİR PEYZAJ</h1>

            </div>
            <YesilKayaIndexFlow
                background={"#FFFFFF"}
                first={koruIndex[3].img}
                second={koruIndex[4].img}

                text="Rengarenk bahçeleriyle Yeşilyaka Koru,
                dört mevsimin güzelliklerini size her gün yaşatacak."
            />
            <div className="mb-3  mt-5 text-center" data-aos={'zoom-in'} data-aos-duration={'1300'}>
                <h1 style={{ fontSize: 3.5 + 'rem' }}>GÖLET MANZARASI</h1>

            </div>
            <YesilKayaIndexFlow
                first={koruIndex[5].img}
                second={koruIndex[6].img}

                text="1.600 m²’lik gölet,
                günün yorgunluğunu atmanızı sağlayacak ayrıcalıklardan."
            />
            <div className="mb-3  mt-5 text-center" data-aos={'zoom-in'} data-aos-duration={'1300'}>
                <h1 style={{ fontSize: 3.5 + 'rem' }}>YEŞİLYAKA KULÜBÜ</h1>

            </div>
            <YesilKayaIndexFlow
                background={"#FFFFFF"}
                first={koruIndex[7].img}
                second={koruIndex[8].img}

                text="4 Mevsim Yolu’ndan Sağlıklı Yaşam Merkezi’ne, zengin sosyal
                olanaklarıyla hayatınıza renk katacak."
            />
            <div className="mb-3  mt-5 text-center" data-aos={'zoom-in'} data-aos-duration={'1300'}>
                <h1 style={{ fontSize: 3.5 + 'rem' }}>ÇOCUK OYUN ALANLARI</h1>

            </div>
            <YesilKayaIndexFlow
                first={koruIndex[9].img}
                second={koruIndex[10].img}

                text="Tırmanma duvarından ağaç evlere pek çok eğlence alanıyla parklar,
                macerasever çocuklarınızın favorisi."
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

export default YesilkayaKoruHero;


