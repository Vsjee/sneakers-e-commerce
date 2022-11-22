import { Button } from '@/components';
import ConfirmPaymentWrapper from './ConfirmPaymentWrapper.css';

function ComfirmPayment() {
  return (
    <ConfirmPaymentWrapper>
      <h3>Confirm data</h3>
      <div className="container">
        <div>
          <h4>Personal information</h4>
          <p>Name: </p>
          <p>Email: </p>
          <p>Document: </p>
          <p>Phone number:</p>
        </div>
        <div>
          <h4>Address information</h4>
          <p>Country: </p>
          <p>Direction: </p>
          <p>Shipping way: </p>
        </div>
        <div>
          <h4>Card information</h4>
          <p>Card number: </p>
        </div>
      </div>
      <Button buttonType="primary">Confirm Purcharse</Button>
    </ConfirmPaymentWrapper>
  );
}
export default ComfirmPayment;
