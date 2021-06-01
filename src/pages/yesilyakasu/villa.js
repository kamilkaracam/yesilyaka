import React from 'react';

//import components in project
import Layout from "../../components/Layout/Layout";
import SuHero from "../../components/YesilyakaComponents/VillaComponents/Su/SuHero";
import SuFlow from "../../components/YesilyakaComponents/VillaComponents/Su/SuFlow";
import Header from "../../components/Layout/Header/Header";
import logo from "../../assets/images/Su/sulogo.png";

const VillaSu = () => {
    return(
        <>
            <Header logo={logo}/>
            <Layout>
                <SuFlow/>
            </Layout>
        </>
    )
}

export default VillaSu;