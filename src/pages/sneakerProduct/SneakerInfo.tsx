import { useParams } from "react-router-dom"
import { data } from "@/data"
import { useEffect, useState } from "react"

interface Props {
  box_condition: string
  brand_name: string
  category: []
  collection_slugs: []
  color: string
  designer: string
  details: string
  gender: []
  grid_picture_url: string
  has_picture: boolean
  has_stock: boolean
  id: number
  keywords: []
  main_picture_url: string
  midsole: string
  name: string
  nickname: string
  original_picture_url: string
  product_template_id:  number
  release_date: string
  release_date_unix: number
  release_year: number
  retail_price_cents: number
  size_range: []
  sku: string
  slug: string
}

function SneakerInfo() {

  const { id } = useParams()

  const [test, setTest] = useState({})

  useEffect(() => {
    data.sneakers.find(item => item.id === Number(id)
    ? setTest({ ...item })
    : undefined)
  }, [])

  console.log(test);
  
  return (
    <section>
      <article>
        <ul>
          <li>
            <figure>
              <img src="" alt=""  width={200}/>
            </figure>
          </li>
        </ul>
      </article>
    </section>
  )
}
export default SneakerInfo