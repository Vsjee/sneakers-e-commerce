import NavBarWrapper from "@/styled-components/NavBar/NavBarWrapper"
import sneakerLogo from '../../assets/sneakerLogo.svg'

const NavBar = () => {
  return (
    <NavBarWrapper>
      <figure>
        <img src={sneakerLogo} alt="sneaker-logo" width={50}/>
      </figure>
      <nav>
        <ul>
          <li>
            <a href="">Products</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <button>Contact</button>
          </li>
        </ul>
      </nav>
    </NavBarWrapper>
  )
}

export default NavBar