import { Button } from "@/components"
import { data } from "@/data"
import { Link } from "react-router-dom"
import SectionSneakerWrapper from './SneakerSection.css'

let listBrands = [
  'Air Jordan',
  'Champion',
  'Nike',
  'Gucci',
  'Converse',
  'adidas',
  'Vans'
]

let listSneakerHome: any = []

for (let item = 0; item<listBrands.length; item++) {
  listSneakerHome.push({...data.sneakers.find(i => i.brand_name === listBrands[item])})
}

const SectionSneaker = () => {
  return (
    <SectionSneakerWrapper>
      {
        listSneakerHome.map((i:any) => {
          return (
            <article key={i.id}>               
              <Link to={`/products/${i.id}`}>
                <figure> 
                  <img src={i.main_picture_url} alt="Sneaker-img"  width={500} className="sneaker__img"/>
                </figure>
              </Link>
              <div>
                <h1>{i.silhouette}</h1>
                <Link to={`/products/${i.id}`}>
                  <Button buttonType="primary">Ver</Button>
                </Link>
              </div>
            </article>
          )
        })
      }
    </SectionSneakerWrapper>
  )
}

export default SectionSneaker