import styled from "styled-components";

const SneakerInfoWrapper = styled.section`
  width: 60%;

  article {
    display: flex;
    flex-direction: column;
    align-items: center;

    ul {
      list-style: none;
    }
  }

  figure img {
    display: block;
    margin: 0 auto;
  }

  .infoList {
    margin: 2rem 0;
  }

  @media screen and (max-width: 712px) {
    background-color: wheat;
    width: 100%;
  }
`

export default SneakerInfoWrapper
