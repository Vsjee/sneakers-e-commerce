import { ItemProps } from '@/redux/state/cart';
import { useSelector } from 'react-redux';
import CheckoutItemsCard from './checkoutItemsCard/CheckoutItemsCard';
import CheckoutItemsWrapper from './CheckoutItemsWrapper.css';

function CheckoutItems() {
  const itemsToCheckout = useSelector((store: ItemProps) => store.cart);

  return (
    <CheckoutItemsWrapper>
      {itemsToCheckout.map((item, i) => (
        <CheckoutItemsCard itemProps={item} itemCounter={{ i }} />
      ))}
    </CheckoutItemsWrapper>
  );
}
export default CheckoutItems;
