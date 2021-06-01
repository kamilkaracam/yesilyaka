import React from 'react';

//import components in project
import YesilKayaIndexFlow from "../../../../atoms/YesilyakaAtoms/IndexFlow";

//import images
import {suIndex} from "../../../../helper/Su/SuData";

//import styles
import * as classes from "./yesilkayasu.module.scss";

const YesilkayaSuHero = () => {
    return (
        <>
            <div className={classes.hero}>
                <div className={classes.heroWrap}>
                    <img src={suIndex[0].img} alt={suIndex[0].alt}/>
                </div>
                <p>
                    Yeşilyaka’da ruhunuz huzurlu, hayatınız hiç olmadığı kadar dingin olacak.
                </p>
            </div>
            <YesilKayaIndexFlow
                title="DOĞA İÇİNDE YAŞA"
                text="157.282 m²’lik yeşil alan içerisinde konumlanan müstakil bahçeli villanızda zaman su gibi akacak."
                first={suIndex[1].img}
                second={suIndex[2].img}
            />
            <YesilKayaIndexFlow
                background={'#EEEEEE'}
                title="MAVİ YEŞİL EŞSİZ BİR PEYZAJ"
                text="122.000 m²’lik su alanına komşu ağaçlar ve binbir renkte çiçekler, Yeşilyaka Su’da hayatınıza renk katmayı bekliyor. "
                first={suIndex[3].img}
                second={suIndex[4].img}
            />
            <YesilKayaIndexFlow
                title="GÖLET MANZARASI"
                text="Birkaç adımda ulaşabileceğiniz gölet, manzarasıyla ruhunuzu arındıracak eşsiz bir doğa harikası."
                first={suIndex[5].img}
                second={suIndex[6].img}
            />
            <YesilKayaIndexFlow
                background={'#EEEEEE'}
                title="YEŞİLYAKA KULUBÜ"
                text="Açık hava sinemasından spor alanlarına 3.500 m², ruhunuza ve sağlığınıza iyi gelecek aktivitelere özel olarak tasarlandı."
                first={suIndex[7].img}
                second={suIndex[8].img}
            />
            <YesilKayaIndexFlow
                title="ÇOCUK OYUN ALANLARI"
                text="Parklar, güvenle büyümesini istediğiniz çocuklarınıza özel geniş eğlence olanaklarıyla dolu."
                first={suIndex[9].img}
                second={suIndex[10].img}
            />
        </>
    )
}

export default YesilkayaSuHero;