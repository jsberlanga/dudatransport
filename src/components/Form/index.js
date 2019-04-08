import React from "react"
import styled from "styled-components"

import Form from "./Form"

const FormWrapper = styled.div`
  grid-area: form;
  display: flex;
`

export default ({ title, subtitle }) => {
  return (
    <FormWrapper>
      <Form title={title} subtitle={subtitle} />
    </FormWrapper>
  )
}
