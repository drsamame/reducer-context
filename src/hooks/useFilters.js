import { useContext } from 'react'
import { FiltersContext } from '../context/filters'
export function useFilters(products) {
  const { filters, setFilters } = useContext(FiltersContext)

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
