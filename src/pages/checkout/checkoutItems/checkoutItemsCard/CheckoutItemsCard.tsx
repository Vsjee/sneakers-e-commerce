import { removeItemFormCart, totalPriceCartDecrement } from '@/redux/state/cart';
import { centsToUsd } from '@/utilities';
import { FaTimes } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import CheckoutItemsCardWrapper from './CheckoutItemsCardWrapper.css';

interface Props {
  itemProps: {
    id: string;
    brand_name: string;
    grid_picture_url: string;
    nickname: string;
    size: string;
    retail_price_cents: number | null;
  };

  itemCounter: {
    i: number;
  };
}

function CheckoutItemsCard({ itemProps, itemCounter }: Props) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(removeItemFormCart(itemProps.id));
    dispatch(
      totalPriceCartDecrement({
        price: centsToUsd(Number(itemProps.retail_price_cents)),
      }),
    );
  };

  return (
    <CheckoutItemsCardWrapper>
      <div className="itemContainer">
        <span className="itemContainer__counter">{itemCounter.i + 1}</span>
        <figure>
          <img src={itemProps.grid_picture_url} alt="sneaker" width={200} />
        </figure>
        <ul className="itemContainer__list">
          <li>
            <span>id: {itemProps.id}</span>
          </li>
          <li>Nick: {itemProps.nickname}</li>
          <li>Brand: {itemProps.brand_name}</li>
          <li>Size: {itemProps.size}</li>
          <li>Price: ${centsToUsd(Number(itemProps.retail_price_cents))}</li>
        </ul>
        <button
          className="itemContainer__btn"
          onClick={() => {
            handleClick();
          }}
        >
          <FaTimes className="itemContainer__btn--icon" />
        </button>
      </div>
    </CheckoutItemsCardWrapper>
  );
}
export default CheckoutItemsCard;
