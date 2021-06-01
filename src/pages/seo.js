import React from 'react';
import {Helmet
} from "react-helmet";

const  Seo = () => {

    return(
        <Helmet>
            <meta charSet="utf-8" />
            <title>Yeşilyaka Mesa & NUROL Yapı</title>
            <link rel="canonical" href="https://yesilyaka.com" />
            <meta name="description" content="Yeşilyaka Yapı Huzur İstanbul"/>
                <meta name="keyword" content="DOĞA,YEŞİL,İSTANBUL,YAPI,VİLLA,SİTE,HUZUR"/>
                <meta name="author" content="GrayCat Studio" />
        </Helmet>
    )

}

export default Seo;
