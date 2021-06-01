import React from 'react';

//import components in project
import Layout from "../../components/Layout/Layout";
import YesilkayaKoruHero from "../../components/YesilyakaComponents/Index/Koru";
import logo from "../../assets/images/Koru/korulogo.png";
import Header from "../../components/Layout/Header/Header";


const Index = () => {
    return(
        <>
        <Header logo={logo}/>
        <Layout>
            <YesilkayaKoruHero/>
        </Layout>
        </>
    )
}

export default Index;