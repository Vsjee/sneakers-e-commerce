import { data } from '@/data';
import { ItemProps } from '@/redux/state/cart';
import { FaTimes } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import CheckoutItemsWrapper from './CheckoutItemsWrapper.css';

function CheckoutItems() {
  const itemsToCheckout = useSelector((store: ItemProps) => store.cart);
  return (
    <CheckoutItemsWrapper>
      {data.sneakers.map((item, i) => {
        return (
          <div className="itemContainer">
            {i + 1}
            <figure>
              <img src={item.grid_picture_url} alt="sneaker" width={200} />
            </figure>
            <ul className="itemContainer__list">
              <li>
                <span>item id</span>
              </li>
              <li>Nick: {item.nickname}</li>
              <li>Brand:{item.brand_name}</li>
              <li>Sixe: 0</li>
              <li>Price: $Price</li>
            </ul>
            <button className="itemContainer__btn">
              <FaTimes className="itemContainer__btn--icon" />
            </button>
          </div>
        );
      })}
    </CheckoutItemsWrapper>
  );
}
export default CheckoutItems;
