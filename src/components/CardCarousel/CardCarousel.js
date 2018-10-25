import React from "react";
import PropTypes from "prop-types";
import styles from "./CardCarousel.module.scss";
import SimpleSlider from "../SimpleSlider";

// Doesn't do much of anything right now. Only layout.
// Should be turned into an interaction carousel component in the future.

const CardCarousel = ({ children }) => <SimpleSlider>{children}</SimpleSlider>;

CardCarousel.propTypes = {};

export default CardCarousel;
