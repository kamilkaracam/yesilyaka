import React from 'react';

//import components in project
import Layout from "../../components/Layout/Layout";
import VaziyetSu from "../../components/YesilyakaComponents/VaziyetComponents/Su";
import Header from "../../components/Layout/Header/Header";
import logo from "../../assets/images/Su/sulogo.png";

const PositionSu = () => {
    return(
        <>
            <Header logo={logo}/>
            <Layout>
                <VaziyetSu/>
            </Layout>
        </>
    )
}

export default PositionSu;