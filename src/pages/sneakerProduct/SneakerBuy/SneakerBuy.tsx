import { Button, Cuantity } from '@/components';
import { data } from '@/data';
import { addItemToCart, itemsCartCounter, totalPriceCartIncrement } from '@/redux/state/cart';
import centsToUsd from '@/utilities/centsToUsd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import SneakerBuyWrapper from './SneakerBuyWrapper.css';

function SneakerBuy() {
  const [selectedSize, setSelectedSize] = useState(1);
  const { id } = useParams();

  const info = data.sneakers.find((item) => item.id === Number(id));

  const sizeSelector = (e: any) => {
    let selectSize: number = e.target.value;
    setSelectedSize(selectSize);
  };

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(
      addItemToCart({
        id: info?.id,
        grid_picture_url: info?.grid_picture_url,
        brand_name: info?.brand_name,
        nickname: info?.nickname,
        size: selectedSize,
        retail_price_cents: info?.retail_price_cents,
      }),
    );
    dispatch(itemsCartCounter());
    dispatch(totalPriceCartIncrement({ price: centsToUsd(Number(info?.retail_price_cents)) }));
  };

  return (
    <SneakerBuyWrapper>
      <article className="sizes">
        <h2 className="sizes__price">Price: $ {centsToUsd(Number(info?.retail_price_cents))}</h2>
        <h3>Sizes</h3>
        <ul className="sizes__list">
          {info?.size_range.map((item) => {
            return (
              <li key={item}>
                <input type="radio" name="size" id={item.toString()} value={item} onClick={sizeSelector} />
                <label htmlFor={item.toString()}>{item}</label>
              </li>
            );
          })}
        </ul>
      </article>

      <article className="cuantity">
        <Cuantity />
        <Button buttonType="primary" className="cuantity__addCart" onClick={handleClick}>
          add to cart
        </Button>
      </article>
    </SneakerBuyWrapper>
  );
}
export default SneakerBuy;
