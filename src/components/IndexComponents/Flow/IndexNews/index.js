import React,{useEffect} from 'react';

//import npm packages
import AOS from 'aos';

//import images
import {indexFlow} from "../../../../helper/IndexData";

//import styles
import * as classes from "./indexnews.module.scss";
import SmallTitle from "../../../../atoms/SmallTitle";
import NewsSwiper from "../../../../atoms/IndexAtoms/newsSwiper";

const IndexNews = () => {

    useEffect(()=> {
        AOS.init()
        AOS.refresh()

    },[])


    return(
        <>
            <NewsSwiper/>
        </>
    )
}
export default IndexNews;