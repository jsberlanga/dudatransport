import React from "react"
import styled from "styled-components"

import Form from "./Form"

const FormWrapper = styled.div`
  grid-area: form;
  display: flex;
`

export default () => {
  return (
    <FormWrapper>
      <Form />
    </FormWrapper>
  )
}
