import React, { useContext } from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

import TranslationContext from "src/utility/TranslationContext";

import Arrow from "src/ui/components/Arrow";
import { H3 } from "src/ui/components/Typography";

import styles from "./EducationList.module.scss";

const EducationList = ({ data = [] }) => {
  const lang = useContext(TranslationContext);

  return (
    <div className={styles.container}>
      {data.map(item => (
        <Link
          className={styles.item}
          to={`/${lang}/education/${item.uid}`}
          key={item.uid}
        >
          <div className={styles.itemInner}>
            <img src={item.image} className={styles.image} alt={item.title} />
            <div className={styles.box}>
              <H3 className={styles.title}>{item.title}</H3>
            </div>
            <Arrow className={styles.arrow} />
          </div>
        </Link>
      ))}
    </div>
  );
};

EducationList.propTypes = {
  data: PropTypes.array.isRequired,
  date: PropTypes.string,
};

export default EducationList;
