import React, { Component, createRef } from "react";
import cn from "classnames";
import styles from "./RegistrationForm.module.scss";
import Button from "src/ui/components/Button";
import { validateEmail } from "src/utility/helpers/validateEmail";
import { withLang } from "src/utility/Translation";
import TranslationContext from "src/utility/TranslationContext";

const noop = () => {};

class RegistrationForm extends Component {
  static contextType = TranslationContext;
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.nameRef = createRef();
    this.emailRef = createRef();
    this.ssnRef = createRef();
    this.state = {
      isSubmitted: false,
      showError: [],
    };
  }

  handleFocus(field) {
    try {
      this[`${field}Ref`].current.focus();
    } catch (e) {
      console.error(e);
    }
  }

  async handleSubmit(event, onSubmit) {
    const { isSubmitted } = this.state;
    const name = this.nameRef.current.value;
    const email = this.emailRef.current.value;
    const ssn = this.ssnRef.current.value;

    event.preventDefault();

    const isValidEmail = validateEmail(email);

    let errors = [];

    if (!name || !ssn || !isValidEmail) {
      errors.push("name");
    }

    if (!isValidEmail) {
      errors.push("email");
    }

    if (!ssn) {
      errors.push("ssn");
    }

    if (errors.length > 0) {
      return this.setState({
        showError: errors,
      });
    }

    const rawResponse = await fetch("https://v2.ibf.is/api/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, name, ssn, language: this.context }),
    });
    const { success, error } = await rawResponse.json();

    if (!success) {
      return this.setState({
        showError: ["name", "email", "ssn"],
      });
    }

    this.setState(
      {
        isSubmitted: !isSubmitted,
      },
      () => onSubmit()
    );
  }

  render() {
    const { onSubmit = noop, inHero, onClose = noop } = this.props;
    const { isSubmitted, showError } = this.state;

    const T = withLang(this.context);

    return isSubmitted ? (
      <div className={styles.thanks}>{T("registrationThanks")}</div>
    ) : (
      <>
        <form
          onSubmit={event => this.handleSubmit(event, onSubmit)}
          className={cn(styles.root, inHero && styles.inHero)}
        >
          <img
            src={require("src/images/close.png")}
            className={styles.close}
            onClick={() => onClose()}
          />
          <div className={styles.left}>
            <div
              className={cn(
                styles.inputWrap,
                showError.indexOf("name") !== -1 && styles.error,
                styles.personIcon
              )}
              onClick={this.handleFocus.bind(this, "name")}
            >
              <input
                name="name"
                ref={this.nameRef}
                className={styles.input}
                placeholder={T("name")}
              />
            </div>

            <div
              className={cn(
                styles.inputWrap,
                showError.indexOf("email") !== -1 && styles.error,
                styles.emailIcon
              )}
              onClick={this.handleFocus.bind(this, "email")}
            >
              <input
                name="email"
                ref={this.emailRef}
                className={styles.input}
                placeholder={T("email")}
              />
            </div>

            <div
              className={cn(
                styles.inputWrap,
                showError.indexOf("ssn") !== -1 && styles.error,
                styles.ssnIcon
              )}
              onClick={this.handleFocus.bind(this, "ssn")}
            >
              <input
                name="ssn"
                ref={this.ssnRef}
                className={styles.input}
                placeholder={T("ssn")}
              />
            </div>
          </div>

          <div className={styles.right}>
            <p className={styles.policy}>{T("registrationPolicy")}</p>
            <Button>{T("registerNow")}</Button>
          </div>
        </form>
      </>
    );
  }
}

export default RegistrationForm;
