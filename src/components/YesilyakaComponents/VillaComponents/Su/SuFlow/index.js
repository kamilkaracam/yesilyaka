import React from 'react';

//import component in project
import VillaPlan from "../../../../../atoms/YesilyakaAtoms/VillaPlan";

//import images
import { SuVilla } from "../../../../../helper/Su/SuData";
import { PlanSets } from "../../../../../helper/Sets/IconSets";

//import styles
import * as classes from "./suflow.module.scss";

const SuFlow = () => {

    return (
        <>
            <VillaPlan
                title="DENİZ VİLLALARI"
                text="Yüksek tavanlı, yemyeşil bahçeleriyle "
                hero={SuVilla[0].img}
                planUp={PlanSets.denizup}
                planYard={PlanSets.denizyard}
            />
            <VillaPlan
                title="IRMAK VİLLALARI"
                text="Doğanın eşsiz güzelliklerini teras balkonunda ağırlayan "
                hero={SuVilla[1].img}
                planUp={PlanSets.irmakup}
                planYard={PlanSets.irmakyard}
            />
            <VillaPlan
                title="NEHİR VİLLALARI"
                text="Yeşilin ve mavinin buluşma noktası "
                hero={SuVilla[2].img}
                planUp={PlanSets.nehiryard}
                planYard={PlanSets.nehirup}
            />
            <VillaPlan
                title="GÖL VİLLALARI"
                text="Her gününüze huzur esintisi katacak "
                hero={SuVilla[3].img}
                planUp={PlanSets.golyard}
                planYard={PlanSets.golup}
            />
            <VillaPlan
                title="OKYANUS VİLLALARI"
                text="Hayatınızı ayrıcalıklarla dolduracak "
                hero={SuVilla[4].img}
                planUp={PlanSets.okyanus}
                planYard={PlanSets.okyanus}
            />
            <VillaPlan
                title="ÇAĞLAYAN VİLLALARI"
                text="Tek kata mutluluk ve doğayı sığdıran "
                hero={SuVilla[5].img}
                planUp={PlanSets.caglayan}
                planYard={PlanSets.caglayan}
            />
            <VillaPlan
                title="ŞELALE VİLLALARI"
                text="Yaşam konforunuzu yükseltecek yüksek tavanlı "
                hero={SuVilla[6].img}
                planUp={PlanSets.selale}
                planYard={PlanSets.selale}
            />
            <VillaPlan
                title="DERYA VİLLALARI"
                text="Yeşilyaka Su’nun en ferah yaşam alanı "
                hero={SuVilla[7].img}
                planUp={PlanSets.deryaup}
                planYard={PlanSets.deryayard}
            />
        </>
    )
}

export default SuFlow;