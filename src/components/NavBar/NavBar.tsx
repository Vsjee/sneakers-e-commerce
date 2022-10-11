import sneakerLogo from '../../assets/sneakerLogo.svg'
import { NavBarWrapper } from '@/styled-components'
import { Link, Route, Routes } from 'react-router-dom'
import { Products, HomePage, About, Contact } from '@/pages'

const NavBar = () => {
  return (
    <>
      <NavBarWrapper>
        <Link to='/'>
          <figure>
            <img src={sneakerLogo} alt="sneaker-logo" width={50}/>
          </figure>
        </Link>
        <nav>
          <ul>
            <Link to='/products'>
              Products
            </Link>
            <Link to='/about'>
              About
            </Link>
            <Link to='/contact'>
              <button>Contact</button>
            </Link>
          </ul>
        </nav>
      </NavBarWrapper>

      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/products' element={<Products />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
    </>
  )
}

export default NavBar