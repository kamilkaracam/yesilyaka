import React from "react";

//import components in project
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import CallButton from "../../atoms/CallButton";

const Layout = (props) => {
    return (
        <>
            <CallButton/>
            {props.children}
            <Footer/>
        </>
    )
}

export default Layout;