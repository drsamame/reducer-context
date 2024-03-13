import { Products } from './components/Products'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { products } from './mocks/products.json'
import { useState } from 'react'

function useFilters() {
  const [filters, setFilters] = useState({
    price: 1000,
    category: 'all'
  })

  const filteredProducts = () => {
    return products.filter((product) => {
      return (
        product.price >= filters.price && product.category === filters.category
      )
    })
  }

  return {
    filters,
    setFilters,
    filteredProducts
  }
}
function App() {
  const { filters, setFilters, filteredProducts } = useFilters()

  return (
    <>
      {filters}
      <Header changeFilters={setFilters} />
      <Products products={filteredProducts()} />
      <Footer filters={filters} />
    </>
  )
}

export default App
