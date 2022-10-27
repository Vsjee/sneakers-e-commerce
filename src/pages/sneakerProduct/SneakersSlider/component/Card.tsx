import { Button } from "@/components";
import CardWrapper  from "./CardWrapper.css";
import { Link } from 'react-router-dom'
import { ScrollToTop } from "@/utilities";

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
      <ScrollToTop />
      <img src={item.item.main_picture_url} alt="name" width={200}/>
      <p style={{fontWeight: 'bold'}}>{item.item.nickname}</p>
        <Link to={`/products/${item.item.id}`}>
          <Button buttonType="">More info.</Button>
        </Link>
    </CardWrapper>
  )
}

export default Card