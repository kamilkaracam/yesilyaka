import React from 'react'

//import components in project
import Layout from "../../components/Layout/Layout";
import VaziyetKoru from "../../components/YesilyakaComponents/VaziyetComponents/Koru";
import logo from '../../assets/images/Koru/korulogo.png';
import Header from "../../components/Layout/Header/Header";

const PositionKoru = () => {
    return(
        <>
        <Header logo={logo}/>
        <Layout>
            <VaziyetKoru/>
        </Layout>
        </>
            )
}

export default PositionKoru;