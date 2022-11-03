import { Drawer } from "@mui/material"
import { AiOutlineClose } from "react-icons/ai"
import Button from "../Button/Button"
import ShopCartWrapper from "./ShopCartWrapper.css"

interface Props {
  onClose: Function
}

const ShopCart = (toggle: Props) => {

  const anchor = 'right'

  return (
    <Drawer
      open={true}
      onClose={() => toggle.onClose(false)}
      anchor={anchor}
    >
      <ShopCartWrapper>
        <article className="cart">
          <div className="cart__header">
            <h2>Total items [0]</h2>
            <Button onClick={() => toggle.onClose(false)} className="cart__header--btn" buttonType="">
              <AiOutlineClose className="btn__icon" />
            </Button>
          </div>
          <h1>Cart</h1>
          <Button buttonType="" className="cart_checkout">Checkout</Button>
        </article>
      </ShopCartWrapper>
    </Drawer>
  )
}

export default ShopCart