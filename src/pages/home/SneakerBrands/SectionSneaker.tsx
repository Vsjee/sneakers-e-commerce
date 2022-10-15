import { data } from "@/data"
import SectionSneakerWrapper from './styles/SneakerSection'

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

console.log(listSneakerHome);

const SectionSneaker = () => {
  return (
    <SectionSneakerWrapper>
      {
        listSneakerHome.map((i:any) => {
          return (
            <article key={i.id}>
              <figure>  
                <img src={i.main_picture_url} alt="Sneaker-img"  width={500}/>
              </figure>
              <div>
                <h1>{i.silhouette}</h1>
                <button>Ver</button>
              </div>
            </article>
          )
        })
      }
    </SectionSneakerWrapper>
  )
}

export default SectionSneaker