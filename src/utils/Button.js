import styled from "styled-components"
import { styles } from "./index"

const Button = styled.button`
  all: unset;
  cursor: pointer;
  padding: 1rem 3rem;
  color: ${styles.colors.mainLight};
  background: ${styles.colors.blue};
  letter-spacing: 1.5px;
`

export { Button }
