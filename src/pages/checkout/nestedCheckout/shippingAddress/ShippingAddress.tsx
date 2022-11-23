import { Button } from '@/components';
import { useEffect, useRef } from 'react';
import ShippingAddressWrapper from './ShippingAddressWrapper.css';

function ShippingAddress() {
  const fullName = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const document = useRef<HTMLInputElement>(null);
  const phone = useRef<HTMLInputElement>(null);
  const date = useRef<HTMLInputElement>(null);
  const country = useRef<HTMLInputElement>(null);
  const address = useRef<HTMLInputElement>(null);
  const houseOrApt = useRef<HTMLInputElement>(null);

  const shippingAddressForm = {
    fullName: '',
    email: '',
    document: '',
    phone: '',
    date: '',
    country: '',
    address: '',
    houseOrApt: '',
  };

  const toggle = () => {};

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    shippingAddressForm.fullName = fullName.current?.value || '';
    shippingAddressForm.email = email.current?.value || '';
    shippingAddressForm.document = document.current?.value || '';
    shippingAddressForm.phone = phone.current?.value || '';
    shippingAddressForm.date = date.current?.value || '';
    shippingAddressForm.country = country.current?.value || '';
    shippingAddressForm.address = address.current?.value || '';
    shippingAddressForm.houseOrApt = houseOrApt.current?.value || '';
    localStorage.setItem('shippingData', JSON.stringify(shippingAddressForm));
  };

  useEffect(() => {
    console.log(shippingAddressForm);
  }, [shippingAddressForm]);

  return (
    <ShippingAddressWrapper>
      <form action="" onSubmit={handleSubmit} className="form">
        <div className="form__personalInfo">
          <h3>Personal info</h3>
          <input ref={fullName} type="text" name="name" placeholder="Your full name" autoComplete="name" required />
          <input ref={email} type="email" name="email" placeholder="Your email" autoComplete="email" required />
          <input ref={document} type="number" name="document" placeholder="Your document" autoComplete="number" required />
          <input ref={phone} type="number" name="number" placeholder="Phone number" required />
          <input ref={date} className="form__date" name="date" type="date" required />
        </div>
        <div className="form__addressInfo">
          <h3>Address info</h3>
          <input ref={country} type="text" name="country" placeholder="Country" required />
          <input ref={address} type="text" name="address" placeholder="Street address" required />
          <input ref={houseOrApt} type="text" name="houseOrApt" placeholder="House, Apt, unit, etc." required />
        </div>
        <Button buttonType="" type="submit" className="form__submit">
          Confirm
        </Button>
      </form>
    </ShippingAddressWrapper>
  );
}
export default ShippingAddress;
