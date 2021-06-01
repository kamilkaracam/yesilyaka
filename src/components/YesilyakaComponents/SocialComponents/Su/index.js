import React from 'react';

//import components in project
import SocialBoxSu from "../../../../atoms/YesilyakaAtoms/SocialBoxSu";

//import images
import socialhero from '../../../../assets/images/Su/sosyal/sosyalherosu.png';
import {SocialIconSets} from "../../../../helper/Sets/IconSets";

// import style
import * as classes from './socialsu.module.scss';
import SmallTitle from "../../../../atoms/SmallTitle";

const SocialSuFlow = () => {
    return(
        <>
            <div className={classes.hero}>
                <div className={classes.socialHero}>
                    <img src={socialhero} alt="social hero"/>
                </div>
                <div className={classes.socialFlow}>
                    <SmallTitle title="SOSYAL ALANLAR"></SmallTitle>
                    <h1>YEŞİLYAKA SU</h1>
                    <div className={classes.boxWrapper}>
                        <SocialBoxSu
                            image={SocialIconSets.movie}
                            text="AÇIK HAVA SİNEMALARI"
                            alt={'Açık Hava Sinemaları'}
                        />
                        <SocialBoxSu
                            image={SocialIconSets.park}
                            text="ÇOCUK OYUN ALANLARI"
                            alt={"ÇOCUK OYUN ALANLARI"}
                        />
                        <SocialBoxSu
                            image={SocialIconSets.swim}
                            text="AÇIK-KAPALI YÜZME HAVUZU"
                            alt="AÇIK-KAPALI YÜZME HAVUZU"
                        />
                        <SocialBoxSu
                            image={SocialIconSets.pool}
                            text="SAUNA VE BUHAR ODALARI"
                            alt="SAUNA VE BUHAR ODALARI"
                        />
                        <SocialBoxSu
                            image={SocialIconSets.tennis}
                            text="2 TENİS KORTU"
                            alt="2 TENİS KORTU"
                        />
                        <SocialBoxSu
                            image={SocialIconSets.way}
                            text="KORU VE YÜRÜYÜŞ ALANLARI"
                            alt="KORU VE YÜRÜYÜŞ ALANLARI"
                        />
                        <SocialBoxSu
                            image={SocialIconSets.cafe}
                            text="KAFE VE RESTORAN"
                            alt="CAFE VE RESTORAN"
                        />
                        <SocialBoxSu
                            image={SocialIconSets.bank}
                            text="DİNLENME VE BULUŞMA SEYİR NOKTALARI"
                            alt="DİNLENME VE BULUŞMA SEYİR NOKTALARI"
                        />
                        <SocialBoxSu
                            image={SocialIconSets.gym}
                            text="SPOR VE SPA MERKEZLERİ"
                            alt="SPOR VE SPA MERKEZLERİ"
                        />
                        <SocialBoxSu
                            image={SocialIconSets.love}
                            text="TÜRK HAMAMI"
                            alt="TÜRK HAMAMI"
                        />
                        <SocialBoxSu
                            image={SocialIconSets.basket}
                            text="2 BASKETBOL SAHASI"
                            alt="2 BASKETBOL SAHASI"
                        />
                        <SocialBoxSu
                            image={SocialIconSets.lake}
                            text="YANSIMA GÖLETLER"
                            alt="YANSIMA GÖLETLER"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SocialSuFlow;