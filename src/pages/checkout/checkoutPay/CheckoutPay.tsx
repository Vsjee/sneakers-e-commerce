import { Button } from '@/components';
import { ItemProps } from '@/redux/state/cart';
import { FaApplePay, FaGooglePay, FaMoneyBillWave, FaMoneyCheckAlt, FaPaypal } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CheckoutPayWrapper from './CheckoutPayWrapper.css';

function CheckoutPay() {
  const listItems = useSelector((store: ItemProps) => store.cart);
  const itemsCounter = useSelector((store: ItemProps) => store.itemsCounter);
  const totalPrice = useSelector((store: ItemProps) => store.totalPrice);

  return (
    <CheckoutPayWrapper>
      <div className="pay__header">
        <p>Total items {itemsCounter}</p>
        <h2>
          TOTAL PRICE <span>${totalPrice}</span>
        </h2>
      </div>
      <ul className="pay__info">
        <li>
          <Link to={listItems.length !== 0 ? '/checkout/menu' : '/checkout'} className="pay__info__link">
            <Button buttonType="primary" className="pay__info--btn">
              Pay
            </Button>
          </Link>
        </li>
        <li>
          <Link to={'/products'} className="pay__info__a">
            <Button buttonType="" className="pay__info--btn">
              keep shopping
            </Button>
          </Link>
        </li>
        <li className="pay__info__cupon">
          <input type="text" placeholder="cupon" className="pay__info__cupon--input" />
          <Button buttonType="">Validate</Button>
        </li>
        <li>
          <FaMoneyBillWave className="pay__info--payment" />
          <FaMoneyCheckAlt className="pay__info--payment" />
          <FaApplePay className="pay__info--payment" />
          <FaGooglePay className="pay__info--payment" />
          <FaPaypal className="pay__info--payment" />
        </li>
      </ul>
    </CheckoutPayWrapper>
  );
}
export default CheckoutPay;
