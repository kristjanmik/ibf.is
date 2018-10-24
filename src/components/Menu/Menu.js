import React from "react";
import styles from "./Menu.module.scss";
import { Body1 } from "../Typography";
import logo from "../../images/logo.svg";
import ScrollLink from '../ScrollLink'


const Menu = ({}) => (
  <nav className={styles.root}>
    <img className={styles.logo} src={logo} />
    <div className={styles.links}>
      <ScrollLink className={styles.link} to="#about">
        <Body1>About</Body1>
      </ScrollLink>
      <ScrollLink className={styles.link} to="#events">
        <Body1>Events</Body1>
      </ScrollLink>
      <ScrollLink className={styles.link} to="#posts">
        <Body1>Posts</Body1>
      </ScrollLink>
      <ScrollLink className={styles.link} to="#working-groups">
        <Body1>Working Groups</Body1>
      </ScrollLink>
      <ScrollLink className={styles.link} to="#newsletter">
        <Body1>Newsletter</Body1>
      </ScrollLink>
    </div>
  </nav>
);

export default Menu;
