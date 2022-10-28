import { Button } from "@/components"
import { data } from "@/data"
import centsToUsd from "@/utilities/centsToUsd"
import { useParams } from "react-router-dom"
import { Cuantity } from "./components"
import SneakerBuyWrapper from "./SneakerBuyWrapper.css"

const sizeSelector = (e:any) => {
  console.clear()
  let selectedSize = e.target.value
  console.log(selectedSize);
}

function SneakerBuy() {

  const { id } = useParams()

  const info = data.sneakers.find(item => item.id === Number(id))  

  return (
    <SneakerBuyWrapper>
      <article className="sizes">
        <h2>
          Price: $ {
            centsToUsd(Number(info?.retail_price_cents))
          }
        </h2>
        <h3>Sizes</h3>
        <ul className="sizes__list">
          {info?.size_range.map(item => {
            return (
              <li key={item}>
                <input type="radio" name="size" id={item.toString()} value={item} onClick={sizeSelector}/>
                <label htmlFor={item.toString()}>{item}</label>
              </li>
            )
          })}
        </ul>
      </article>
      
      <article className="cuantity">
        <Cuantity />
        <Button buttonType="primary" className="cuantity__addCart">add to cart</Button>
      </article>
    </SneakerBuyWrapper>
  )
}
export default SneakerBuy