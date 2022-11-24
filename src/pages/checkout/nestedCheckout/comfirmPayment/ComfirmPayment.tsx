import { Button } from '@/components';
import { ItemProps } from '@/redux/state/cart';
import { getDataLocalStorage } from '@/utilities';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ConfirmPaymentWrapper from './ConfirmPaymentWrapper.css';
import Item from './listItems/Item';

function ComfirmPayment() {
  const listItems = useSelector((store: ItemProps) => store.cart);
  const totalPrice = useSelector((store: ItemProps) => store.totalPrice);

  const shippingData = getDataLocalStorage('shippingData');
  const paymentData = getDataLocalStorage('shippingData');

  const { fullName, email, document, phone, country, address, delivery } = shippingData;
  const { cardNumber } = paymentData;

  return (
    <ConfirmPaymentWrapper>
      <h3>Confirm data</h3>
      <div className="container">
        <div>
          <h4>Personal information</h4>
          <p>Name: {fullName}</p>
          <p>Email: {email}</p>
          <p>Document: {document}</p>
          <p>Phone number: {phone}</p>
        </div>
        <div>
          <h4>Address information</h4>
          <p>Country: {country}</p>
          <p>Direction: {address}</p>
          <p>Shipping way: {delivery}</p>
        </div>
        <div>
          <h4>Card information</h4>
          <p>Card number: {cardNumber}</p>
        </div>
      </div>
      <h3 className="confirmItems">
        Confirm items <span>${totalPrice}</span>
      </h3>
      <ul className={'item'}>
        {listItems.map((item, i) => {
          return (
            <li key={i}>
              <Item item={item} />
            </li>
          );
        })}
      </ul>
      <Link to={'/thanks'}>
        <Button buttonType="primary">Confirm Purcharse</Button>
      </Link>
    </ConfirmPaymentWrapper>
  );
}
export default ComfirmPayment;
