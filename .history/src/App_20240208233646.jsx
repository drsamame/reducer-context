import { Products } from './components/Products'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Cart } from './components/Cart'
import { products as initialProducts } from './mocks/products.json'
import { useState } from 'react'
import { useFilters } from './hooks/useFilters'
import {} from './context/cart'

function App() {
  const [products] = useState(initialProducts)
  const { filteredProducts } = useFilters(products)

  return (
    <>
      <Header />
      <Products products={filteredProducts()} />
      <Cart />
      <Footer />
    </>
  )
}

export default App
