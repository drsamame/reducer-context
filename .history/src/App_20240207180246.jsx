import { Products } from './components/Products'
import { Header } from './components/Header'
import { products } from './mocks/products.json'
import { useState } from 'react'

function App () {
  const [filters, setFilters] = useState({
    price: 10000,
    category: 'all'
  })

  const filteredProducts = () => {
    return products.filter((product) => {
      console.log(product.price, filters.price)
      if (product.price <= filters.price) {
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
      <Header changeFilters={setFilters} />
      <Products products={filteredProducts()} />
    </>
  )
}

export default App
