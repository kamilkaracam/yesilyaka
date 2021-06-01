import React from "react";

//import styles
import * as classes from "./title.module.scss";

const Title = (props) => {
    return(
        <div className={classes.natureText} data-aos={'zoom-down'} data-aos-duration={'1300'}>
            <h6>{props.subtitle}</h6>
            <h2>{props.title}</h2>
            <p>{props.text}</p>
        </div>
    )
}
export default Title;


