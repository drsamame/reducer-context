import { Products } from './components/Products'
import { Header } from './components/Header'
import { products } from './mocks/products.json'
import { useState } from 'react'

function App () {
  const [filters, setFilters] = useState({
    price: 1000,
    category: 'all'
  })

  const filteredProducts = () => {
    return products.filter((product) => {
      if (product.price <= filters.price) {
        if (filters.category === 'all') {
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
      <Header changeFilters={setFilters} />
      <Products products={filteredProducts()} />
    </>
  )
}

export default App
