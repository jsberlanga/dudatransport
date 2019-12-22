import styled from "styled-components"
import { styles } from "./index"

const Button = styled.button`
  border: none;
  cursor: pointer;
  padding: 1rem 3.2rem;
  color: ${styles.colors.mainLight};
  background: ${styles.colors.blue};
  letter-spacing: 1px;
  transition: all 0.2s;
  position: relative;
  z-index: 1;
  font-size: 1.2rem;
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

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }

  a {
    color: ${styles.colors.mainLight};
  }
`

export { Button }
