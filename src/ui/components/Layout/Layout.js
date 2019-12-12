import React, { useContext } from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import "./global.scss";
import styles from "./Layout.module.scss";
import { ParallaxProvider } from "react-scroll-parallax";
import Footer from "../Footer";
import TranslationContext from "src/utility/TranslationContext";
import { withLang } from "src/utility/Translation";

const Layout = ({ children }) => {
  const lang = useContext(TranslationContext);
  const T = withLang(lang);
  return (
    <ParallaxProvider>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="twitter:site" content="@rafmyntarad" />
        <meta name="twitter:creator" content="@rafmyntarad" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:site_name" content={T("foundationName")} />
        <title>{T("foundationName")}</title>
        <meta property="og:title" content={T("foundationName")} />
        <meta
          property="og:description"
          content={T("foundationDescriptionText")}
        />
        <meta name="description" content={T("foundationDescriptionText")} />
        <meta name="twitter:image:alt" content={T("foundationName")} />
        {/* @TODO add social image for website */}
        {/* <meta property="og:image" content="..." />
        <meta name="image" content="..." />
        <meta property="og:url" content="..." />
        <meta property="og:type" content="article" /> */}
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600"
          rel="stylesheet"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        >
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Helmet>
      <div className={styles.root}>{children}</div>
      <Footer />
    </ParallaxProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
