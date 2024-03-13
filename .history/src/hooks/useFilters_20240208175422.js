import { useState } from 'react'
import { FiltersContext } from '../context/filters'
export function useFilters(products) {
  /*
  const [filters, setFilters] = useState({
    price: 1000,
    category: 'all'
  })
  */

  const filters = useContext(FiltersContext)

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
  return { filters, setFilters, filteredProducts }
}
