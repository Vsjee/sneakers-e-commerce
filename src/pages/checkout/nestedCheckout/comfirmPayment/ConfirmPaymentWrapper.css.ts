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

  @media screen and (max-width: 820px) {
    margin-top: 0;

    h3 {
      margin: 2rem 175px 0 0;
      text-align: center;
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
