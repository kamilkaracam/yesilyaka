import React from 'react';

//import components in project
import Layout from "../../components/Layout/Layout";
import YesilkayaSuHero from "../../components/YesilyakaComponents/Index/Su";
import Header from "../../components/Layout/Header/Header";
import logo from "../../assets/images/Su/sulogo.png";

const Index = () => {
    return(
        <>
            <Header logo={logo} />
            <Layout>
                <YesilkayaSuHero/>
            </Layout>
        </>
    )
}
export default Index;



