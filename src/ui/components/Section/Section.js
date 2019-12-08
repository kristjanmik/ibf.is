import React from "react";
import cn from "classnames";
import { Parallax } from "react-scroll-parallax";
import styles from "./Section.module.scss";
import padding from "src/utility/helpers/padding";
import SectionLegend from "./components/SectionLegend";
import SectionFooter from "./components/SectionFooter";

const Section = ({
  children,
  top = "xlarge",
  bottom = "xlarge",
  colored,
  backgroundText,
  id,
  number,
  legendText,
  legendTextColor,
  footerText,
  footerTextColor,
  footerUrl,
}) => (
  <section
    className={cn(
      styles.root,
      styles[id],
      padding(top, bottom),
      colored && styles.colored
    )}
    id={id}
  >
    <SectionLegend
      number={number}
      text={legendText}
      textColor={legendTextColor}
    />
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
    <SectionFooter
      text={footerText}
      textColor={footerTextColor}
      url={footerUrl}
    />
  </section>
);

export default Section;
