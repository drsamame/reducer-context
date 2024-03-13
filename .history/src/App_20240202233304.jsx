import { Products } from './components/Products'
import { products } from './mocks/products.json'
import { useState } from 'react'

function App () {
  const [filters, setFilters] = useState({
    price: '0',
    category: 'all'
  })

  return (
    <>
      <h1>Tienda online 🛒 </h1>
      <Products products={products} />
    </>
  )
}

export default App
