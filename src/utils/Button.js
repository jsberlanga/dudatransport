import styled from "styled-components"
import { styles } from "./index"

const Button = styled.button`
  all: unset;
  cursor: pointer;
  padding: 1rem 3rem;
  color: ${styles.colors.mainLight};
  background: ${styles.colors.blue};
  letter-spacing: 0.5px;
  transition: all 0.2s;
  &:hover {
    background: ${styles.colors.blue2};
    transform: scale(1.02);
  }
`

export { Button }
