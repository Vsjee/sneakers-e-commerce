import styled from "styled-components";

const SectionSneakerWrapper = styled.section`
  margin: 5rem 0 5rem 0;

  article {
    display: flex;
    flex-direction: row;
  }

  article div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 2rem;
  }

  article:first-child {
    flex-direction: row-reverse;
  }
  article:nth-child(3) {
    flex-direction: row-reverse;
  }
  article:nth-child(5) {
    flex-direction: row-reverse;
  }
  article:last-child {
    flex-direction: row-reverse;
  }

  @media screen and (max-width: 828px) {
    article figure {
      display: block;
      margin: 0 auto;
    }
    article figure img {
      width: 320px;
    }
    article {
      flex-direction: column;
    }
    article div {
      display: flex;
    }

    article:first-child {
      flex-direction: column;
    }
    article:nth-child(3) {
      flex-direction: column;
    }
    article:nth-child(5) {
      flex-direction: column;
    }
    article:last-child {
      flex-direction: column;
    }

  }
`

export default SectionSneakerWrapper