import styled from 'styled-components';

const CheckoutWrapper = styled.section`
  display: flex;
  flex-direction: row;
  padding: 5rem 0;

  .checkout__items {
    width: 60%;
  }

  .checkout__pay {
    width: 40%;
  }

  @media screen and (max-width: 800px) {
    flex-direction: column;

    .checkout__items,
    .checkout__pay {
      width: 100%;
    }
  }
`;

export default CheckoutWrapper;
