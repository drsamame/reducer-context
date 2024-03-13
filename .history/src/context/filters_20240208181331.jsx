import { createContext, useState } from 'react'

export const FiltersContext = createContext()

export function FiltersProvider({ children }) {
  const [filters, setFilters] = useState({
    price: 1000,
    category: 'all'
  })
  return (
    <FiltersContext.Provider
      value={{
        minPrice: 0,
        category: 'all'
      }}
    >
      {children}
    </FiltersContext.Provider>
  )
}
