import React from "react"
import styled from "styled-components"
import { navigate } from "gatsby-link"

import { styles, Button } from "../../utils/"

const FormWrapper = styled.form`
  color: ${styles.colors.mainLight};
  display: flex;
  flex-direction: column;
  margin: 3em auto;
  height: 80vh;
  background-color: rgba(33, 33, 33, 0.7);
  padding: 1em 3em 2em;
  border-radius: 0.2rem;
  position: relative;

  p {
    font-style: italic;
  }

  input,
  textarea,
  button {
    padding: 1rem;
    margin: 0.4rem;
    border: none;
    outline: none;
  }

  input,
  textarea {
    background: rgba(223, 226, 226, 0.6);
    color: ${styles.colors.mainLight};
    font-size: 1.1rem;
    font-weight: 300;
    ::placeholder {
      color: rgba(80, 80, 80, 0.7);
      font-size: 1.1rem;
      @media (max-width: 768px) {
        font-size: 0.9rem;
      }
    }
  }
  button {
    cursor: pointer;
    text-align: center;
    border: none;
  }
  textarea {
    height: 100%;
  }

  .error {
    display: block;
    position: absolute;
    top: -2.7rem;
    left: 0;
    right: 0;
    text-align: center;
    font-size: 1.3rem;
    padding: 0.2rem;
    background: #b00020;
    color: ${styles.colors.mainLight};

    @media (max-width: 768px) {
      top: -2.5rem;
      font-size: 1.2rem;
    }
  }
`

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

class Form extends React.Component {
  state = {}
  handleSubmit = e => {
    const { name, email, message } = this.state

    e.preventDefault()
    const form = e.target
    if (!name || !email || !message) {
      this.setState({ error: "Please fill out the form." })
      return
    }
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => console.log(error))
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  render() {
    const { error } = this.state
    return (
      <>
        <FormWrapper
          name="contact"
          method="post"
          action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          {error ? (
            <p className="error" role="alert">
              {error}
            </p>
          ) : null}
          <h2>{this.props.title}</h2>
          <p>{this.props.subtitle}</p>
          <input type="hidden" name="form-name" value="contact" />
          <input
            aria-label="name"
            name="name"
            placeholder="Name*"
            type="text"
            onChange={this.handleChange}
          />
          <input
            aria-label="email"
            name="email"
            placeholder="Email*"
            type="email"
            onChange={this.handleChange}
          />
          <input
            aria-label="phone"
            name="phone"
            placeholder="Phone Number"
            type="text"
            onChange={this.handleChange}
          />
          <textarea
            aria-label="message"
            name="message"
            minLength="10"
            maxLength="200"
            placeholder="Message*"
            onChange={this.handleChange}
          />
          <Button type="submit">Send</Button>
        </FormWrapper>
      </>
    )
  }
}

export default Form
