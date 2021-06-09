import React, { useState } from 'react';

//import components in project
import VillaPlan from "../../../../../atoms/YesilyakaAtoms/VillaPlan";


import map from '../../../../../assets/images/map@2x.png';
//import images
import { koruVilla } from '../../../../../helper/Koru/KoruData';
import { PlanSets } from "../../../../../helper/Sets/IconSets";
import { Modal } from "react-bootstrap";

//import styles
import * as classes from "./koruflow.module.scss";


const KoruFlow = () => {

    const [showVilla, setVillaPlanShow] = useState(false);

    const handleClose = (e) => {
        setVillaPlanShow(false)
    }

    const handleShow = () => setVillaPlanShow(true);





    const [showVilla2, setVillaPlanShow2] = useState(false);

    const handleClose2 = (e) => {
        setVillaPlanShow2(false)
    }

    const handleShow2 = () => setVillaPlanShow2(true);







    const [showVilla3, setVillaPlanShow3] = useState(false);

    const handleClose3 = (e) => {
        setVillaPlanShow3(false)
    }

    const handleShow3 = () => setVillaPlanShow3(true);




    const [showVilla4, setVillaPlanShow4] = useState(false);

    const handleClose4 = (e) => {
        setVillaPlanShow4(false)
    }

    const handleShow4 = () => setVillaPlanShow4(true);
    return (
        <>
            <VillaPlan
                title="SEDİR VİLLALARI"
                text="Her adımınızı doğayla buluşturan dubleks "
                hero={koruVilla[0].img}
                alt={koruVilla[0].alt}
                planUp={PlanSets.sedirup}
                planYard={PlanSets.sediryard}
                onClick={handleShow}
            />
            <Modal
                show={showVilla}
                onHide={handleClose}
                close
                size={'x0'}
                backdrop={true}
                backdropClassName={classes.backDrop}
            >
                <Modal.Header closeButton></Modal.Header>
                <img src={map} alt="map" />
            </Modal>


            <VillaPlan
                title="SÖĞÜT VİLLALARI"
                text="Huzurlu doğanın bir parçası dubleks "
                hero={koruVilla[1].img}
                alt={koruVilla[1].alt}
                planUp={PlanSets.sogutup}
                planYard={PlanSets.sogutyard}
                onClick={handleShow2}
            />
            <Modal
                show={showVilla2}
                onHide={handleClose2}
                close
                size={'x0'}
                backdrop={true}
                backdropClassName={classes.backDrop}
            >
                <Modal.Header closeButton></Modal.Header>
                <img src={map} alt="map" />
            </Modal>



            <VillaPlan
                title="ARDIÇ VİLLALARI"
                text="Konforu doğayla bir arada yaşayacağınız dubleks "
                hero={koruVilla[2].img}
                alt={koruVilla[2].alt}
                planUp={PlanSets.ardicup}
                planYard={PlanSets.ardicyard}
                onClick={handleShow3}
            />
            <Modal
                show={showVilla3}
                onHide={handleClose3}
                close
                size={'x0'}
                backdrop={true}
                backdropClassName={classes.backDrop}
            >
                <Modal.Header closeButton></Modal.Header>
                <img src={map} alt="map" />
            </Modal>


            <VillaPlan
                title="AKASYA VİLLALARI"
                text="Doğayı ayaklarınızın altına seren "
                hero={koruVilla[3].img}
                alt={koruVilla[3].alt}
                planUp={PlanSets.akasyaup}
                planYard={PlanSets.akasyayard}
                onClick={handleShow4}
            />
            <Modal
                show={showVilla4}
                onHide={handleClose4}
                close
                size={'x0'}
                backdrop={true}
                backdropClassName={classes.backDrop}
            >
                <Modal.Header closeButton></Modal.Header>
                <img src={map} alt="map" />
            </Modal>
        </>
    )
}

export default KoruFlow;