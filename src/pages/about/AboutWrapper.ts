import styled from "styled-components";

const AboutWrapper = styled.section`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 10rem 0 6rem;
  padding: 0 5% 0 5%;

  .history {
    width: 500px;

    h2 {
        margin: 0 0 1rem 0;
      }
  }

  .sneaker {
    width: 250px;
  }

  @media screen and (max-width: 592px) {
    flex-direction: column;
    margin-top: 7rem;

    .figure {
      margin: 0 auto;
    }

    .history {
      width: 100%;

      h2 {
        margin: 1rem 0 1rem 0;
      }
    }
  }
`

export default AboutWrapper