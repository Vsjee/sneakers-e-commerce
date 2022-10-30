import styled from "styled-components";

const ContactWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 5rem;

  img {
    width: 500px;
    transition: .8s ease-in-out;
  }
  
  @media screen and (max-width: 954px){
    flex-direction: column;
    gap: 0;
    img {
      width: 500px;
    }  
  }

  @media screen and (max-width: 514px) {
    img {
      width: 320px;
    }
  }
`

export default ContactWrapper