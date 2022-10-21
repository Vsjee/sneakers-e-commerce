import { SneakerBuy } from "./SneakerBuy";
import { SneakerInfo } from "./SneakerInfo";
import { SneakerSlider } from "./SneakersSlider";
import SneakerProductWrapper from "./styles/SneakerProductWrapper";

function SneakerProduct() {
  return (
    <SneakerProductWrapper>
      <SneakerInfo />
      <SneakerBuy />
      <SneakerSlider />
    </SneakerProductWrapper>
  )
}
export default SneakerProduct