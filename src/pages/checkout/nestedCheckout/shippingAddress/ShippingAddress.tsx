import { Button } from '@/components';
import ShippingAddressWrapper from './ShippingAddressWrapper.css';

function ShippingAddress() {
  return (
    <ShippingAddressWrapper>
      <form action="" className="form">
        <div className="form__personalInfo">
          <h3>Personal info</h3>
          <input type="text" placeholder="Your full name" autoComplete="name" required />
          <input type="email" placeholder="Your email" autoComplete="email" required />
          <input type="number" placeholder="Your document" autoComplete="number" required />
          <input type="number" placeholder="Phone number" required />
          <input className="form__date" type="date" required />
        </div>
        <div className="form__addressInfo">
          <h3>Address info</h3>
          <input type="text" placeholder="Country" required />
          <input type="text" placeholder="Street address" required />
          <input type="text" placeholder="House, Apt, unit, etc." required />
        </div>
        <Button buttonType="" type="submit" className="form__submit">
          Confirm
        </Button>
      </form>
    </ShippingAddressWrapper>
  );
}
export default ShippingAddress;
