import React from "react";
import scrollToElement from "scroll-to-element";
import styles from "./Menu.module.scss";
import { Body1 } from "../Typography";

const ScrollLink = ({to, children}) => (
  <a href="#" className={styles.link} onClick={() => scrollToElement(to, {
    offset: 0,
    duration: 800,
    ease: 'inOutQuad'
})}>
    {children}
  </a>
);

const Logo = () => (
  <svg
    className={styles.logo}
    viewBox="0 0 113 113"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="#FFF">
      <path d="M81.486 4.251l27.263 27.278v77.22H4.251V4.251h77.235zM83.246 0H0v113h113V29.753L83.247 0z" />
      <path d="M37.188 86l-6.175 2.12L26 102h4.551l1.018-3.345h5.837L38.438 102H43l-5.812-16zm-4.599 9.321l1.893-6.208 1.907 6.208h-3.8zM60.582 85.639h-.457v2.341h-.634v-2.341H59V85h1.582v.639zm1.852.5L62.066 88h-.31l-.369-1.877V88h-.556v-2.995h.682l.4 1.997.442-1.997H63V88h-.556l-.01-1.862zM16.991 56.982h-2.104v6.008H11V46h6.346c1.913 0 3.408.446 4.483 1.338 1.076.892 1.615 2.158 1.618 3.8a5.75 5.75 0 0 1-.683 2.938 4.892 4.892 0 0 1-2.13 1.89L24 62.825V63h-4.162l-2.847-6.018zm-2.104-3.144h2.459a2.143 2.143 0 0 0 1.657-.611c.749-1.011.749-2.43 0-3.44a2.115 2.115 0 0 0-1.657-.626h-2.459v4.677zM37.406 59.823h-5.837L30.55 63H26l6.466-17h3.996L43 63h-4.577l-1.017-3.177zm-4.817-3.163h3.8l-1.907-5.896-1.893 5.896zM55.3 56.227h-6.974V63H44V46h12v3.146h-7.674v3.91h6.973zM16.574 66l3.928 11.827L24.415 66H30v17h-4.254v-3.97l.41-8.126L21.901 83h-2.804l-4.264-12.107.409 8.137V83H11V66zM37.993 73.378L41.307 66H46l-5.804 10.894V83H35.79v-6.106L30 66h4.663zM62 83h-4.313l-6.36-10.58V83H47V66h4.327l6.346 10.58V66H62zM78 69.163h-5.386V83h-4.327V69.163H63V66h15zM88.4 79.826h-5.833L81.547 83H77l6.475-17h3.992L94 83h-4.573L88.4 79.826zm-4.816-3.166h3.796l-1.902-5.896-1.894 5.896zM16.991 95.98h-2.104v6.01H11V85h6.346c1.913 0 3.408.447 4.483 1.341 1.076.894 1.615 2.157 1.618 3.789a5.76 5.76 0 0 1-.683 2.937 4.907 4.907 0 0 1-2.13 1.886L24 101.822V102h-4.162l-2.847-6.02zm-2.104-3.144h2.459a2.146 2.146 0 0 0 1.657-.614c.749-1.01.749-2.43 0-3.44a2.128 2.128 0 0 0-1.657-.625h-2.459v4.68zM45.07 101.986v-7.392H43V92.34h2.07V85h5.71a8.728 8.728 0 0 1 4.228 1.021 7.325 7.325 0 0 1 2.916 2.887 8.394 8.394 0 0 1 1.075 4.173v.783a8.48 8.48 0 0 1-1.028 4.193 7.335 7.335 0 0 1-2.897 2.894 8.455 8.455 0 0 1-4.17 1.049l-5.834-.014zm6.819-7.392h-2.552v4.24h1.487a3.381 3.381 0 0 0 2.825-1.259c.656-.834.984-2.077.984-3.729v-.737c0-1.64-.328-2.88-.984-3.712a3.455 3.455 0 0 0-2.876-1.247h-1.436v4.193h2.552v2.251z" />
    </g>
  </svg>
);

const Menu = ({}) => (
  <nav className={styles.root}>
    <Logo />
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
