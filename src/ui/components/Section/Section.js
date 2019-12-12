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
  backgroundTextFontSize = "large",
  id,
  number,
  legendText,
  legendTextColor,
  footerText,
  footerTextColor,
  footerUrl,
}) => {
  console.log("backgroundTextFontSize", backgroundTextFontSize);
  return (
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
          x={["50px", "0px"]}
          tagInner="figure"
          className={cn(
            styles.backgroundText,
            styles[`${backgroundTextFontSize}Font`],
            top === "xsmall" ? styles.xsmall : null
          )}
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
};

export default Section;
