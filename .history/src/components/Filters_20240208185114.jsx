import './Filters.css'
import { useState, useId } from 'react'

export function Filters() {
  const [minPrice, setMinPrice] = useState(0)
  const minPriceFilterID = useId()
  const categoryId = useId()

  const handleChangeMinPrice = (e) => {
    setMinPrice(e.target.value)
    onChange((prevState) => {
      return { ...prevState, price: e.target.value }
    })
  }
  const handleChangeCategory = (e) => {
    onChange((prevState) => {
      return { ...prevState, category: e.target.value }
    })
  }
  return (
    <section className='filters'>
      <div>
        <label htmlFor={minPriceFilterID}>Price</label>
        <input
          type='range'
          id={minPriceFilterID}
          min='0'
          max='2500'
          onChange={handleChangeMinPrice}
        />
        <span>{minPrice}</span>
      </div>
      <div>
        <label htmlFor={categoryId}>Categoría</label>
        <select onChange={handleChangeCategory} id={categoryId}>
          <option value='all'>Todas</option>
          <option value='laptops'>Portátiles</option>
          <option value='smartphones'>Celulares</option>
        </select>
      </div>
    </section>
  )
}
