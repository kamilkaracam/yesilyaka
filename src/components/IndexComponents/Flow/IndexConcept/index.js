import React, {useEffect} from 'react';

//import npm packages
import AOS from 'aos';

//import components in project
import ConceptSwiper from "../../../../atoms/IndexAtoms/ConceptSwiper";
import SmallTitle from "../../../../atoms/SmallTitle";

//import styles
import * as classes from "./indexconcept.module.scss";

const IndexConcept = () => {

    useEffect(()=>{

        AOS.init()
        AOS.refresh()

    },[])

    return(
        <>
            <section className={classes.concept}>
                <div className={classes.conceptText} data-aos={'zoom-in'} data-aos-duration={'1300'}>
                    <SmallTitle title="KONSEPT"/>
                    <h2>Yeşilyaka Dünyasını Keşfedin</h2>
                </div>
                <div className={classes.conceptSwiper}>
                    <ConceptSwiper/>
                </div>
            </section>
        </>
    )
}

export default IndexConcept;