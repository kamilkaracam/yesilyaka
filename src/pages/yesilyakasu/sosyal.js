import React from 'react';

//import components in project
import Layout from "../../components/Layout/Layout";
import SocialSuFlow from "../../components/YesilyakaComponents/SocialComponents/Su";
import Header from "../../components/Layout/Header/Header";
import logo from "../../assets/images/Su/sulogo.png";

const SocialSu = () => {
    return(
        <>
            <Header logo={logo}/>
            <Layout>
                <SocialSuFlow/>
            </Layout>
        </>
    )
}

export default SocialSu;