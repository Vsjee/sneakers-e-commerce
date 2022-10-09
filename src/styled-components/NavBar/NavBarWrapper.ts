import styled from "styled-components";

const NavBarWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #000;
  color: #fff;
  padding: .6rem 0 .6rem 0;

  nav ul {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  figure img {
    display: block;
    cursor: pointer;
  }
`

export default NavBarWrapper