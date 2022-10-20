import { data } from '@/data';
import { Link } from 'react-router-dom';

const Card = () => {
  return (
    <>
      {
        data.sneakers.map(item => {
          return (
            <ul key={item.id}>
              <li>
                <Link to={`/products/${item.id}`}>
                  <figure>
                    <img src={item.main_picture_url} alt={item.name} width="180px" /> 
                  </figure>
                </Link>
              </li>
              <li>{item.name}</li>
              <li>Surname: {item.nickname}</li>
              <li>Release: {item.release_year}</li>
              <li>Category: {item.category}</li>
              <li>
                {
                <select name="sizes" id="">
                  <option value="select">Select</option>
                  {
                    item.size_range.map(sized => {
                      return <option value="" key={sized}>{sized}</option>
                    })
                  }
                </select>
                }
              </li>
              <li>
                {
                  item.retail_price_cents
                } cents
              </li>
              <li>
               <Link to="/products/:id ">
                  <button>Buy</button>
                </Link>
              </li>
            </ul>
          )
        })
      }
    </>
  )
}

export default Card