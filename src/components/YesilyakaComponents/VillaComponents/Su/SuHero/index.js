import React from 'react';

//import gatsby
import {Link} from "gatsby";
//import styles
import * as classes from './suhero.module.scss';

const SuHero = () => {
    return(
        <>
            <div className={classes.heroText}>
                <h6>
                    Yeşilyaka’da ruhunuz huzurlu, hayatınız hiç olmadığı kadar dingin olacak.
                </h6>
                <Link to={'/'}>
                    <button>Vaziyet Planı</button>
                </Link>
            </div>
        </>
    )
}

export default SuHero;