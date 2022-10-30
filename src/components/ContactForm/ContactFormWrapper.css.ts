import styled from "styled-components";

const ContactFormWrapper = styled.form`
  margin-bottom: 5rem;
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  
  .form__input,
  .form__textarea,
  .form__input--submit {
    background-color: #fff;
    color: #000;
    border: 2px solid black;
    border-radius: 10px;
    width: 400px;
    padding: .6rem;

    resize: none;
  }

  .form__input--submit {
    cursor: pointer;
    transition: .4s ease-in-out;
    width: 100px;
    
    &:hover {
      color: #fff;
      border: 2px solid #fc4747;
      background-color: #fc4747;
    }
  }

  @media screen and (max-width: 460px) {
    width: 100%;
    transition: .4s ease-in-out;

    .form__input,
    .form__textarea {
      width: 90%;
    }
  }

  @media screen and (max-width: 954px) {
    margin-top: 1rem;
  }
`

export default ContactFormWrapper