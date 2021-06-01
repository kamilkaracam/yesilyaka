import React, {useEffect} from 'react';

//import npm packages
import AOS from 'aos';

//import components in project
import ContentSwiper from "../../../../atoms/IndexAtoms/ContentSwiper";
import SmallTitle from "../../../../atoms/SmallTitle";

// import icons
import villa from '../../../../assets/icons/villa.svg';
import friendnature from '../../../../assets/icons/friendnature.svg';
import field from '../../../../assets/icons/field.svg';

//import styles
import * as classes from "./indexcontent.module.scss";
import {contentSwiper} from "../../../../helper/IndexData";
import SwiperCard from "../../../../atoms/IndexAtoms/ContentSwiper/SwiperCard";
import {Link} from "gatsby";

const IndexContent = () => {

    useEffect(() => {

        AOS.init()
        AOS.refresh()

    },[] )

    return(
       <>
           <section className={classes.content}>
               <div className={classes.contentText} data-aos={'zoom-in'} data-aos-duration={'1300'} >
                   <SmallTitle />
                   <h2>Neden Yeşilyaka<span>?</span></h2>
                   <p>
                       Hayatımızda bahçelerin, ferah alanların, zengin sosyal tesis olanaklarının,
                       geniş balkonların, terasların önemi artık yadsınamaz.
                   </p>
                   <div className={classes.icons}>
                       <div className={classes.iconBox}>
                           <img src={villa} alt="villa"/>
                           <div className={classes.iconBoxText}>
                               <p>
                                   645 VİLLA
                               </p>
                           </div>
                       </div>
                       <div className={classes.iconBox}>
                           <img src={friendnature} alt="doga"/>
                           <div className={classes.iconBoxText}>
                               <p>
                                   237.000 &#13217;<br/>
                                   ORTAK YEŞİL ALAN
                               </p>
                           </div>
                       </div>
                       <div className={classes.iconBox}>
                           <img src={friendnature} alt="doga"/>
                           <div className={classes.iconBoxText}>
                               <p>
                                   767.000 &#13217; <br/>
                                   TOPLAM YEŞİL ALAN
                               </p>
                           </div>
                       </div>
                       <div className={classes.iconBox}>
                           <img src={field} alt="field"/>
                           <div className={classes.iconBoxText}>
                               <p>
                                   6400 &#13217;<br/>
                                   SOSYAL TESİS
                               </p>
                           </div>
                       </div>
                   </div>
               </div>
               <div className={classes.contentSwiper} data-aos={'fade-down'} data-aos-duration={'1300'}>

                   <ContentSwiper/>

                   <div className={`${classes.showSwiper} card-container d-flex flex-wrap justify-content-around mx-auto mb-5`}>
                       <Link to={'/yesilyakakoru'}>
                       <SwiperCard
                           className="hvr-grow"
                           img={contentSwiper[0].img}
                           alt={contentSwiper[0].alt}
                           subtitle={contentSwiper[0].subtitle}
                           title={contentSwiper[0].title}
                       />
                       </Link>
                       <Link to={"/yesilyakakoru/galeri"}>
                       <SwiperCard
                           className="hvr-grow"
                           img={contentSwiper[1].img}
                           alt={contentSwiper[1].alt}
                           subtitle={contentSwiper[1].subtitle}
                           title={contentSwiper[1].title}
                       />
                       </Link>
                       <Link to={"/yesilyakakoru/villa"}>
                       <SwiperCard
                           className="hvr-grow"
                           img={contentSwiper[2].img}
                           alt={contentSwiper[2].alt}
                           subtitle={contentSwiper[2].subtitle}
                           title={contentSwiper[2].title}
                       />
                       </Link>
                       <Link to={"/yesilyakasu/sosyal"}>
                       <SwiperCard
                           className="hvr-grow"
                           img={contentSwiper[3].img}
                           alt={contentSwiper[3].alt}
                           subtitle={contentSwiper[3].subtitle}
                           title={contentSwiper[3].title}
                       />
                       </Link>
                   </div>
               </div>
           </section>
       </>
    )
}

export default IndexContent;