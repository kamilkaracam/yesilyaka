import React from 'react';

//import styles
import * as classes from './contactsocials.module.scss';

const ContactSocials = (props) => {
    return(
        <div className={classes.socialWrap}>
            <h6>{props.title}</h6>
            {props.children}
        </div>
    )
}

export default ContactSocials;