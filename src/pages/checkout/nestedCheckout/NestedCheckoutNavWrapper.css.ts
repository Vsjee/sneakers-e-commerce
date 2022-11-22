import styled from 'styled-components';

const NestedCheckoutNavWrapper = styled.section`
  margin: 8rem 0 6rem 0;

  h4 {
    color: #000;
    text-align: center;
  }

  .nav {
    display: flex;
    justify-content: space-between;
    width: 85%;
    gap: 1rem;
    margin: 0 auto;
    overflow: hidden;
    padding-bottom: 1rem;
    border-bottom: 2px solid black;
  }

  .pucharse {
    margin: 5rem 0 3rem 0;
    text-align: center;

    h1 {
      margin-bottom: 7rem;
    }
  }

  .outlet {
    margin: 0 auto;
    padding: 1rem;
    width: 85%;
  }

  @media screen and (max-width: 820px) {
    .nav {
      justify-content: space-around;
    }

    .outlet {
      width: 100%;
    }
  }

  @media screen and (max-width: 624px) {
    margin: 6rem 0 2rem 0;

    h4 {
      text-align: left;
    }

    .nav {
      flex-direction: column;
    }
  }
`;

export default NestedCheckoutNavWrapper;
