import { createContext } from 'react'

export const FiltersContext = createContext()

export function FiltersProvider({ children }) {
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
