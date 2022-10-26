import sneakerLogo from '../../assets/sneakerLogo.svg'
import { lazy, Suspense } from 'react'
import { Link, Route } from 'react-router-dom'
import { RoutesWithNotFound } from '@/utilities'
import Button from '../Button/Button'
import NavBarWrapper from './NavBarWrapper.css'

const HomePage = lazy(() => import('../../pages/home/HomePage'))
const Products = lazy(() => import('../../pages/products/Products'))
const SneakerProduct = lazy(() => import('../../pages/sneakerProduct/SneakerProduct'))
const About = lazy(() => import('../../pages/about/About'))
const Contact = lazy(() => import('../../pages/Contact/Contact'))

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
          <Route path='/' element={
            <Suspense fallback='Loading...'>
              <HomePage />
            </Suspense>
          }/>
          <Route path='/products' element={
            <Suspense fallback='Loading...'>
              <Products />
            </Suspense>
          }/>
          <Route path='/products/:id' element={
            <Suspense fallback='Loading...'>
              <SneakerProduct />
            </Suspense>
          }/>
          <Route path='/about' element={
            <Suspense fallback='Loading...'>
              <About />
            </Suspense>
          }/>
          <Route path='/contact' element={
            <Suspense fallback='Loading...'>
              <Contact />
            </Suspense>
          }/>
      </RoutesWithNotFound>
    </>
  )
}

export default NavBar