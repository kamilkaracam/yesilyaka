import * as React from "react";

//import components in project
import Layout from "../components/Layout/Layout";
import IndexHero from "../components/IndexComponents/Hero/IndexHero";
import IndexFlow from "../components/IndexComponents/Flow/IndexFlow";
import Header from "../components/Layout/Header/Header";
import logo from "../assets/images/logo@2x.png";

/*-----import stylesheet-----*/
import "../assets/styles/main.scss";

// markup
const IndexPage = () => {
  return (
      <>
          <Header logo={logo}/>
          <Layout>
              <IndexHero/>
              <IndexFlow/>
          </Layout>
      </>
  )
}

export default IndexPage;
