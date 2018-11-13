import React, { Component, createRef } from "react";
import cn from "classnames";
import styles from "./NewsletterForm.module.scss";
import { H2, Body3 } from "src/ui/components/Typography";
import  SubmitArrow from "src/ui/components/SubmitArrow";
import { validateEmail } from "src/utility/helpers/validateEmail";

const noop = () => { };

class NewsletterForm extends Component {
  constructor(props) {
    super(props);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.inputRef = createRef();
    this.state = {
      isSubmitted: false,
      showError: false,
    };
  }

  handleFocus() {
    this.inputRef.current.focus()
  }

  async handleSubmit(event, onSubmit) {
    const { isSubmitted } = this.state;
    const value = this.inputRef.current.value

    event.preventDefault();

    const isValidEmail = validateEmail(value);

    const fail = () => {
      this.setState({
        showError: true,
      });
    }

    if (!isValidEmail) {
      return fail();
    }

    const rawResponse = await fetch('https://old.ibf.is/newsletter/signup-api', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: value })
    });
    const { success } = await rawResponse.json();

    if (!success) {
      fail()
    }

    this.setState(
      {
        isSubmitted: !isSubmitted,
      },
      () => onSubmit()
    );
  }

  render() {
    const { placeholder, onSubmit = noop, inHero } = this.props;
    const { isSubmitted, showError } = this.state;

    return isSubmitted ? (
      <div className={styles.thanks}>Thank you for joining our newsletter.</div>
    ) : (
        <>
          <form
            onSubmit={event => this.handleSubmit(event, onSubmit)}
            className={cn(styles.root, inHero && styles.inHero)}
          >
            <div className={cn(styles.inputWrap, showError && styles.error)} onClick={this.handleFocus}>
              <input ref={this.inputRef} className={styles.input} placeholder={placeholder} />
            </div>
            <button type="button" className={styles.submit} type="submit">
              <H2 className={styles.submitText}>Join</H2>
              <SubmitArrow className={styles.submitArrow} />
            </button>
          </form>
          <Body3 className={styles.fineprint} light bottom="large">
            Monthly updates and news, never spam
        </Body3>
        </>
      );
  }
}

export default NewsletterForm;
