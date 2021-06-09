import React from 'react';

//import images
import youtube from '../../../assets/icons/youtube@2x.png';
import linkedin from '../../../assets/icons/linkedin@2x.png';
import insta from '../../../assets/icons/insta@2x.png';
import twitter from '../../../assets/icons/twitter@2x.png';
import facebook from '../../../assets/icons/facebook@2x.png';

//import styles
import * as classes from './footer.module.scss';

const Footer = () => {
    return (
        <>
            <div className={classes.altbar}>
                <span>
                    <a href={'/'}>Yasal Uyarı</a>Tüm hakları saklıdır.  © 2021
                        &nbsp;
                    </span>
                <p><font face="tahoma" size="5" color="black">
                    &nbsp;<b>444 0 986</b></font></p>
                <ul>
                    <li>
                        <a href='https://www.youtube.com/channel/UCXWSMCT1JgcZu9K-CEte7cw' target="_blank">
                            <img src={youtube} alt="youtube" />
                        </a>
                    </li>
                    <li>
                        <a href={'https://tr.linkedin.com/company/mesa-mesken'} target="_blank">
                            <img src={linkedin} alt="linkedin" />
                        </a>
                    </li>
                    <li>
                        <a href={'https://www.instagram.com/explore/tags/yesilyaka/?hl=en'} target="_blank">
                            <img src={insta} alt="instagram" />
                        </a>
                    </li>
                    <li>
                        <a href={'https://www.facebook.com/mesanurolyesilyakasantiyesi'} target="_blank">
                            <img src={facebook} alt="facebook" />
                        </a>
                    </li>




                </ul>


            </div>
        </>
    )
}

export default Footer;