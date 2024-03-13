import { Products } from './components/Products'
import { products } from './mocks/products.json'
import { useState } from 'react'

function App () {
  const [filters, setFilters] = useState({
    price: 0,
    category: 'all'
  })

  const filteredProducts = (products) => {
    return products.filter((product) => {
      if (product.price >= 0 && product.price <= filters.price) {
        if (
          product.category === 'all' ||
          product.category === filters.category
        ) {
          return true
        }
      } else {
        return false
      }
    })
  }
  console.log(filteredProducts)

  return (
    <>
      <h1>Tienda online 🛒 </h1>
      <Products products={products} />
    </>
  )
}

export default App
