import React, { useEffect } from "react";

//import npm packages
import AOS from 'aos';

//import components in project
import YesilKayaIndexFlow from "../../../../atoms/YesilyakaAtoms/IndexFlow";

//import images
import { koruIndex } from "../../../../helper/Koru/KoruData";

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
        </>
    )
}

export default YesilkayaKoruHero;


