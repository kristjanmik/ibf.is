import React, { useContext } from "react";
import cn from "classnames";
import { Link } from "gatsby";
import styles from "./Menu.module.scss";
import { Body1 } from "../Typography";
import darkLogo from "src/images/logo-dark.svg";
import whiteLogo from "src/images/logo.svg";
import ScrollLink from "src/ui/components/ScrollLink";
import TranslationContext from "src/utility/TranslationContext";
import { withLang } from "src/utility/Translation";

const Menu = ({ inHero }) => {
  const lang = useContext(TranslationContext);
  const T = withLang(lang);
  const langLink = lang === "is" ? "/is" : "/en-us";
  const langLinkReverse = lang === "is" ? "/en-us" : "/is";
  const langLinkText = lang === "is" ? "English 🇺🇸" : "Íslenska 🇮🇸";

  return (
    <nav className={cn(styles.root, inHero && styles.inHero)}>
      <Link to={langLink}>
        <img
          className={styles.logo}
          src={inHero ? whiteLogo : darkLogo}
          alt={`${T("foundationName")} ${T("logo")}`}
        />
      </Link>
      <div className={styles.links}>
        <ScrollLink className={styles.link} to={`${langLink}#about`}>
          <Body1>{T("about")}</Body1>
        </ScrollLink>
        <ScrollLink className={styles.link} to={`${langLink}#events`}>
          <Body1>{T("events")}</Body1>
        </ScrollLink>
        <ScrollLink className={styles.link} to={`${langLink}#posts`}>
          <Body1>{T("posts")}</Body1>
        </ScrollLink>
        <ScrollLink className={styles.link} to={`${langLink}#working-groups`}>
          <Body1>{T("workingGroupsMenu")}</Body1>
        </ScrollLink>
        <ScrollLink className={styles.link} to={`${langLink}#newsletter`}>
          <Body1>{T("newsletter")}</Body1>
        </ScrollLink>
        <ScrollLink className={styles.link} to={langLinkReverse}>
          <Body1>{langLinkText}</Body1>
        </ScrollLink>
      </div>
    </nav>
  );
};

export default Menu;
