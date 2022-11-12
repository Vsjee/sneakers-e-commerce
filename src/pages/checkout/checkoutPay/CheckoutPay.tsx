import { Button } from '@/components';
import { FaApplePay, FaGooglePay, FaMoneyBillWave, FaMoneyCheckAlt, FaPaypal } from 'react-icons/fa';
import CheckoutPayWrapper from './CheckoutPayWrapper.css';

function CheckoutPay() {
  return (
    <CheckoutPayWrapper>
      <div className="pay__header">
        <p>Total items [0]</p>
        <h2>
          TOTAL PRICE <span>$[0]</span>
        </h2>
      </div>
      <ul className="pay__info">
        <li>
          <Button buttonType="primary" className="pay__info--btn">
            Pay
          </Button>
        </li>
        <li>
          <Button buttonType="" className="pay__info--btn">
            keep shopping
          </Button>
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
