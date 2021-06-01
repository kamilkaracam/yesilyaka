import React from 'react';

//import components in project
import Layout from "../../components/Layout/Layout";
import KoruFlow from "../../components/YesilyakaComponents/VillaComponents/Koru/KoruFlow";
import KoruHero from "../../components/YesilyakaComponents/VillaComponents/Koru/KoruHero";
import Header from "../../components/Layout/Header/Header";

//import images
import logo from '../../assets/images/Koru/korulogo.png';

const VillaKoru = () => {

    return(

       <>
           <Header logo={logo} />
           <Layout>
               <KoruFlow/>
           </Layout>
       </>
    )
}

export default VillaKoru;