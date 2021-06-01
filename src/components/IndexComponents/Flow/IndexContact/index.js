import React,{useEffect,useState} from 'react';


//import npm packages
import AOS from 'aos';

//import images
import map from '../../../../assets/images/mapmesa.jpg';
import location from '../../../../assets/icons/location.svg';
import tel from '../../../../assets/icons/tel.svg';
import search from '../../../../assets/icons/search.png';

//import styles
import * as classes from "./indexcontact.module.scss";
import {Modal} from "react-bootstrap";

const IndexContact = () => {
    const [show, setShow] = useState(false);

    const handleClose = (e) => {
        setShow(false)
    }

    const handleShow = () => setShow(true);

    return (
        <>
            <section className={classes.contact}>
                <div className={classes.contactText} data-aos={'fade-up'} data-aos-duration={'1300'}>
                    <h2>
                        Yeşilyaka
                        Ayrıcalıklarını
                        Keşfetmek İçin
                        Satış Ofisimize
                        Davetlisiniz
                    </h2>
                    <div className={classes.contactSpan}>
                       <span>
                        <img src={location} alt={'location'}/>
                        <p>Karaağaç Mahallesi, Sırtköy Bulvarı, No: 16/A</p>
                    </span>
                        <span>
                        <img src={tel} alt={'tel'}/>
                        <p>Çağrı Merkezi: 444 0 986</p>
                    </span>
                    </div>
                </div>
                <div className={classes.contactImage} data-aos={'zoom-in'} data-aos-duration={'1300'}>
                    <img src={map} alt="map"/>
                    <div className={classes.overlay}>
                        <div className={classes.content}>
                            <img src={search} onClick={handleShow}/>
                        </div>
                    </div>
                </div>
            </section>

            <Modal
                show={show}
                onHide={handleClose}
                close
                size={'xl'}
                backdrop={true}
                backdropClassName={classes.backDrop}
            >
                <Modal.Header closeButton></Modal.Header>
                <img src={map} alt="map"/>
            </Modal>
        </>
    )
}
export default IndexContact;