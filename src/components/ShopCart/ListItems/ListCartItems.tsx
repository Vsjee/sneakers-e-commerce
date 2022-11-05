import { CartCard } from './CartCard'
import ListCardItemsWrapper from './ListCardItemsWrapper.css'
import { data } from '@/data'
console.log(data);

function ListCartItems() {
  return (
    <ListCardItemsWrapper>
      {
        data.sneakers.filter(item => {
          return item.brand_name.toLowerCase() === 'gucci'
            ? item
            : null
        }).map(item => {
          return (
            <CartCard itemProps={item}/>
          )
        })
      }
    </ListCardItemsWrapper>
  )
}

export default ListCartItems