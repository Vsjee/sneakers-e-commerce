import CartCardWrapper from './CartCard.css';
import { centsToUsd } from '@/utilities';
import { Button, Cuantity } from '@/components';
import { removeItemFormCart, totalPriceCartDecrement } from '@/redux/state/cart';
import { useDispatch } from 'react-redux';

interface Props {
  itemProps: {
    id: string;
    grid_picture_url: string;
    brand_name: string;
    nickname: string;
    size: string;
    retail_price_cents: number | null;
  };
}

function CartCard({ itemProps }: Props) {
  const distpatch = useDispatch();
  const handleClick = () => {
    distpatch(removeItemFormCart({ id: itemProps.id }));
    distpatch(totalPriceCartDecrement({ price: centsToUsd(Number(itemProps.retail_price_cents)) }));
  };

  return (
    <CartCardWrapper>
      <div className="item__info">
        <picture>
          <img src={itemProps.grid_picture_url} alt="sneaker" width={100} />
        </picture>
        <ul>
          <li>Nick: {itemProps.nickname}</li>
          <li>Brand: {itemProps.brand_name}</li>
          <li>Size: {itemProps.size}</li>
          <li>Price: ${centsToUsd(Number(itemProps.retail_price_cents))}</li>
        </ul>
      </div>
      <div className="item__logic">
        <Cuantity />
        <Button buttonType="" onClick={handleClick}>
          Delete
        </Button>
      </div>
    </CartCardWrapper>
  );
}

export default CartCard;
