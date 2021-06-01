import React from 'react';

//import gatsby
import {Link} from "gatsby";
//import styles
import * as classes from './koruhero.module.scss';

const KoruHero = () => {
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

export default KoruHero;