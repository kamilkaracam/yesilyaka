import React from 'react';
//import gatsby
import {Link} from "gatsby";

//import styles
import * as classes from "./newsswiper.module.scss";
import SmallTitle from "../../../SmallTitle";

const SwiperCard = (props) => {
    return(
      <section className={classes.news}>
        <div className={classes.newsText} data-aos={'fade-up'} data-aos-duration={'1300'}>
          <SmallTitle title="YEŞİLYAKA'DAN SON HABERLER"/>
          <h2>{ props.title }</h2>
          <p>{ props.text }</p>
        </div>
        <div className={classes.newsImage} data-aos={'zoom-in'} data-aos-duration={'1300'}>
          <img src={ props.img } width={'100%'} alt={ props.alt }/>
        </div>
      </section>
    )
}
export default SwiperCard;