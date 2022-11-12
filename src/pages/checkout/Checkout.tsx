import CheckoutWrapper from './CheckoutWrapper.css';
import { CheckoutItems } from './checkoutItems';
import { CheckoutPay } from './checkoutPay';

function Checkout() {
  return (
    <CheckoutWrapper>
      <article className="checkout__items">
        <CheckoutItems />
      </article>
      <article className="checkout__pay">
        <CheckoutPay />
      </article>
    </CheckoutWrapper>
  );
}
export default Checkout;
