import { Products } from './components/Products'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { products as initialProducts } from './mocks/products.json'
import { useState } from 'react'
import { useFilters } from './hooks/useFilters'

function App() {
  const [products] = useState(initialProducts)
  const { filteredProducts } = useFilters(products)

  return (
    <>
      <Header />
      <Products products={filteredProducts()} />
      <Footer />
    </>
  )
}

export default App
