import styled from "styled-components"

const CuantityWrapper = styled.ul`
  display: flex;
  gap: .5rem;
  border-bottom: 2px solid black;

  .btn {
    width: 35px;
    background-color: #fff;
    color: #000;
    font-size: 25px;
    padding: 3px;
    transition: .4s ease-in-out;
    
    &:hover {
      background-color: #e6e6e6;
    }
  }

  .label {
    width: 45px;
    background-color: #fff;
    border: none;
    color: black;
    text-align: center;
  }

  .label::placeholder {
    text-align: center;
  }

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
  }

  input[type="number"] {
      -moz-appearance: textfield;
  }

  input:focus {
      outline: 0;
  }
`

export default CuantityWrapper