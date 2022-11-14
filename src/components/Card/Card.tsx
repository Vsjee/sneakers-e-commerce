import { addItemToCart, totalPriceCartIncrement, itemsCartCounter } from '@/redux/state/cart';
import centsToUsd from '@/utilities/centsToUsd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import CardWrapper from './CardWrapper.css';

interface Props {
  dataItem: {
    id: number;
    name: string;
    main_picture_url: string;
    nickname: string;
    release_year: number | null;
    retail_price_cents: number | null;
    size_range: number[];
    category: string[];
  };
}

const Card = ({ dataItem }: Props) => {
  const [selectSize, setSelectedSize] = useState(dataItem.size_range[0]);

  const usd = centsToUsd(Number(dataItem.retail_price_cents));

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(
      addItemToCart({
        id: dataItem.id,
        grid_picture_url: dataItem.main_picture_url,
        brand_name: dataItem.name,
        nickname: dataItem.nickname,
        size: selectSize,
        retail_price_cents: dataItem.retail_price_cents,
      }),
    );
    dispatch(totalPriceCartIncrement({ price: usd }));
    dispatch(itemsCartCounter());
  };

  function handleChange(e: any) {
    let selectSize: number = e.target.value;
    setSelectedSize(selectSize);
  }

  return (
    <CardWrapper>
      <p className="price">${usd}</p>
      <ul key={dataItem.id}>
        <li>
          <Link to={`/products/${dataItem.id}`}>
            <figure>
              <img src={dataItem.main_picture_url} alt={dataItem.name} width="180px" />
            </figure>
          </Link>
        </li>
        <li className="info name">{dataItem.name}</li>
        <li className="info">Surname: {dataItem.nickname}</li>
        <li className="info">Release: {dataItem.release_year}</li>
        <li className="info">Category: {dataItem.category}</li>
        <li className="sizes">
          {
            <select name="sizes" onChange={handleChange}>
              <option value={selectSize}>Select</option>
              {dataItem.size_range.map((sized) => {
                return (
                  <option value={sized} key={sized}>
                    {sized}
                  </option>
                );
              })}
            </select>
          }
        </li>
        <li className="buy__button">
          <Button buttonType="" onClick={handleClick}>
            Buy
          </Button>
        </li>
      </ul>
    </CardWrapper>
  );
};

export default Card;
