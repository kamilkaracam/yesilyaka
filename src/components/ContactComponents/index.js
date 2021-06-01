import React from 'react';

//import components in project
import Title from "../../atoms/Title";
import FormContainer from "../../atoms/FormContainer";
import ContactSocials from "../../atoms/ContactSocials";

//import images
import map from '../../assets/icons/map.svg';
import mapyesilkaya from '../../assets/images/mapmesa.jpg';

//import styles
import * as classes from './contactcomponent.module.scss';

const ContactComponents = () => {
    return(
        <div className="mt-5 mt-lg-0">
            <Title
                title="İLETİŞİM"
                text="Fiyat ve ödeme planı bilgisi için formu hemen doldurun, deneyimli temsilcilerimiz sizi arasın ve detaylı bilgi alın."
            />
            <FormContainer/>
            <div className={classes.contactText}>
               <p>
                   Yeşilyaka’da şehir hayatı yanı başınızda.<br/>
                    Okul, hastane, alışveriş merkezi, marina ve havaalanlarına oldukça yakın
                   olan Yeşilyaka’da<br/>
                    ulaşım derdiniz ortadan kalkıyor. Doğayla içi içe bir ortamda, siz de aileniz de mutlu.
               </p>
               <p>
                   İstanbul Havalimanı, Hadımköy Otoyol Girişi, Bahçeşehir, Florya ve Yeşilköy gibi<br/>
                    kilit noktalara ulaşım kolaylığı
                   sağlayan lokasyonu ile Büyükçekmece Göl Vadisi’nde yer alan <br/>
                   Yeşilyaka, hayatınızı kolaylaştırıyor.
               </p>
               <p><strong>Adres: </strong>Karaağaç Mahallesi, Sırtköy Bulvarı, No: 16/A Büyükçekmece / İstanbul</p>
                <a href="tel:444-0-986" className={classes.callButton}>444 0 986</a>
                <div className="d-flex flex-column align-items-center">
                    <a href="https://goo.gl/maps/dBWh8jmadzWN9Bec8" target="_blank" rel="noreferrer" className={classes.mapsButton}>Google Maps Yol Tarifi Al <span><img src={map} width="50px" alt="mapIcon"/></span></a>
                    <a href="https://yandex.com.tr/harita/-/CCU4u2GNhB" target="_blank" rel="noreferrer"  className={classes.mapsButton}>Yandex Maps Yol Tarifi Al <span><img src={map} width="50px" alt="mapIcon"/></span></a>
                </div>

            </div>
            <div className={classes.video}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/CyL9KR6dC60"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
            </div>
            <div className={classes.socials}>
                <ContactSocials title="HASTANELER">
                    <p><strong>Bahçeşehir Acıbadem</strong></p>
                    <p><strong>Tıp Merkezi : </strong>10 dakika</p>
                    <p><strong>Bahçeşehir Medikal Park : </strong>10 dakika</p>
                    <p><strong>Medicana International</strong></p>
                    <p><strong>Hospital : </strong>15 dakika</p>
                </ContactSocials>
                <ContactSocials title="ALIŞVERİŞ MERKEZLERİ">
                    <p><strong>Metro Grossmarket : </strong>5 Dakika</p>
                    <p><strong>Akbatı AVM : </strong>10 Dakika</p>
                    <p><strong>Mall of İstanbul : </strong>15 dakika</p>
                </ContactSocials>
                <ContactSocials title="ULAŞIM">
                    <p><strong>Bahçeşehir : </strong>10 Dakika</p>
                    <p><strong>Büyükçekmece Marina : </strong>15 Dakika</p>
                    <p><strong>İstanbul Havalimanı : </strong>30 Dakika</p>
                    <p><strong>West İstanbul Marina : </strong>20 Dakika</p>
                    <p><strong>Güzelce Marina : </strong>20 Dakika</p>
                    <p><strong>Maslak, Levent : </strong>45 Dakika</p>
                </ContactSocials>
                <ContactSocials title="EĞİTİM KURUMLARI">
                    <p><strong>Kültür Koleji : </strong>2 Dakika</p>
                    <p><strong>İstanbul Üniversitesi</strong></p>
                    <p><strong>Büyükçekmece Yerleşkesi : </strong>2 Dakika</p>
                    <p><strong>Community School : </strong>5 Dakika</p>
                    <p><strong>Alkev : </strong>6 Dakika</p>
                    <p><strong>Özel Mev Koleji : </strong>6 Dakika</p>
                    <p><strong>Doğa Koleji Bahçeşehir : </strong>8 Dakika</p>
                </ContactSocials>
            </div>
            <div className={classes.mapYesilKaya}>
                <a href="https://goo.gl/maps/dBWh8jmadzWN9Bec8" target="_blank">
                    <img src={mapyesilkaya} alt="map"/>
                </a>
            </div>
        </div>
    )
}

export default ContactComponents;