import { Button } from '@/components';
import { itemExistLocalStorage } from '@/utilities';
import { LoadBtnCheckoutProcess } from '@/utilities';
import React, { useRef, useState } from 'react';
import PaymentShippingMethodWrapper from './PaymentShippingMethodWrapper.css';

const getShippingData = () => {
  const shippingAddressData = localStorage.getItem('shippingData');
  return shippingAddressData !== null ? JSON.parse(shippingAddressData) : null;
};

function PaymentShippingMethod() {
  const [showBtn, setShowBtn] = useState(false);

  const data = getShippingData();
  const { country, houseOrApt, phone, address } = data;

  const delivery = useRef<HTMLSelectElement>(null);
  const cardNumber = useRef<HTMLInputElement>(null);
  const MM = useRef<HTMLInputElement>(null);
  const YY = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const paymentAndShippingForm = {
    delivery: '',
    cardNumber: '',
    MM: '',
    YY: '',
    password: '',
  };

  const toggle = () => {
    const dataSet = itemExistLocalStorage('paymentShippingData');
    setShowBtn(dataSet);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    paymentAndShippingForm.delivery = delivery.current?.value || '';
    paymentAndShippingForm.cardNumber = cardNumber.current?.value || '';
    paymentAndShippingForm.MM = MM.current?.value || '';
    paymentAndShippingForm.YY = YY.current?.value || '';
    paymentAndShippingForm.password = password.current?.value || '';
    localStorage.setItem('paymentShippingData', JSON.stringify(paymentAndShippingForm));
    console.log(paymentAndShippingForm);
  };

  return (
    <PaymentShippingMethodWrapper>
      <form action="" onSubmit={handleSubmit} className="form">
        <div className="form__shipping">
          <h3>Shipping</h3>
          <div className="form__shipping__info">
            <p>Country: {country}</p>
            <p>Street address: {address}</p>
            <p>House, apt: {houseOrApt}</p>
            <p>Phone number: {phone}</p>
          </div>
          <h4>Shipping way</h4>
          <select ref={delivery} name="" id="" required>
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
          <input ref={cardNumber} type="text" placeholder="0000 0000 0000 0000" required maxLength={19} />
          <div className="form__payment__year">
            <label htmlFor="" className="monthYear">
              Month/year
            </label>
            <input ref={MM} type="number" required placeholder="MM" maxLength={2} />
            /
            <input ref={YY} type="number" required placeholder="YY" maxLength={2} />
            <label htmlFor="" className="password">
              Password
            </label>
            <input ref={password} type="password" className="form__payment__password" required placeholder="****" maxLength={4} />
          </div>
        </div>
        <Button buttonType="" type="submit" onClick={toggle} className="form__submit">
          Confirm
        </Button>
        {showBtn !== false ? (
          <div className="btn__container">
            <LoadBtnCheckoutProcess route={'/checkout/menu/confirm'} />
          </div>
        ) : null}
      </form>
    </PaymentShippingMethodWrapper>
  );
}
export default PaymentShippingMethod;
