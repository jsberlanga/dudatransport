import styled from "styled-components"
import { styles } from "./../../utils"

const Button = styled.button`
  border: none;
  cursor: pointer;
  padding: 1.2rem 3.2rem;
  color: ${styles.colors.mainLight};
  background: ${styles.colors.blue};
  letter-spacing: 1px;
  position: relative;
  font-size: 1.2rem;
  min-height: 4rem;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    background: rgba(0, 0, 0, 0.1);
    height: 100%;
    left: 0;
    top: 0;
    transition: transform 0.3s;
    transform: scaleX(0);
    transform-origin: bottom right;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: top left;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  a {
    color: ${styles.colors.mainLight};
  }
`

export default Button
