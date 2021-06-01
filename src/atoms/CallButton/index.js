import React from 'react';

//import image
import callButton from '../../assets/icons/callButton.svg';

//import styles
import * as classes from './callbutton.module.scss';

const CallButton = () => {
    return(
        <>
            <img src={callButton} alt={'call-button'} className={classes.callImage}/>
        </>
    )
}

export default CallButton;