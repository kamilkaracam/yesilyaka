import React from 'react';

//import components in project
import Layout from "../../components/Layout/Layout";
import KoruGalleryComponent from "../../components/YesilyakaComponents/GalleryComponents/Koru";
import Header from "../../components/Layout/Header/Header";
import logo from '../../assets/images/Koru/korulogo.png';

const GalleryKoru = () => {
    return(
        <>
            <Header logo={logo}/>
            <Layout>
                <KoruGalleryComponent/>
            </Layout>
        </>
    )
}

export default GalleryKoru;