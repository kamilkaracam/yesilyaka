import React from 'react';
//import gatsby
import {Link} from "gatsby";

//import styles
import * as classes from "./conceptswiper.module.scss";

const SwiperCard = (props) => {
    return(
        <div className={`${classes.imgWrap}`}>
            <img src={props.img} alt={props.alt}/>
            <div className={classes.overlay}></div>
            <div className={classes.textWrap}>
                <h4>{props.title}</h4>
                <Link to={props.link}>
                    <button className={classes.button}>Keşfet</button>
                </Link>
            </div>
        </div>
    )
}
export default SwiperCard;