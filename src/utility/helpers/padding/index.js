import PropTypes from "prop-types";
import classNames from "classnames";
import "./styles.scss";

const classMap = {
  top: {
    huge: "u-paddingTopHuge",
    xlarge: "u-paddingTopXLarge",
    large: "u-paddingTopLarge",
    medium: "u-paddingTopMedium",
    small: "u-paddingTopSmall",
    xsmall: "u-paddingTopXSmall",
  },
  bottom: {
    huge: "u-paddingBottomHuge",
    xlarge: "u-paddingBottomXLarge",
    large: "u-paddingBottomLarge",
    medium: "u-paddingBottomMedium",
    small: "u-paddingBottomSmall",
    xsmall: "u-paddingBottomXSmall",
  },
};

const padding = (top, bottom) => {
  return classNames(
    top && classMap.top[top],
    bottom && classMap.bottom[bottom]
  );
};

padding.propTypes = {
  top: PropTypes.oneOf([
    "huge",
    "xlarge",
    "large",
    "medium",
    "small",
    "xsmall",
  ]),
  bottom: PropTypes.oneOf([
    "huge",
    "xlarge",
    "large",
    "medium",
    "small",
    "xsmall",
  ]),
};

export default padding;
