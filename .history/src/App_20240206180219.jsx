import { Products } from './components/Products'
import { products } from './mocks/products.json'
import { useState } from 'react'

function App () {
  const [filters, setFilters] = useState({
    price: 10000,
    category: 'laptops'
  })

  const filteredProducts = () => {
    return products.filter((product) => {
      if (product.price >= 0 && product.price <= filters.price) {
        if (products.category === 'all') {
          return true
        } else {
          return product.category === filters.category
        }
      } else {
        return false
      }
    })
  }
  return (
    <>
      <h1>Tienda online 🛒 </h1>
      <Products products={filteredProducts()} />
    </>
  )
}

export default App
