import React from 'react'

//import components in project
import Layout from "../components/Layout/Layout";
import CorporateComponents from "../components/CorporateComponents";
import Header from "../components/Layout/Header/Header";
import logo from "../assets/images/logo@2x.png";

const Corporate = () => {
    return(
        <>
            <Header logo={logo}/>
            <Layout>
                <CorporateComponents/>
            </Layout>
        </>
    )
}

export default Corporate;