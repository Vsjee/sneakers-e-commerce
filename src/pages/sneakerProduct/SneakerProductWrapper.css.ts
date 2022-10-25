import styled from "styled-components";

const SneakerProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 3%;
  
  @media screen and (max-width: 712px) {
    display: block;
  }
`

export default SneakerProductWrapper