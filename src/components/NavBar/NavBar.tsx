import sneakerLogo from '../../assets/sneakerLogo.svg'
import { NavBarWrapper } from '@/styled-components'
import { Link, Route } from 'react-router-dom'
import { RoutesWithNotFound } from '@/utilities'
import { Products, HomePage, About, Contact, SneakerInfo } from '@/pages'

const NavBar = () => {
   
  const testLigatures = () => {
    let num: number = 3
    if (num === 4) {
      return console.log('Mal socio');
    }
    if (num !== 3) {
      return console.log('Otra vez mal');
    }
    console.log(`ahora si melos sos el num ${num}`);
   }

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

      <RoutesWithNotFound>
        <Route path='/' element={<HomePage />}/>
        <Route path='/products' element={<Products />}/>
        <Route path='/products/:id' element={<SneakerInfo />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
      </RoutesWithNotFound>
    </>
  )
}

export default NavBar