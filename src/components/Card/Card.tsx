import centsToUsd from '@/utilities/centsToUsd';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import CardWrapper from './CardWrapper.css';

interface Props {
  dataItem: {
    id: number
    name: string
    main_picture_url: string
    nickname: string
    release_year: number | null
    retail_price_cents: number | null
    size_range: number[]
    category: string[]
  }
}

const Card = ({ dataItem }: Props) => {
  return (
    <CardWrapper>
      <ul key={dataItem.id}>
        <li>
          <Link to={`/products/${dataItem.id}`}>
            <figure>
              <img src={dataItem.main_picture_url} alt={dataItem.name} width="180px" />
            </figure>
          </Link>
        </li>
        <li>{dataItem.name}</li>
        <li>Surname: {dataItem.nickname}</li>
        <li>Release: {dataItem.release_year}</li>
        <li>Category: {dataItem.category}</li>
        <li>
          {
            <select name="sizes">
              <option value="select">Select</option>
              {
                dataItem.size_range.map(sized => {
                  return <option value="" key={sized}>{sized}</option>
                })
              }
            </select>
          }
        </li>
        <li>
          ${
            centsToUsd(Number(dataItem?.retail_price_cents))
          }
        </li>
        <li>
          <Link to="/products/:id">
            <Button buttonType=''>Buy</Button>
          </Link>
        </li>
      </ul>
    </CardWrapper>
  )
}

export default Card