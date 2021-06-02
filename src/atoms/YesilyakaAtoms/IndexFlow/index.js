import React from 'react';

//import styles
import * as classes from "./yesilkayaindexflow.module.scss";

const YesilKayaIndexFlow = (props) => {
    return (
        <div className={classes.flow} style={{ backgroundColor: `${props.background}` }}>
            <div className={classes.imgContainer}>
                <div className={classes.imgWrap} data-aos={'zoom-in'} data-aos-duration={'1300'}>
                    <img src={props.first} alt={props.first} />
                </div>
                <div className={classes.imgWrap} data-aos={'zoom-in'} data-aos-duration={'1300'}>
                    <img src={props.second} alt={props.second} />
                </div>
            </div>
            <div className={classes.textContainer} data-aos={'zoom-in'} data-aos-duration={'1300'}>
                <h1>{props.title}</h1>

                <p>{props.text}</p>

                <hr />
            </div>
        </div>
    )
}
export default YesilKayaIndexFlow;