import React from 'react'

//import components in project
import Layout from "../components/Layout/Layout";
import ContactComponents from "../components/ContactComponents";
import Header from "../components/Layout/Header/Header";
import logo from "../assets/images/logo@2x.png";

const Contact = () => {
    return(
        <>
            <Header logo={logo}/>
            <Layout>
                <ContactComponents/>
            </Layout>
        </>
    )
}

export default Contact;