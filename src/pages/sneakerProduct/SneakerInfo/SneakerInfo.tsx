import { useParams } from "react-router-dom"
import { data } from "@/data"
import SneakerInfoWrapper from "./styles/SneakerInfoWrapper"

function SneakerInfo() {

  const { id } = useParams()
  
  const info = data.sneakers.find(item => item.id === Number(id))
  
  return (
    <SneakerInfoWrapper>
      <article>
        <ul>
          <li>
            <figure>
              <img src={info?.original_picture_url} alt="sneaker photo"  width={300}/>
            </figure>
          </li>
          <li>
            <h3>{info?.name}</h3>
          </li>
          <li className="infoList">
            <h4>Information</h4>
            <ul>
              <li>Color: {info?.details}</li>
              <li>Designer: {info?.designer}</li>
              <li>Release: {info?.release_year}</li>
              <li>Nickmae: {info?.nickname}</li>
              <li>Category: {info?.category}</li>
              <li>Gender: {info?.gender}</li>
            </ul>
          </li>
        </ul>
      </article>
    </SneakerInfoWrapper>
  )
}

export default SneakerInfo