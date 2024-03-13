import './Filters.css'
import { useState, useId } from 'react'

export function Filters ({ onChange }) {
  const [minPrice, setMinPrice] = useState(0)
  const minPriceFilterID  = useId()

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
          max='1000'
          onChange={handleChangeMinPrice}
        />
        <span>{minPrice}</span>
      </div>
      <div>
        <label htmlFor='category'>Categoría</label>
        <select
          onChange={handleChangeCategory}
          htmlFor='category'
          id='category'
        >
          <option value='all'>Todas</option>
          <option value='laptops'>Portátiles</option>
          <option value='smartphones'>Celulares</option>
        </select>
      </div>
    </section>
  )
}
