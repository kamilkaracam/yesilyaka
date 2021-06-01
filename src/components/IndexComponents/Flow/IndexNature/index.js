import React, { useEffect } from 'react';

//import npm packages
import AOS from 'aos';

//import Gatsby
import { Link } from 'gatsby';

//import images
import { conceptSwiper, indexFlow } from "../../../../helper/IndexData";

//import styles
import * as classes from "./indexnature.module.scss";
import SmallTitle from "../../../../atoms/SmallTitle";

const IndexNature = () => {


    return (
        <>
            <section className={classes.nature}>
                <div className={classes.natureText} data-aos={'fade-down'} data-aos-duration={'1300'}>
                    <SmallTitle title="DOĞAYI YEŞİLYAKA'DA YAŞA" />
                    <h2>Dubleks ve Tek Katlı
                        Bahçeli Villalar</h2>
                    <p>
                        İstanbul gürültüsünden uzak, orman ile çevrelenmiş villalarda her anınızı tatilde gibi yaşayabilirsiniz.
<br />
                        Ulaşım, sosyal hayat ve ihtiyaçlarınız için doğadan uzaklaşmaya gerek kalmadan evinizde huzuru bulabilirsiniz.
<br />
                        İstanbul’da lüks bir hayat standardına ulaşmak, kaliteli yaşamak için doğa ve şehir Yeşilyaka’da.
<br />
                    </p>
                    <Link to={'/iletisim'}><button>Şimdi Bilgi Alın</button></Link>
                </div>
                <div className={classes.natureImage} data-aos={'zoom-in'} data-aos-duration={'1300'}>
                    <div className={classes.imgWrap}>
                        <img src={indexFlow[0].img} alt={indexFlow[0].alt} />
                    </div>

                </div>
            </section>
        </>
    )
}
export default IndexNature;