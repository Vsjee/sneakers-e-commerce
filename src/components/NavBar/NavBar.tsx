import sneakerLogo from '../../assets/sneakerLogo.svg';
import { useState, createRef } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import NavBarWrapper from './NavBarWrapper.css';
import { ShopCart } from '../ShopCart';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FaTimes, FaBars } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { ItemProps } from '@/redux/state/cart';

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
    </>
  );
};

export default NavBar;
