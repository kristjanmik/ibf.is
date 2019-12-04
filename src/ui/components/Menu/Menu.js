import React from "react";
import cn from "classnames";
import { Link } from "gatsby";
import styles from "./Menu.module.scss";
import { Body1 } from "../Typography";
import darkLogo from "src/images/logo-dark.svg";
import whiteLogo from "src/images/logo.svg";
import ScrollLink from "src/ui/components/ScrollLink";

const Menu = ({ inHero }) => (
  <nav className={cn(styles.root, inHero && styles.inHero)}>
    <Link to="/">
      <img
        className={styles.logo}
        src={inHero ? whiteLogo : darkLogo}
        alt="Icelandic Blockchain Foundation Logo"
      />
    </Link>
    <div className={styles.links}>
      <ScrollLink className={styles.link} to="/#about">
        <Body1>About</Body1>
      </ScrollLink>
      <ScrollLink className={styles.link} to="/#events">
        <Body1>Events</Body1>
      </ScrollLink>
      <ScrollLink className={styles.link} to="/#posts">
        <Body1>Posts</Body1>
      </ScrollLink>
      <ScrollLink className={styles.link} to="/#working-groups">
        <Body1>Working Groups</Body1>
      </ScrollLink>
      <ScrollLink className={styles.link} to="/#newsletter">
        <Body1>Newsletter</Body1>
      </ScrollLink>
    </div>
  </nav>
);

export default Menu;
