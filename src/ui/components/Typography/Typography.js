import React from "react";
import classNames from "classnames";
import padding from "src/utility/helpers/padding";
import "./styles.scss";

/* eslint-disable react/forbid-foreign-prop-types */

const createStyle = (defaultComponent, style, substyles = {}) => {
  const substyleKeys = Object.keys(substyles);

  const component = props => {
    const className = classNames(
      style,
      padding(props.top, props.bottom),
      substyleKeys.map(key => props[key] && substyles[key]),
      props.className
    );

    if (props.dangerouslySetInnerHTML) {
      return React.createElement(props.component || defaultComponent, {
        className,
        dangerouslySetInnerHTML: props.dangerouslySetInnerHTML,
      });
    } else {
      return React.createElement(
        props.component || defaultComponent,
        { className },
        props.children
      );
    }
  };

  return component;
};

export const styledDiv = component => {
  return createStyle(
    "div",
    styles[component].baseStyle,
    styles[component].styles
  );
};

const styles = {
  H1: {
    baseStyle: "t-h1",
    styles: {
      light: "t-light",
      bold: "t-bold",
      center: "t-center",
      uppercase: "t-uppercase",
    },
  },
  H2: {
    baseStyle: "t-h2",
    styles: {
      light: "t-light",
      bold: "t-bold",
      center: "t-center",
      uppercase: "t-uppercase",
    },
  },
  H3: {
    baseStyle: "t-h3",
    styles: {
      light: "t-light",
      bold: "t-bold",
      center: "t-center",
      uppercase: "t-uppercase",
    },
  },
  H4: {
    baseStyle: "t-h4",
    styles: {
      light: "t-light",
      bold: "t-bold",
      center: "t-center",
      uppercase: "t-uppercase",
    },
  },
  Body1: {
    baseStyle: "t-Body1",
    styles: {
      light: "t-light",
      center: "t-center",
      bold: "t-bold",
      uppercase: "t-uppercase",
      monospace: "t-monospace",
    },
  },
  Body2: {
    baseStyle: "t-Body2",
    styles: {
      light: "t-light",
      center: "t-center",
      bold: "t-bold",
      uppercase: "t-uppercase",
      monospace: "t-monospace",
    },
  },
  Body3: {
    baseStyle: "t-Body3",
    styles: {
      light: "t-light",
      center: "t-center",
      bold: "t-bold",
      uppercase: "t-uppercase",
      monospace: "t-monospace",
    },
  },
  Body4: {
    baseStyle: "t-Body4",
    styles: {
      uppercase: "t-uppercase",
    },
  },
};

export const H1 = createStyle(
  "h1",
  styles["H1"].baseStyle,
  styles["H1"].styles
);

export const H2 = createStyle(
  "h2",
  styles["H2"].baseStyle,
  styles["H2"].styles
);

export const H3 = createStyle(
  "h3",
  styles["H3"].baseStyle,
  styles["H3"].styles
);

export const H4 = createStyle(
  "h4",
  styles["H4"].baseStyle,
  styles["H4"].styles
);

export const Body1 = createStyle(
  "p",
  styles["Body1"].baseStyle,
  styles["Body1"].styles
);

export const Body2 = createStyle(
  "p",
  styles["Body2"].baseStyle,
  styles["Body2"].styles
);

export const Body3 = createStyle(
  "p",
  styles["Body3"].baseStyle,
  styles["Body3"].styles
);

export const Body4 = createStyle(
  "p",
  styles["Body4"].baseStyle,
  styles["Body4"].styles
);
