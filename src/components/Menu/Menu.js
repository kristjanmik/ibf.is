import React from "react";
import scrollToElement from "scroll-to-element";
import styles from "./Menu.module.scss";
import { Body1 } from "../Typography";
import logo from "../../images/logo.svg";

const ScrollLink = ({ to, children }) => (
  <a
    href="#"
    className={styles.link}
    onClick={() =>
      scrollToElement(to, {
        offset: 0,
        duration: 800,
        ease: "inOutQuad",
      })
    }
  >
    {children}
  </a>
);

const Menu = ({}) => (
  <nav className={styles.root}>
    <img className={styles.logo} src={logo} />
    <div className={styles.links}>
      <ScrollLink to="#about">
        <Body1>About</Body1>
      </ScrollLink>
      <ScrollLink to="#events">
        <Body1>Events</Body1>
      </ScrollLink>
      <ScrollLink to="#posts">
        <Body1>Posts</Body1>
      </ScrollLink>
      <ScrollLink to="#working-groups">
        <Body1>Working Groups</Body1>
      </ScrollLink>
      <ScrollLink to="#newsletter">
        <Body1>Newsletter</Body1>
      </ScrollLink>
    </div>
  </nav>
);

export default Menu;
