import styled from 'styled-components';

const PaymentShippingMethodWrapper = styled.article`
  .form {
    margin-top: 1rem;
    margin: 1rem 0 0 0;
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 5rem;

    .form__submit {
      cursor: pointer;
      position: absolute;
      padding: 0.5rem;
      height: 40px;
      width: 120px;
      top: 500px;
    }

    .btn__container {
      cursor: pointer;
      position: absolute;
      padding: 0.5rem;
      height: 40px;
      width: 120px;
      top: 550px;
    }
  }

  .cardNumber {
    position: absolute;
    top: 260px;
    font-size: 0.8rem;
    margin-left: 3px;
  }

  .form__shipping,
  .form__payment {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    h4 {
      text-align: left;
    }

    input,
    select {
      background-color: #fff;
      color: #000;
      border-radius: 6px;
      padding: 0.5rem;
      width: 300px;
      border-top: none;
      border-left: none;
      border-right: none;
    }

    input:focus,
    select:focus {
      outline: none;
      background-color: #efefef;
    }
  }

  .form__payment__year {
    display: inline-flex;
    gap: 0.5rem;

    input {
      padding: 0.3rem 0.2rem;
      text-align: center;
      width: 45px;
      border-top: none;
      border-left: none;
      border-right: none;
    }

    .monthYear {
      position: absolute;
      top: 330px;
      margin-left: 3px;
      font-size: 0.8rem;
    }
    .password {
      position: absolute;
      top: 330px;
      margin-left: 245px;
      font-size: 0.8rem;
    }

    .form__payment__password {
      width: 50px;
      position: relative;
      left: 130px;
    }
  }

  @media screen and (max-width: 820px) {
    .form {
      flex-direction: column;
      align-items: center;
      margin: 0;
      margin-bottom: 5rem;

      .form__submit {
        top: 730px;
      }

      .btn__container {
        top: 780px;
      }
    }

    .form__shipping,
    .form__payment {
      margin-top: 2rem;
    }

    .cardNumber {
      top: 585px;
      font-size: 0.8rem;
    }

    .form__payment__year {
      .monthYear {
        top: 655px;
        margin-left: 3px;
      }
      .password {
        top: 650px;
        margin-left: 245px;
      }
    }
  }

  @media screen and (max-width: 624px) {
    .form {
      .form__submit {
        top: 780px;
      }
    }

    .cardNumber {
      top: 630px;
      font-size: 0.8rem;
    }

    .form__payment__year {
      .monthYear {
        top: 700px;
        margin-left: 3px;
      }
      .password {
        top: 700px;
        margin-left: 245px;
      }
    }
  }
`;

export default PaymentShippingMethodWrapper;
