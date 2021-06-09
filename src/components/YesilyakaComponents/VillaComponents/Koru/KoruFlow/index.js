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

    const [show, setShow] = useState(false);

    const handleClose = (e) => {
        setShow(false)
    }

    const handleShow = () => setShow(true);

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
                show={show}
                onHide={handleClose}
                close
                size={'x1'}
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
            />
            <VillaPlan
                title="ARDIÇ VİLLALARI"
                text="Konforu doğayla bir arada yaşayacağınız dubleks "
                hero={koruVilla[2].img}
                alt={koruVilla[2].alt}
                planUp={PlanSets.ardicup}
                planYard={PlanSets.ardicyard}
            />
            <VillaPlan
                title="AKASYA VİLLALARI"
                text="Doğayı ayaklarınızın altına seren "
                hero={koruVilla[3].img}
                alt={koruVilla[3].alt}
                planUp={PlanSets.akasyaup}
                planYard={PlanSets.akasyayard}
            />
        </>
    )
}

export default KoruFlow;