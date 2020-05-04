import React, { Component, Children } from "react";
import Slick from "react-slick";
import styles from "./Slider.module.scss";

const Paging = ({ totalSlides, activeIndex }) => {
  const WIDTH = 260;
  const progressWidth = WIDTH / totalSlides;
  return (
    <div className={styles.paging}>
      <div className={styles.pagingBackground}>
        <span
          className={styles.pagingProgress}
          style={{
            width: progressWidth,
            transform: `translateX(${100 * activeIndex}%)`,
          }}
        />
      </div>
    </div>
  );
};

const maxSlidesToShow = (max, actual) => {
  if (actual < max) return actual;
  return max;
};

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      totalSlides: Children.count(props.children),
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(oldIndex, newIndex) {
    this.setState({
      activeIndex: newIndex,
    });
  }

  render() {
    let itemCount = 4;
    if (this.props.children) itemCount = this.props.children.length;

    const DEFAULT_SETTINGS = {
      infinite: true,
      speed: 300,
      slidesToShow: maxSlidesToShow(4, itemCount),
      slidesToScroll: 1,
      dots: false,
      beforeChange: this.handleChange,
      variableWidth: true,
      arrows: true,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: maxSlidesToShow(1.25, itemCount),
            infinite: false,
            arrows: false,
          },
        },
        {
          breakpoint: 960,
          settings: { slidesToShow: maxSlidesToShow(2, itemCount) },
        },
        {
          breakpoint: 1300,
          settings: { slidesToShow: maxSlidesToShow(3, itemCount) },
        },
        {
          breakpoint: 1800,
          settings: { slidesToShow: maxSlidesToShow(4, itemCount) },
        },
      ],
    };
    const { settings = DEFAULT_SETTINGS } = this.props;
    const { totalSlides, activeIndex } = this.state;
    return (
      <>
        <Slick {...settings}>{this.props.children}</Slick>
        <Paging totalSlides={totalSlides} activeIndex={activeIndex} />
      </>
    );
  }
}

export default Slider;
