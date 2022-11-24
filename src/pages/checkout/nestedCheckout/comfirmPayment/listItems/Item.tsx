import { centsToUsd } from '@/utilities';
import ItemWrapper from './Item.css';

interface Props {
  item: {
    grid_picture_url: string;
    brand_name: string;
    size: string;
    retail_price_cents: number | null;
  };
}

function Item({ item }: Props) {
  return (
    <ItemWrapper>
      <picture>
        <img src={item.grid_picture_url} alt={item.brand_name} width={80} />
      </picture>
      <p>brand: {item.brand_name}</p>
      <p>size: {item.size}</p>
      <p>price: ${centsToUsd(Number(item.retail_price_cents))}</p>
    </ItemWrapper>
  );
}
export default Item;
