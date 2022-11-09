import sneakerLogo from '../../assets/sneakerLogo.svg';
import { lazy, Suspense, useState, createRef } from 'react';
import { Link, Route } from 'react-router-dom';
import { RoutesWithNotFound } from '@/utilities';
import Button from '../Button/Button';
import NavBarWrapper from './NavBarWrapper.css';
import { ShopCart } from '../ShopCart';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FaTimes, FaBars } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { ItemProps } from '@/redux/state/cart';

const HomePage = lazy(() => import('../../pages/home/HomePage'));
const Products = lazy(() => import('../../pages/products/Products'));
const SneakerProduct = lazy(() => import('../../pages/sneakerProduct/SneakerProduct'));
const About = lazy(() => import('../../pages/about/About'));
const Contact = lazy(() => import('../../pages/Contact/Contact'));

const NavBar = () => {
  const itemCounter = useSelector((store: ItemProps) => store.itemsCounter);

  const [toggleDrawer, setToggleDrawer] = useState(false);
  const [navIcons, setNavIcons] = useState(false);

  const navRef = createRef<HTMLElement>();

  const showIcon = () => {
    setNavIcons(!navIcons);
  };

  const showNavBar = () => {
    navRef?.current?.classList.toggle('responsive__nav');
    showIcon();
  };

  return (
    <>
      <NavBarWrapper>
        <Link to="/">
          <figure>
            <img src={sneakerLogo} alt="sneaker-logo" width={50} />
          </figure>
        </Link>
        <div className="container">
          <nav className="nav" ref={navRef}>
            <ul>
              <Link to="/products" className="nav__link" onClick={showNavBar}>
                Products
              </Link>
              <Link to="/about" className="nav__link" onClick={showNavBar}>
                About
              </Link>
              <Link to="/contact" className="nav__link" onClick={showNavBar}>
                <Button buttonType="primary" className="nav__link--btn">
                  Contact
                </Button>
              </Link>
            </ul>
          </nav>
          <Button onClick={() => setToggleDrawer(true)} buttonType="" className="shopIcon">
            <AiOutlineShoppingCart className="shopIcon--icon" />
            <div className="shopIcon_counter">
              <span>{itemCounter}</span>
            </div>
          </Button>
          <Button buttonType="" className="nav__responsive__btn" onClick={showNavBar}>
            {navIcons === true ? <FaTimes className="nav__close__btn--icon" /> : <FaBars className="nav__open__btn--icon" />}
          </Button>
        </div>
      </NavBarWrapper>

      {toggleDrawer && <ShopCart onClose={setToggleDrawer} />}

      <RoutesWithNotFound>
        <Route
          path="/"
          element={
            <Suspense fallback="Loading...">
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path="/products"
          element={
            <Suspense fallback="Loading...">
              <Products />
            </Suspense>
          }
        />
        <Route
          path="/products/:id"
          element={
            <Suspense fallback="Loading...">
              <SneakerProduct />
            </Suspense>
          }
        />
        <Route
          path="/about"
          element={
            <Suspense fallback="Loading...">
              <About />
            </Suspense>
          }
        />
        <Route
          path="/contact"
          element={
            <Suspense fallback="Loading...">
              <Contact />
            </Suspense>
          }
        />
      </RoutesWithNotFound>
    </>
  );
};

export default NavBar;
