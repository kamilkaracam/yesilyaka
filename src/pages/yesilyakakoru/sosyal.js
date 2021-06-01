import React from 'react';

//import components in project
import Layout from "../../components/Layout/Layout";
import SocialKoruFlow from "../../components/YesilyakaComponents/SocialComponents/Koru";
import logo from "../../assets/images/Koru/korulogo.png";
import Header from "../../components/Layout/Header/Header";

const SocialKoru = () => {
    return(
        <>
        <Header logo={logo}/>
        <Layout>
            <SocialKoruFlow/>
        </Layout>
        </>
    )
}

export default SocialKoru;