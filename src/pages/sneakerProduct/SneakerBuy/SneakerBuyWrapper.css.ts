import styled from "styled-components";

const SneakerBuyWrapper = styled.section`
  width:  40%;

  .sizes {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }

  .sizes__list {
    padding-left: 16px;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }  

  input[type="radio"] {
    display: none;
  }

  label {
    font-size: 1.2rem;
    border: 1px solid black;
    border-radius: 5px;
    padding: 5px 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    cursor: pointer;
  }

  input[type="radio"]:checked + label {
    transition: .3s ease-in-out;
    background-color: black;
    color: #fff;
  }

  .cuantity {
    margin: 3rem 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  @media screen and (max-width: 712px) {
    width: 100%;
  }
`

export default SneakerBuyWrapper