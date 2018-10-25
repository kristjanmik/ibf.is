import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import "./global.scss";
import styles from "./Layout.module.scss";
import { ParallaxProvider } from "react-scroll-parallax";
import Footer from "../Footer";

const Layout = ({ children }) => (
  <ParallaxProvider>
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        type="text/css"
        charset="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
    </Helmet>
    <div className={styles.root}>{children}</div>
    <Footer />
  </ParallaxProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
