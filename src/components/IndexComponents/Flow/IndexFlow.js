import React from 'react';

//import components in project
import IndexContent from "./IndexContent";
import IndexConcept from "./IndexConcept";
import IndexNature from "./IndexNature";
import IndexNews from "./IndexNews";
import IndexContact from "./IndexContact";
import BottomText from "./IndexBottomText";

const IndexFlow = () => {
    return(
        <>
            <IndexContent/>
            <IndexConcept/>
            <IndexNature/>
            <IndexNews/>
            <IndexContact/>
            <BottomText/>
        </>
    )
}

export default IndexFlow;