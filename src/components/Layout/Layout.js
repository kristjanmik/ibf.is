import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import "./global.scss";
import styles from "./Layout.module.scss";

const Layout = ({ children }) => (
  <>
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600"
        rel="stylesheet"
      />
    </Helmet>
    <div className={styles.root}>{children}</div>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
