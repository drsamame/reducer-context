import { Products } from './components/Products'
import { products } from './mocks/products.json'
import { useState } from 'react'

function App () {
  const [filters, setFilters] = useState({
    price: 40,
    category: 'laptops'
  })

  const filteredProducts = () => {
    return products.filter((product) => {
      if (product.price >= 0 && product.price <= filters.price) {
        return true
      } else {
        return false
      }
    })
  }
  console.log(filteredProducts())
  console.log(products)

  return (
    <>
      <h1>Tienda online 🛒 </h1>
      <Products products={filteredProducts} />
    </>
  )
}

export default App
