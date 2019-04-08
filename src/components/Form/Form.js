import React from "react"
import styled from "styled-components"
import { navigateTo } from "gatsby-link"

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
    ::placeholder {
      color: ${styles.colors.mainLight};
      font-size: 1.1rem;
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
`

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

class Form extends React.Component {
  state = {}
  handleSubmit = e => {
    console.log(e)
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })
      .then(() => navigateTo(form.getAttribute("action")))
      .catch(error => alert(error))
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  render() {
    return (
      <FormWrapper
        name="contact"
        method="post"
        action="/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={this.handleSubmit}
      >
        <h2>{this.props.title}</h2>
        <p>{this.props.subtitle}</p>
        <input type="hidden" name="form-name" value="contact" />
        <input
          name="name"
          placeholder="Name*"
          type="text"
          onChange={this.handleChange}
        />
        <input
          name="email"
          placeholder="Email*"
          type="email"
          onChange={this.handleChange}
        />
        <input
          name="phone"
          placeholder="Phone Number*"
          type="text"
          onChange={this.handleChange}
        />
        <textarea
          name="message"
          placeholder="Message*"
          onChange={this.handleChange}
        />
        <Button type="submit">Send</Button>
      </FormWrapper>
    )
  }
}

export default Form
