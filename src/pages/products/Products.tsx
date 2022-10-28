import { Card } from '@/components'
import { useState } from 'react'
import ProductsWrapper from './ProductsWrapper.css'
import { data } from '@/data'
import ProductSearchWrapper from './productsSearch/ProductSearchWrapper.css'
import { BiSearchAlt } from 'react-icons/bi'

const Products = () => {

  const [search, setSearch] = useState('')
  const [handleSearch, setHandleSearch] = useState('')

  return (
    <>
      <ProductSearchWrapper>
        <article>
          <form className='form'>
            <input className='form__searchBar' type="text" placeholder='search your item'
              onChange={(e) => {
                setSearch(e.target.value)
              }}
            />
            <button className='form__submitBtn' type="submit" onClick={(e) => {
              e.preventDefault()
              setHandleSearch(search)
            }}>
              <BiSearchAlt className='submitBtn__icon'/>
            </button>
          </form>
        </article>
      </ProductSearchWrapper>

      <ProductsWrapper>
        {
          data.sneakers.filter((item) => {
            return handleSearch.toLocaleLowerCase() === ''
              ? item
              : item.name.toLocaleLowerCase().includes(handleSearch)
          }).map(item => {
            return (
              <Card dataItem={item} key={item.id} />
            )
          })
        }
      </ProductsWrapper>
    </>
  )
}

export default Products