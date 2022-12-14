import styled from 'styled-components';

const ConfirmPaymentWrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;

  h3 {
    width: 100%;
  }
  .confirmItems {
    display: inline-flex;
    justify-content: space-between;
  }

  .container {
    margin: 2rem 0 2rem 0;
    display: flex;
    width: 100%;
    justify-content: space-around;

    div {
      text-align: left;
      width: 300px;

      h4 {
        text-align: left;
      }
    }
  }

  .item {
    margin: 3rem 0;
    list-style: none;
  }

  @media screen and (max-width: 820px) {
    margin-top: 0;

    h3 {
      margin: 2rem 175px 0 0;
      text-align: center;
    }

    .confirmItems {
      margin: 0;
      width: 300px;
    }

    .container {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 2rem;
    }
  }
`;

export default ConfirmPaymentWrapper;
