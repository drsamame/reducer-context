
import { useState } from "react"
export function useFilters() {
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
  return { filters, setFilters, filteredProducts }
}