import { Button } from '@/components';
import PaymentShippingMethodWrapper from './PaymentShippingMethodWrapper.css';

function PaymentShippingMethod() {
  return (
    <PaymentShippingMethodWrapper>
      <form action="" className="form">
        <div className="form__shipping">
          <h3>Shipping</h3>
          <div className="form__shipping__info">
            <p>Country: </p>
            <p>Street address: </p>
            <p>House, apt: </p>
            <p>Phone number: </p>
          </div>
          <h4>Shipping way</h4>
          <select name="" id="" required>
            <option value="">Select shipping type...</option>
            <option value="homeDelivery">Home delivery</option>
            <option value="storePickup">Store Pickup</option>
          </select>
        </div>
        <div className="form__payment">
          <div>
            <h3>Payment</h3>
            <h4>Card information</h4>
          </div>
          <label htmlFor="" className="cardNumber">
            Card number
          </label>
          <input type="text" placeholder="0000 0000 0000 0000" required maxLength={19} />
          <div className="form__payment__year">
            <label htmlFor="" className="monthYear">
              Month/year
            </label>
            <input type="number" required placeholder="MM" maxLength={2} />
            /
            <input type="number" required placeholder="YY" maxLength={2} />
            <label htmlFor="" className="password">
              Password
            </label>
            <input type="password" className="form__payment__password" required placeholder="****" maxLength={4} />
          </div>
        </div>
        <Button buttonType="" type="submit" className="form__submit">
          Confirm
        </Button>
      </form>
    </PaymentShippingMethodWrapper>
  );
}
export default PaymentShippingMethod;
