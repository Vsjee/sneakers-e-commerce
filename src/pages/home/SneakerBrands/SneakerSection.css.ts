import styled from "styled-components";

const SectionSneakerWrapper = styled.section`
  margin: 0 5% 0 5%;
  margin-top: 6rem;
  margin-bottom: 6rem;

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

  article:first-child, 
  article:nth-child(3),
  article:nth-child(5),
  article:last-child {
    flex-direction: row-reverse;
  }

  @media screen and (min-width: 829px) {
    .sneaker__img {
      transition: .5s ease-in-out;
    }
    
    .sneaker__img:hover {
      transform: scale(1.1)
    }
  }

  @media screen and (max-width: 828px) {
    .sneaker__img {
      display: block;
      margin: 0 auto;
      width: 300px;
    }
    article {
      flex-direction: column;
    }
    article div {
      display: flex;
    }
    article:first-child, 
    article:nth-child(3),
    article:nth-child(5),
    article:last-child {
      flex-direction: column;
    }
  }
`

export default SectionSneakerWrapper