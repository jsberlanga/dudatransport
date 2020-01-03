const hoverEffect = () => `
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
    `

export { hoverEffect }
