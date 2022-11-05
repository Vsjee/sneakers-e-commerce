import styled from "styled-components";

const NavBarWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #000;
  color: #fff;
  padding: .6rem 0 .6rem 0;

  position: fixed;
  width: 100%;

  z-index: 1;

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

  .shopIcon {
    margin-left: 15px;
    background: none;
    border: none;
    padding: 0;
    width: 25px;
    height: 25px;

    .shopIcon--icon {
      width: 25px;
      height: 25px;
      color: white;
      transition: .3s ease-in-out;
      
      &:hover {
        color: #fc4747;
      }
    }

    
    .shopIcon_counter {
      position: relative;
      top: -150%;
      left: 80%;
      width: 18px;
      height: 18px;
      color: #fff;
      border-radius: 20px;
      background-color: #fc4747;

      span {
        position: relative;
        bottom: 3px;
      }
    }
  }
`

export default NavBarWrapper