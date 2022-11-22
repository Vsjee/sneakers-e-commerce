import styled from 'styled-components';

const CheckoutPayWrapper = styled.article`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  border-left: 2px solid black;
  height: 100%;

  .pay__header {
    border-bottom: 2px solid black;

    p {
      text-align: right;
      padding-bottom: 1rem;
    }

    h2 {
      width: 100%;
      display: flex;
      padding-bottom: 1rem;
      justify-content: space-between;

      span {
        color: #fc4747;
      }
    }
  }

  .pay__info {
    display: flex;
    flex-direction: column;
    list-style: none;
    width: 100%;
    gap: 1rem;
    justify-content: center;
    align-items: center;

    .pay__info__cupon {
      display: flex;
      width: 100%;
      justify-content: space-evenly;
      padding: 2rem 0 2rem 0;
      margin: 2rem 0 2rem 0;
      border-bottom: 2px solid black;
      border-top: 2px solid black;

      .pay__info__cupon--input {
        width: 50%;
        background-color: #fff;
        color: #000;
        padding: 10px 15px;
      }
    }
  }

  .pay__info li {
    display: flex;
    justify-content: center;
    width: 100%;

    .pay__info__a {
      width: 100%;
    }

    .pay__info__link {
      width: 100%;
    }

    .pay__info--btn {
      display: block;
      margin: 0 auto;
      width: 85%;
    }
  }

  .pay__info--payment {
    width: 50px;
    height: 25px;
  }
`;

export default CheckoutPayWrapper;
