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
    return (
        <div className="">
            <div className="" style={{ marginTop: 150 + 'px' }}>
                <Title
                    title="İLETİŞİM"
                    text="Fiyat ve ödeme planı bilgisi için formu hemen doldurun, deneyimli temsilcilerimiz sizi arasın ve detaylı bilgi alın."
                />

            </div>
            <FormContainer />



            <div className={classes.mapYesilKaya}>
                <a href="https://goo.gl/maps/dBWh8jmadzWN9Bec8" target="_blank">
                    <img src={mapyesilkaya} alt="map" />
                </a>
            </div>
        </div >
    )
}

export default ContactComponents;