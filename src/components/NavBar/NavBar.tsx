import sneakerLogo from '../../assets/sneakerLogo.svg'
import { NavBarWrapper } from '@/styled-components'
import { Link, Route } from 'react-router-dom'
import { RoutesWithNotFound } from '@/utilities'
import { HomePage, Products, SneakerProduct, About, Contact } from '@/pages'
import Button from '../Button/Button'

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
                <Button buttonType='primary'>Contact</Button>
              </Link>
            </ul>
          </nav>
        </NavBarWrapper>

      <RoutesWithNotFound>
        <Route path='/' element={<HomePage />}/>
        <Route path='/products' element={<Products />}/>
        <Route path='/products/:id' element={<SneakerProduct />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
      </RoutesWithNotFound>
    </>
  )
}

export default NavBar