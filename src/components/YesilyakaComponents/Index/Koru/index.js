import React, {useEffect} from "react";

//import npm packages
import AOS from 'aos';

//import components in project
import YesilKayaIndexFlow from "../../../../atoms/YesilyakaAtoms/IndexFlow";

//import images
import {koruIndex} from "../../../../helper/Koru/KoruData";

//import styles
import * as classes from "./yesilkayakoru.module.scss";

const YesilkayaKoruHero = () => {

    useEffect(() => {

        AOS.init()
        AOS.refresh()

    },[])

    return (
        <>
            <div className={classes.hero} >
                <div className={classes.heroWrap}>
                    <img src={koruIndex[0].img} alt={koruIndex[0].img}/>
                </div>
                <p>
                    Yeşilyaka’da ruhunuz huzurlu, hayatınız hiç olmadığı kadar dingin olacak.
                </p>
            </div>
            <YesilKayaIndexFlow
                first={koruIndex[1].img}
                second={koruIndex[2].img}
                title="DOĞANIN İÇİNDE YAŞA"
                text=" Müstakil bahçeli villanız,
                180.000 m²’lik peyzaj alanında adeta doğanın bir parçası."
            />
            <YesilKayaIndexFlow
                background={"#EEEEEE"}
                first={koruIndex[3].img}
                second={koruIndex[4].img}
                title="İÇ AÇICI BİR PEYZAJ"
                text="Rengarenk bahçeleriyle Yeşilyaka Koru,
                dört mevsimin güzelliklerini size her gün yaşatacak."
            />
            <YesilKayaIndexFlow
                first={koruIndex[5].img}
                second={koruIndex[6].img}
                title="GÖLET MANZARASI"
                text="1.600 m²’lik gölet,
                günün yorgunluğunu atmanızı sağlayacak ayrıcalıklardan."
            />

            <YesilKayaIndexFlow
                background={"#EEEEEE"}
                first={koruIndex[7].img}
                second={koruIndex[8].img}
                title="YEŞİLYAKA KULÜBÜ"
                text="4 Mevsim Yolu’ndan Sağlıklı Yaşam Merkezi’ne, zengin sosyal
                olanaklarıyla hayatınıza renk katacak."
            />
            <YesilKayaIndexFlow
                first={koruIndex[9].img}
                second={koruIndex[10].img}
                title="ÇOCUK OYUN ALANLARI"
                text="Tırmanma duvarından ağaç evlere pek çok eğlence alanıyla parklar,
                macerasever çocuklarınızın favorisi."
            />
        </>
    )
}

export default YesilkayaKoruHero;


