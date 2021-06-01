import React from 'react';

//import styles
import * as classes from './socialbox.module.scss';

const SocialBoxKoru = (props) => {
    return(
        <>
            <div className={classes.socialbox}>
                <div className={classes.imageWrap}>
                    <img src={props.image} alt={props.alt}/>
                </div>
                <div className={classes.textWrap}>
                    <p>{props.text}</p>
                </div>
            </div>
        </>
    )
}

export default SocialBoxKoru;