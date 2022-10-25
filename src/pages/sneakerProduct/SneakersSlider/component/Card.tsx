import { Button } from "@/components";
import CardWrapper  from "./CardWrapper.css";

interface Props {
  item: {
    main_picture_url: string
    id: string
    nickname: string
  }
}

function Card(item: Props) {
  return (
    <CardWrapper> 
      <img src={item.item.main_picture_url} alt="name" width={200}/>
      <p style={{fontWeight: 'bold'}}>{item.item.nickname}</p>
      <Button buttonType="">More info.</Button>
    </CardWrapper>
  )
}
export default Card