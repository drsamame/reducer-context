import { Products } from './components/Products'
import { products } from './mocks/products.json'

function App () {
  return (
    <>
      <h1>Tienda online 🛒 </h1>
      <Products products={products} />
    </>
  )
}

export default App
