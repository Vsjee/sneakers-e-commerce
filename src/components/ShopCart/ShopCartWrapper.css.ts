import styled from 'styled-components';

const ShopCartWrapper = styled.section`
  .cart {
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 100vh;
    padding: 1rem;
  }

  .cart__header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 1rem;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    border-bottom: 2px solid black;

    .cart__header--btn {
      border: none;
      background: none;
      width: 25px;
      height: 25px;
      padding: 0;

      .btn__icon {
        position: relative;

        width: 25px;
        height: 25px;
        transition: 0.3s ease-in-out;

        &:hover {
          color: #fc4747;
        }
      }
    }
  }

  .cart__checkout {
    position: fixed;
    align-self: center;
    width: 200px;
    height: 50px;
    top: 90vh;

    .cart_checkout--btn {
      width: 200px;
    }
  }

  @media screen and (max-width: 425px) {
    .cart {
      width: 100vw;
    }
  }
`;

export default ShopCartWrapper;
