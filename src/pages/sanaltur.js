import React, { useState, useEffect } from 'react';
import Header from "../components/Layout/Header/Header";
import Layout from "../components/Layout/Layout";
import logo from '../assets/images/logo@2x.png';
import { Modal, Button, Card, Container, Row, Col } from "react-bootstrap";
import '../assets/styles/helper.scss';
import yesilyakasu from '../assets/images/Su/villa/irmak.png';
import yesilyakasunehir from '../assets/images/Su/villa/nehir.png';
import Title from "../atoms/Title";



const SanalTur = () => {
    // set state
    const [show, setShow] = useState(false);
    const [showNehir, setShowNehir] = useState(false);

    // functions
    const handleClose = () => setShow(false);
    const handleCloseNehir = () => setShowNehir(false);
    const handleShow = () => setShow(true);
    const handleShowNehir = () => setShowNehir(true);

    return (
        <>
            <Header logo={logo} />
            <Layout>
                <Container className="h-75 mb-5 py-5">
                    <Title title="SANAL TUR" subtitle=""></Title>
                    <Row className="d-flex justify-content-center">
                        <Col sm={12} md={4} className="d-flex justify-content-center mb-3">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={yesilyakasu} />
                                <Card.Body>
                                    <Card.Title>Yeşilyaka Su Irmak</Card.Title>
                                    <Button variant="primary" onClick={handleShow}>
                                        Sanal Tura Katıl
                            </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} sm={12} className="d-flex justify-content-center">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={yesilyakasunehir} />
                                <Card.Body>
                                    <Card.Title>Yeşilyaka Su Nehir</Card.Title>
                                    <Button variant="primary" onClick={handleShowNehir}>
                                        Sanal Tura Katıl
                                </Button>
                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>


                </Container>
                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    backdropClassName="backdropVirtual"
                    keyboard={false}
                    contentClassName="virtualView"
                    size={'xl'}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Yeşilyaka Su Irmak Villaları</Modal.Title>
                    </Modal.Header>
                    <iframe src="/virtual/Yesilyaka_Su_Nehir_web/index.html" name="panorama" width="100%"
                        height="600px" scrolling="no" marginHeight="0" marginWidth="0" frameBorder="0"
                        style={{ float: 'left', marginLeft: '0px' }} allowFullScreen={true}></iframe>
                </Modal>
                <Modal
                    show={showNehir}
                    onHide={handleCloseNehir}
                    backdrop="static"
                    backdropClassName="backdropVirtual"
                    keyboard={false}
                    contentClassName="virtualView"
                    size={'xl'}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Yeşilyaka Su Nehir Villaları</Modal.Title>
                    </Modal.Header>
                    <iframe src="/virtual/Yesilyaka_Su_Nehir_web/index.html" name="panorama" width="100%"
                        height="600px" scrolling="no" marginHeight="0" marginWidth="0" frameBorder="0"
                        style={{ float: 'left', marginLeft: '0px' }} allowFullScreen={true}></iframe>
                </Modal>

            </Layout>

        </>
    )
}
export default SanalTur;





