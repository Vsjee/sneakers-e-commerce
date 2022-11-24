import styled from 'styled-components';

const ThankForYourPurcharseWrapper = styled.article`
  @keyframes background-pan {
    from {
      background-position: 0% center;
    }

    to {
      background-position: -200% center;
    }
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin: 10rem 0rem;

  h1,
  h2 {
    text-align: center;
    transition: 1s ease-in;
  }

  .name {
    animation: background-pan 4s linear infinite;
    background: linear-gradient(90deg, #fc4747, #000, #fc4747, #000, #fc4747);
    background-size: 200%;
    background-clip: border-box;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    white-space: nowrap;
  }

  .icon {
    width: 200px;
    height: 200px;
    margin: 2rem 0;
  }

  @media screen and (max-width: 602px) {
    h1 {
      font-size: 1.7rem;
    }

    h2 {
      font-size: 1.2rem;
    }
  }
`;

export default ThankForYourPurcharseWrapper;
