import React from 'react';

//import style
import * as classes from './smalltitle.module.scss';

const SmallTitle = (props) => {
    return(
        <h6 className={classes.smallTitle}>{props.title}</h6>
    )
}

export default SmallTitle;