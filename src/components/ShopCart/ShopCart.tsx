import { Drawer } from '@mui/material';
import { AiOutlineClose } from 'react-icons/ai';
import Button from '../Button/Button';
import ShopCartWrapper from './ShopCartWrapper.css';
import { ListCartItems } from './ListItems';
import { useSelector } from 'react-redux';
import { ItemProps } from '@/redux/state/cart';
import { Link } from 'react-router-dom';

interface Props {
  onClose: Function;
}

const ShopCart = (Props: Props) => {
  const listCart = useSelector((store: ItemProps) => store.cart);
  const itemCounter = useSelector((store: ItemProps) => store.itemsCounter);
  const itemTotalPrice = useSelector((store: ItemProps) => store.totalPrice);

  const anchor = 'right';

  return (
    <Drawer open={true} onClose={() => Props.onClose(false)} anchor={anchor}>
      <ShopCartWrapper>
        <article className="cart">
          <div className="cart__header">
            <h2>Total ${itemTotalPrice}</h2>
            <Button onClick={() => Props.onClose(false)} className="cart__header--btn" buttonType="">
              <AiOutlineClose className="btn__icon" />
            </Button>
          </div>
          <h3>Total items {itemCounter}</h3>
          <ListCartItems />
          <div className="cart__checkout">
            <Link to={listCart.length !== 0 ? '/checkout' : `/products`}>
              <Button buttonType="" className="cart_checkout--btn" onClick={() => Props.onClose(false)}>
                Checkout
              </Button>
            </Link>
          </div>
        </article>
      </ShopCartWrapper>
    </Drawer>
  );
};

export default ShopCart;
