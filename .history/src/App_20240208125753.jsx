import { Products } from './components/Products'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { initialProducts } from './mocks/products.json'
import { useState } from 'react'
import { useFilters } from './hooks/useFilters'

function App() {
  const [products, setProducts] = useState(initialProducts)
  const { filters, setFilters, filteredProducts } = useFilters(products)

  return (
    <>
      <Header changeFilters={setFilters} />
      <Products products={filteredProducts()} />
      <Footer filters={filters} />
    </>
  )
}

export default App
