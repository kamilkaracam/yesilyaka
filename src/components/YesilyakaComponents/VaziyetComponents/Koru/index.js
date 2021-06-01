import React from 'react';

//import npm packages
import {Container} from "react-bootstrap";

//import images
import vaziyet from '../../../../assets/images/Koru/vaziyet/placement-min.png';

//import styles
import * as classes from './vaziyetkoru.module.scss';
import SmallTitle from "../../../../atoms/SmallTitle";

const VaziyetKoru = () => {
    return (
        <Container className="mt-5">

           
            <div className={classes.imgWrap}>
                <img src={vaziyet} alt="vaziyet"/>
            </div>

            <p className={classes.p}>
                Yeşiller içinde uyandığınız ve villanızdan maviye adım attığınız bir yaşam düşleyin. <br/>
                Şehre yakın ancak bir o kadar da doğayla ve suyla temasta olan bir yaşam.<br/>
                Toprağa dokunmanın, rengarenk çiçekler arasında yürümenin, kuş sesleriyle güne başlamanın<br/>
                rahatlatıcı etkisini yaşayın diye Yeşilyaka’da ailenizle mutlu olabileceğiniz evler tasarladık.<br/>
                Mutlu bir yaşam için doğadan asla vazgeçmeyenler Yeşilyaka Koru’da hayatlarına başladı!<br/>
                İstanbul gürültüsünden uzak, orman ile çevrelenmiş villalarda her anınızı tatilde gibi<br/>
                 yaşayabilirsiniz.<br/>
            </p>
        </Container>
    )
}

export default VaziyetKoru;