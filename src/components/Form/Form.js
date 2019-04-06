import React from "react"
import styled from "styled-components"

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

const Form = () => {
  return (
    <FormWrapper>
      <h2>Enquire Now</h2>
      <p>We will get back to you within 24 hours.</p>
      <input type="text" placeholder="Name*" />
      <input type="email" placeholder="Email*" />
      <input type="text" placeholder="Phone*" />
      <textarea type="text" placeholder="Message*" />
      <Button>Send</Button>
    </FormWrapper>
  )
}

export default Form
