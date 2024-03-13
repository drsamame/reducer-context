import './Filters.css'
export function Filters() {
  const [minPrice, setMinPrice] = useState(0)
  const handleChangeMinPrice = (e) => {
    setMinPrice(e.target.value)
  }
  return (
    <section className='filters'>
      <div>
        <label htmlFor='price'>Price</label>
        <input
          type='range'
          id='price'
          min='0'
          max='1000'
          onChange={handleChangeMinPrice}
        />
        <span>{minPrice}</span>
      </div>
      <div>
        <label htmlFor='category'>Categoría</label>
        <select htmlFor='category' id='category'>
          <option value='all'>Todas</option>
          <option value='laptops'>Portátiles</option>
          <option value='smartphones'>Celulares</option>
        </select>
      </div>
    </section>
  )
}
