import styled from "styled-components";

const ProductSearchWrapper = styled.section`
  display: block;
  margin: 0 auto;
  margin-top: 8rem;
  width: 100%;

  form {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 1rem;
  }

  .form__searchBar {
    width: 380px;
    padding: .5rem;
    background-color: #fff;
    color: #000;
    transition: 1s ease-in-out;
    border: 1px solid black;
    border-radius: 10px;
  }

  .form__submitBtn {
    width: 50px;
    border-radius: 50%;
    background-color: #fff;
    border: 1px solid black;
    transition: .3s ease-in-out;

    .submitBtn__icon {
    position: relative;
    right: 7px;
    top: 2px;
    color: #000;
    width: 25px;
    height: 25px;
    }

    &:hover {
      background-color: #fc4747;
    }
  }

  @media screen and (max-width: 446px){
    .form__searchBar {
      width: 70%;
    }
  }
`

export default ProductSearchWrapper