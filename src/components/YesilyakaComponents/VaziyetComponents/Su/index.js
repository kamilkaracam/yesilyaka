import React from 'react';

//import npm packages
import {Container} from "react-bootstrap";
//import images
import vaziyet from '../../../../assets/images/Su/vaziyet/placementsu-min.png';
//import styles
import * as classes from './vaziyetsu.module.scss';
import SmallTitle from "../../../../atoms/SmallTitle";

const VaziyetSu = () => {
    return (
        <Container className="mt-5">
           
            <div className={classes.imgWrap}>
                <img src={vaziyet} alt="vaziyet"/>
            </div>
            <p className={classes.p}>
                Dilediğiniz yaşamın içinde doğa olduğunu biliyor ve sizin için tasarlıyoruz.<br/>
                Yeşilyaka Su ile İstanbul’da aradığınız hayat bulundu.<br/>
                Yeşillikler içinde, dört bir yanınızın mavi ile bezendiği yeni yaşam alanınız hazır.<br/>
                Büyükçekmece’de yer alan Yeşilyaka Su, şehre hayat katan bu gölden ilham alıyor.<br/>
                Villalar, yürüyüş alanları, koru ve göletlerin arasında uzanan su kanalları Yeşilyaka Su’ya can <br/>
                veriyor.<br/>
                Suyun rahatlatıcı gücünü hayatınızda hissedin.<br/>
                Ulaşımı kolay, hava kirliliğinden uzak ve sosyal faaliyetler açısından zengin bir hayat seçin.<br/>
            </p>
        </Container>
    )
}

export default VaziyetSu;