import React from 'react';

//import styles
import * as classes from "./villaplan.module.scss";

const VillaPlan = (props) => {
    return (
        <div onClick={props.onClick}>
            <div className={classes.heroImage} data-aos={'zoom-in'} data-aos-duration={'1300'}>
                <img src={props.hero} alt={props.alt} />
            </div>
            <div className={`text-center d-flex justify-content-center flex-column ${classes.sogutText}`}>
                <h1>{props.title}</h1>
                <hr className={`mx-auto ${classes.hr}`} />
                <p>{props.text}<strong>{props.title}</strong>.</p>
            </div>
            <div className={classes.sogutImage}>
                <div className={classes.imgWrap} data-aos={'flip-left'} data-aos-duration={'1300'}>
                    <div className={classes.overlay} />
                    <p className={classes.overtext}>
                        Bahçe Kat Planı
                    </p>
                    <img src={props.planUp} alt={props.planUp} />
                </div>
                <div className={classes.imgWrap} data-aos={'flip-right'} data-aos-duration={'1300'}>
                    <div className={classes.overlay} />
                    <p className={classes.overtext}>
                        Üst Kat Planı
                    </p>
                    <img src={props.planYard} alt={props.planUp} />
                </div>
            </div>
        </div>
    )
}


export default VillaPlan;