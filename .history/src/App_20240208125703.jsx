import { Products } from './components/Products'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { products } from './mocks/products.json'
import { useState } from 'react'



function App() {
  const [ products, setProducts ] = useState(products)
  const { filters, setFilters, filteredProducts } = useFilters()

  return (
    <>
      <Header changeFilters={setFilters} />
      <Products products={filteredProducts()} />
      <Footer filters={filters} />
    </>
  )
}

export default App
