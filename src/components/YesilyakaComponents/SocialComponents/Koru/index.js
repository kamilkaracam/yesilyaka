import React from 'react';

//import components in project
import SocialBoxKoru from "../../../../atoms/YesilyakaAtoms/SocialBoxKoru";

//import images
import socialhero from '../../../../assets/images/Koru/sosyal/sos-min.jpg';
import {SocialIconSets} from "../../../../helper/Sets/IconSets";


// import style
import * as classes from './socialkoru.module.scss';
import Title from "../../../../atoms/Title";
import SmallTitle from "../../../../atoms/SmallTitle";

const SocialKoruFlow = () => {
    return(
        <>
            <div className={classes.hero}>
                <div className={classes.socialHero}>
                    <img src={socialhero} alt="sos"/>
                </div>
                <div className={classes.socialFlow}>
                    <SmallTitle title="SOSYAL ALANLAR"></SmallTitle>
                    <Title title="YEŞİLKAYA KORU"/>
                    <div className={classes.boxWrapper}>
                        <SocialBoxKoru
                            image={SocialIconSets.movie}
                            text="AÇIK HAVA SİNEMALARI"
                            alt="AÇIK HAVA SİNEMALARI"
                        />
                        <SocialBoxKoru
                            image={SocialIconSets.park}
                            text="ÇOCUK OYUN ALANLAR"
                            alt="ÇOCUK OYUN ALANLAR"
                        />
                        <SocialBoxKoru
                            image={SocialIconSets.gym}
                            text="SPOR VE SPA MERKEZLERİ"
                            alt="SPOR VE SPA MERKEZLERİ"
                        />
                        <SocialBoxKoru
                            image={SocialIconSets.heartz}
                            text="SAĞLIKLI YAŞAM MERKEZİ"
                            alt="SAĞLIKLI YAŞAM MERKEZİ"
                        />
                        <SocialBoxKoru
                            image={SocialIconSets.way}
                            text="KORU VE YÜRÜYÜŞ ALANI"
                            alt="KORU VE YÜRÜYÜŞ ALANI"
                        />
                        <SocialBoxKoru
                            image={SocialIconSets.party}
                            text ="PARTİ ALANLARI"
                            alt ="PARTİ ALANLARI"
                        />
                        <SocialBoxKoru
                            image={SocialIconSets.bank}
                            text="DİNLENME BULUŞMA VE SEYİR NOKTALARI"
                            alt="DİNLENME BULUŞMA VE SEYİR NOKTALARI"
                        />
                        <SocialBoxKoru
                            image={SocialIconSets.pool}
                            text="SAUNA VE BUHAR ODALARI"
                            alt="SAUNA VE BUHAR ODALARI"
                        />
                        <SocialBoxKoru
                            image={SocialIconSets.swim}
                            text="AÇIK-KAPALI YÜZME HAVUZU"
                            alt="AÇIK-KAPALI YÜZME HAVUZU"/>
                        <SocialBoxKoru
                            image={SocialIconSets.lake}
                            text="YANSITMA GÖLETLER"
                            alt="YANSITMA GÖLETLER"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SocialKoruFlow;