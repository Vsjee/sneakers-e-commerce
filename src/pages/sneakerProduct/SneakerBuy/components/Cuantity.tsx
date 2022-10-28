import { useState } from "react"
import CuantityWrapper from "./CuantityWrapper.css"

const useCuantitySelector = () => {

  const [cuantity, setCuantity] = useState(0)

  const increment = () => setCuantity(() => cuantity + 1)
  const decrement = () => setCuantity(() => cuantity > 0 ? cuantity - 1 : 0)

  return {
    cuantity,
    increment,
    decrement
  }
}

function Cuantity() {

  const {cuantity, increment, decrement} = useCuantitySelector()

  return (
    <CuantityWrapper>
      <button className="btn" onClick={decrement}>-</button>
      <input className="label" type="text" maxLength={2} value={cuantity}/>
      <button className="btn" onClick={increment}>+</button>
    </CuantityWrapper>
  )
}

export default Cuantity