import styled from "styled-components";

const CardWrapper = styled.article`
  ul {
    width: 300px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    list-style: none;
    margin: 1rem;
    padding: 0 5px 0 5px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    border-radius: 20px;
  }

  li {
    color: black
  }
`

export default CardWrapper