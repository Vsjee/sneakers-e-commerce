import { Button } from '@/components';
import { Link } from 'react-router-dom';
import { GiRunningShoe } from 'react-icons/gi';
import ThankForYourPurcharseWrapper from './ThankForYourPurcharseWrapper.css';
import { getDataLocalStorage } from '@/utilities';

function ThankForYourPurcharse() {
  const deleteDataLocalStorage = () => {
    localStorage.removeItem('shippingData');
    localStorage.removeItem('paymentShippingData');
  };

  const data = getDataLocalStorage('shippingData');

  return (
    <ThankForYourPurcharseWrapper>
      <h1>ThankForYourPurcharse</h1>
      <h2 className="name">{data.fullName}</h2>
      <h2>your purcharse will arrive soon...</h2>
      <GiRunningShoe className="icon" />
      <Link to={'/products'}>
        <Button buttonType="primary" onClick={deleteDataLocalStorage}>
          Back to shop
        </Button>
      </Link>
    </ThankForYourPurcharseWrapper>
  );
}
export default ThankForYourPurcharse;
