import styled from "styled-components";

interface Props {
  buttonType: string
}

const Button = styled.button<Props>`
  background-color: ${Props => Props.buttonType === "primary" ? '#fc4747' : '#fff'};
  color: ${Props => Props.buttonType === "primary" ? '#fff' : '#000'};
  border: ${Props => Props.buttonType === "primary" ? 'none' : "1px solid black"};
  transition: .4s ease-in-out;

  &:hover {
    background-color: ${Props => Props.buttonType === "primary" ? '#d91818' : '#fc4747'};
    border: ${Props => Props.buttonType === "primary" ? 'none' : '1px solid #fc4747'};
  }
`

export default Button