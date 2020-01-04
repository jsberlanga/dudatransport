import React, { useState } from "react"
import styled from "styled-components"
import { navigate } from "gatsby-link"

import { styles } from "../../utils"
import Button from "../Button"

const FormWrapper = styled.form`
  color: ${styles.colors.mainLight};
  display: flex;
  flex-direction: column;
  margin: 1.5em auto;
  max-height: 600px;
  background-color: rgba(33, 33, 33, 0.7);
  padding: 1em 3em 2em;
  border-radius: 0.2rem;
  position: relative;

  @media (max-width: 425px) {
    width: 95vw;
  }

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

const Form = props => {
  const [value, setValue] = useState({ name: "", email: "", message: "" })
  const [error, setError] = useState("")

  const handleSubmit = e => {
    const { name, email, message } = value

    e.preventDefault()
    const form = e.target
    if (!name || !email || !message) {
      setError("Please fill out the form.")
      return
    }
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...value,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => console.log(error))
  }
  const handleChange = e => {
    setError("")
    setValue({ ...value, [e.target.name]: e.target.value })
  }
  return (
    <>
      <FormWrapper
        name="contact"
        method="post"
        action="/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        {error ? (
          <p className="error" role="alert">
            {error}
          </p>
        ) : null}
        <h2>{props.title}</h2>
        <p>{props.subtitle}</p>
        <input type="hidden" name="form-name" value="contact" />
        <input
          aria-label="name"
          name="name"
          placeholder="Name*"
          type="text"
          onChange={handleChange}
        />
        <input
          aria-label="email"
          name="email"
          placeholder="Email*"
          type="email"
          onChange={handleChange}
        />
        <input
          aria-label="phone"
          name="phone"
          placeholder="Phone Number"
          type="text"
          onChange={handleChange}
        />
        <textarea
          aria-label="message"
          name="message"
          minLength={10}
          maxLength={200}
          placeholder="Message*"
          onChange={handleChange}
        />
        <Button type="submit">Send</Button>
      </FormWrapper>
    </>
  )
}

export default Form
