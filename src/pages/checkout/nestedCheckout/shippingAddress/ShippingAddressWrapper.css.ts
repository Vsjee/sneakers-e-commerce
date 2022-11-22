import styled from 'styled-components';

const ShippingAddressWrapper = styled.article`
  .form {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 1rem;

    .form__submit {
      cursor: pointer;
      position: absolute;
      padding: 0.5rem;
      height: 40px;
      width: 120px;
      top: 600px;
    }
  }

  .form__personalInfo,
  .form__addressInfo {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    input {
      background-color: #fff;
      color: #000;
      border-radius: 6px;
      padding: 0.5rem;
      width: 300px;
      border-top: none;
      border-left: none;
      border-right: none;
    }

    input:focus {
      outline: none;
      background-color: #efefef;
    }

    .form__date::-webkit-calendar-picker-indicator {
      filter: invert(1);
    }
  }

  @media screen and (max-width: 820px) {
    .form {
      flex-direction: column;
      align-items: center;
      margin: 0;

      .form__submit {
        position: relative;
        top: 0;
        margin: 2rem 0 0 0;
      }
    }

    .form__addressInfo,
    .form__personalInfo {
      margin-top: 2rem;
    }
  }
`;

export default ShippingAddressWrapper;
