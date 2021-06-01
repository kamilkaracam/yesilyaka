import React from 'react';

//import styles
import * as classes from "./contentswiper.module.scss";


const SwiperCard = (props) => {
    return(

        <div className={`${classes.hvrGrw} ${classes.imgWrap}`}>
            <img src={props.img} alt={props.alt}/>
            <div className={classes.overlay}></div>
            <div className={classes.textWrap}>
                <h6>{props.subtitle}</h6>
                <h4>{props.title}</h4>
            </div>
        </div>
    )
}
export default SwiperCard;