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

  .container {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  nav ul {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-left: 200px;
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

  .nav__responsive__btn {
    position: absolute;
    left: 85%;
    background: none;
    border: none;
    width: 30px;
    height: 30px;
    padding: 0;
    visibility: hidden; 
    opacity: 0;
  }

  .nav__close__btn--icon, .nav__open__btn--icon {
      color: #fff;
      width: 25px;
      height: 25px;
  }

  @media screen and (max-width: 600px) {
    img {
      position: relative;
      right: 50px;
    }
    
    .shopIcon {
      position: relative;
      right: 10px;
    }

    .nav__responsive__btn {
      visibility: visible;
      opacity: 1;
    }

    .nav {
      position: fixed;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: #fc4747;
      gap: 1.5rem;
      transition: 1s;
      transform: translateY(-110vh);

      ul {
        flex-direction: column;
        margin: 0;
        gap: 3rem;

        .nav__link, .nav__link--btn  {
          color: #000;
          font-size: 2rem;
        }

        .nav__link--btn {
          padding: 5px;
          background-color: #000;
          color: #fff;
        }
      }
	  }

    .responsive__nav {
		  transform: none;
	  }

    .shopIcon .shopIcon--icon {   
      color: #fff;
      
      &:hover {
        color: #fff;
      }
    }
    
    .shopIcon_counter span {
        padding: 0 5px;
        border-radius: 50%;
        color: #fff;
    }
  }
`

export default NavBarWrapper