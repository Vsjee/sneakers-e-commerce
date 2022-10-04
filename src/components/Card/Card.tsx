import React, {  useState, useEffect } from 'react';
import { data } from '@/data';
import styled from 'styled-components';

console.log(data.sneakers);

interface myProps {
  children: React.FunctionComponent[]
}

// const [sneaker, setSneaker] = useState({

// })

const Card = () => {
  return (
    <>
      {
        data.sneakers.map(item => {
          return (
            <ul  key={item.id}>
              <li>
                <img src={item.main_picture_url} alt={item.name} width="180px" /> 
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
                      return <option value="">{sized}</option>
                    })
                  }
                </select>
                }
              </li>
              <li>
                ${
                  item.retail_price_cents
                } cents
              </li>
              <li>
                <button>Buy</button>
              </li>
            </ul>
          )
        })
      }
    </>
  )
}

export default Card