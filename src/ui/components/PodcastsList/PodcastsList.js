import React, { useContext } from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

import TranslationContext from "src/utility/TranslationContext";

import styles from "./PodcastsList.module.scss";

const Podcasts = ({ data = [] }) => {
  const lang = useContext(TranslationContext);

  return (
    <div className={styles.container}>
      {data.map(item => (
        <Link
          className={styles.item}
          to={`/${lang}/podcast/${item.uid}`}
          key={item.uid}
        >
          <div className={styles.itemInner}>
            <img src={item.image} className={styles.image} alt={item.name} />
          </div>
        </Link>
      ))}
    </div>
  );
};

Podcasts.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Podcasts;
