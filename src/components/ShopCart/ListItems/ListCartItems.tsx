import { CartCard } from './CartCard';
import ListCardItemsWrapper from './ListCardItemsWrapper.css';
import { useSelector } from 'react-redux';
import { ItemProps } from '@/redux/state/cart';

function ListCartItems() {
  const cartStore = useSelector((store: ItemProps) => store.cart);

  return (
    <ListCardItemsWrapper>
      {cartStore.map((item) => {
        return <CartCard itemProps={item} />;
      })}
    </ListCardItemsWrapper>
  );
}

export default ListCartItems;
