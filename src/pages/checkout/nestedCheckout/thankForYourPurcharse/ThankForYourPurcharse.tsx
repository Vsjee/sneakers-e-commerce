import { Button } from '@/components';
import { Link } from 'react-router-dom';
import { GiRunningShoe } from 'react-icons/gi';
import ThankForYourPurcharseWrapper from './ThankForYourPurcharseWrapper.css';
import { getDataLocalStorage } from '@/utilities';
import { removeAllItemsFromCart } from '@/redux/state/cart';
import { useDispatch } from 'react-redux';

function ThankForYourPurcharse() {
  const dispatch = useDispatch();

  const deleteDataLocalStorage = () => {
    localStorage.removeItem('shippingData');
    localStorage.removeItem('paymentShippingData');
  };

  const deleteGlobalStates = () => {
    dispatch(removeAllItemsFromCart());
  };

  const deleteAllData = () => {
    deleteDataLocalStorage();
    deleteGlobalStates();
  };

  const data: { fullName: string } = getDataLocalStorage('shippingData');

  return (
    <ThankForYourPurcharseWrapper>
      <h1>ThankForYourPurcharse</h1>
      <h2 className="name">{data.fullName}</h2>
      <h2>your purcharse will arrive soon...</h2>
      <GiRunningShoe className="icon" />
      <Link to={'/products'}>
        <Button buttonType="primary" onClick={deleteAllData}>
          Back to shop
        </Button>
      </Link>
    </ThankForYourPurcharseWrapper>
  );
}
export default ThankForYourPurcharse;
