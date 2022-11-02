import WelcomeWrapper from "./WelcomeWrapper.css"
import {FaAngleDown} from 'react-icons/fa'

const goDown = () => {
  document.documentElement.scrollTo({
    top: 680,
    left: 0
  })
}

function Welcome() {
  return (
    <WelcomeWrapper>
      <div>
        <h1 className="shopTitle">SNEAK <span>SHOP</span></h1>
        <button className="downBtn">
          <FaAngleDown className="downBtn__icon" onClick={goDown}/>
        </button>
      </div>
    </WelcomeWrapper>
  )
}

export default Welcome