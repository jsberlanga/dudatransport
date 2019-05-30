import styled from "styled-components"
import { styles } from "./index"

const Button = styled.button`
  all: unset;
  cursor: pointer;
  padding: 0.8rem 3rem;
  color: ${styles.colors.mainLight};
  background: ${styles.colors.blue};
  letter-spacing: 1px;
  transition: all 0.2s;
  position: relative;
  z-index: 1;
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    background: rgba(0, 0, 0, 0.1);
    height: 100%;
    left: 0;
    top: 0;
    transition: transform 0.3s;
    z-index: -1;
  }
  &::after {
    transform: scaleX(0);
    transform-origin: bottom right;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: top left;
  }
`

export { Button }
