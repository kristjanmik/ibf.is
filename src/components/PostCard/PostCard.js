import React from "react";
import PropTypes from "prop-types";
import styles from "./PostCard.module.scss";
import { H2, Body3 } from "../Typography";
import cn from "classnames";

const PostCard = ({ title, text, imageUrl, url, isFeatured }) => (
  <div className={cn(styles.root, { [styles.featured]: isFeatured })}>
    <H2 bottom="small">{title}</H2>
    <Body3 light>{text}</Body3>
  </div>
);

PostCard.propTypes = {};

export default PostCard;
