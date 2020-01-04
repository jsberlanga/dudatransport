import styled from "styled-components"

const MainWrapper = styled.div`
  display: grid;
  grid-area: main;
  grid-template:
    ". info ." auto
    ". form ." auto /
    1fr 10fr 1fr;
  margin: auto;
  text-align: center;
  width: 100%;

  .form {
    grid-area: form;
    form {
      width: 60%;
    }
  }

  .info {
    grid-area: info;

    img {
      width: 2em;
      margin-right: 0.7em;
    }

    .title,
    .map {
      position: relative;
    }

    .title {
      padding: 5rem 2rem;
      margin: 0 auto;

      h1 {
        letter-spacing: 0.25em;
        font-family: "montserrat-800";
        /* background-image: linear-gradient(0deg, red 50%, transparent 50%); */
        display: inline;
      }

      p {
        letter-spacing: 1px;
        font-style: italic;
      }
    }

    .details {
      margin-bottom: 1.4em;

      p {
        padding-bottom: 1em;
        letter-spacing: 1px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin: 0 1rem;
      }
    }

    .map {
      height: 25em;
      left: 10%;
      margin-bottom: 1.4em;
    }
  }

  @media (max-width: 1200px) {
    .form {
      form {
        width: 70%;
      }
    }
  }

  @media (max-width: 768px) {
    grid-template:
      "info" auto
      "form" auto /
      1fr;

    .form {
      display: flex;
      justify-content: center;
      form {
        width: 90%;
      }
    }

    .info .details {
      p {
        text-align: left;
        margin-left: 2rem;
        align-items: flex-start;
        justify-content: flex-start;
      }
    }
  }
`

export { MainWrapper }
