import React from 'react';

//import Gatsby
import {Link} from "gatsby";

//import npm packages
import {Modal,Nav, NavDropdown} from "react-bootstrap";

//import styles
import "./mobilemenu.scss";
import '../../assets/styles/helper.scss';

const MobileMenu = (props) => {
    return(
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            backdropClassName="modal-backdrop"
            contentClassName="modal-content"
            centered
        >
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
                <Nav as="nav">
                    <NavDropdown title="Yeşilyaka Koru" id="basic-nav-dropdown" className="">
                        <NavDropdown.Item href="#action/3.1">
                            <Link to={"/yesilyakakoru"} activeStyle={{color:'#7BC5A6',fontWeight:'700'}} >Yeşilyaka Koru</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item  href="#action/3.2">
                            <Link
                                activeStyle={{color:'black',fontWeight:'700'}}
                                to={"/yesilyakakoru/villa"}
                            >Villa Planları
                            </Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item  href="#action/3.3">
                            <Link activeStyle={{color:'black',fontWeight:'700'}} to={"/yesilyakakoru/galeri"}>Galeri</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">
                            <Link to={"/yesilyakakoru/vaziyet"} activeStyle={{color:'black',fontWeight:'700'}} >Vaziyet Planı</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.1">
                            <Link to={"/yesilyakakoru/sosyal"} activeStyle={{color:'black',fontWeight:'700'}} >Sosyal</Link>
                        </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Yeşilyaka Su" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">
                            <Link to={"/yesilyakasu"} activeStyle={{color:'black',fontWeight:'700'}} >Yeşilyaka Su</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            <Link to={"/yesilyakasu/villa"} activeStyle={{color:'black',fontWeight:'700'}} >Villa Planları</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">
                            <Link activeStyle={{color:'black',fontWeight:'700'}}  to={"/yesilyakasu/galeri"}>Galeri</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">
                            <Link to={"/yesilyakasu/vaziyet"} activeStyle={{color:'black',fontWeight:'700'}} >Vaziyet Planı</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.5">
                            <Link to={"/yesilyakasu/sosyal"} activeStyle={{color:'black',fontWeight:'700'}} >Sosyal</Link>
                        </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#pricing">
                        <Link to={'/kurumsal'} activeStyle={{color:'black',fontWeight:'700'}} >Kurumsal</Link>
                    </Nav.Link>
                    <Nav.Link href="#pricing">
                        <Link to={'/e-katalog'} activeStyle={{color:'black',fontWeight:'700'}} >E-Katalog</Link>
                    </Nav.Link>
                    <Nav.Link href="#pricing">
                        <Link to={'/iletisim'} activeStyle={{color:'black',fontWeight:'700'}} >İletişim</Link>
                    </Nav.Link>
                </Nav>
            </Modal.Body>
        </Modal>
    )
}

export default MobileMenu;