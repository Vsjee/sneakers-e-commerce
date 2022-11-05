import CartCardWrapper from './CartCard.css';
import { centsToUsd } from '@/utilities';
import { Button } from '@/components';

interface Props {
  itemProps: {
    grid_picture_url: string
    brand_name: string
    nickname: string
    retail_price_cents: number | null
  }
}

function CartCard({itemProps}: Props) {
  return (
    <CartCardWrapper>
      <picture>
        <img src={itemProps.grid_picture_url} alt="gucci" width={100} />
      </picture>
      <ul>
        <li>
          {itemProps.nickname}
        </li>
        <li>
          {itemProps.brand_name}
        </li>
        <li>
          ${centsToUsd(Number(itemProps.retail_price_cents))}
        </li>
      </ul>
      <Button buttonType=''>Delete</Button>
    </CartCardWrapper>
  );
}

export default CartCard;
