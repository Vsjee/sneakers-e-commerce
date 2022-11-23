import { Button } from '@/components';
import ConfirmPaymentWrapper from './ConfirmPaymentWrapper.css';

const getDataLocalStorage = () => {
  const shippingAddressData = localStorage.getItem('shippingData');
  const paymentShippingData = localStorage.getItem('paymentShippingData');

  const shippingData = shippingAddressData !== null ? JSON.parse(shippingAddressData) : null;
  const paymentData = paymentShippingData !== null ? JSON.parse(paymentShippingData) : null;

  return {
    shippingData,
    paymentData,
  };
};

function ComfirmPayment() {
  const { shippingData, paymentData } = getDataLocalStorage();

  const { fullName, email, document, phone, country, address, delivery } = shippingData;
  const { cardNumber } = paymentData;

  console.log(shippingData);
  console.log(paymentData);

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
      <Button buttonType="primary">Confirm Purcharse</Button>
    </ConfirmPaymentWrapper>
  );
}
export default ComfirmPayment;
