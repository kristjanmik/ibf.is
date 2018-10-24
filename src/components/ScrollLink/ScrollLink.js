import React from "react";
import scrollToElement from "scroll-to-element";
import cn from 'classnames'

const ScrollLink = ({ to, children, className }) => (
  <a
    href="#"
    className={cn(className)}
    onClick={() =>
      scrollToElement(to, {
        offset: 0,
        duration: 800,
        ease: "inOutQuad",
      })
    }
  >
    {children}
  </a>
);

export default ScrollLink;
