import React from "react";
import cn from "classnames";
import { Parallax } from "react-scroll-parallax";
import styles from "./Section.module.scss";
import padding from "src/utility/helpers/padding";

const Section = ({ children, top, bottom, colored, backgroundText, id }) => (
  <section
    className={cn(styles.root, styles[id], padding(top, bottom), colored && styles.colored)}
    id={id}
  >
    {backgroundText && (
      <Parallax
        className={styles.backgroundText}
        offsetXMax="50px"
        offsetXMin="0px"
        slowerScrollRate
        tag="figure"
      >
        <span>{backgroundText}</span>
      </Parallax>
    )}
    {children}
  </section>
);

export default Section;
