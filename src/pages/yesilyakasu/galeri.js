import React from 'react';

//import components in project
import Layout from "../../components/Layout/Layout";
import SuGalleryComponent from "../../components/YesilyakaComponents/GalleryComponents/Su";
import Header from "../../components/Layout/Header/Header";
import logo from "../../assets/images/Su/sulogo.png";

const GallerySu = () => {
    return(
        <>
            <Header logo={logo} />
            <Layout>
                <SuGalleryComponent/>
            </Layout>
        </>

    )
}

export default GallerySu;