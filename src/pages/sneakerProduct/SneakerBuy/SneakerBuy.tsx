import { data } from "@/data"
import { useParams } from "react-router-dom"
import SneakerBuyWrapper from "./styles/SneakerBuyWrapper"

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
      <article>
        <h2>Sizes</h2>

        <ul>
          {info?.size_range.map(item => {
            return (
              <li key={item}>
                <input type="radio" name="size" id={item.toString()} value={item} onClick={sizeSelector}/>
                <label htmlFor={item.toString()}>{item}</label>
              </li>
            )
          })}
        </ul>

        <button>add to cart</button>
      </article>
    </SneakerBuyWrapper>
  )
}
export default SneakerBuy