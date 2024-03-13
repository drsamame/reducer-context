import { Filters } from './Filters'
import { useContext } from 'react'
export function Header ({ changeFilters }) {
  const { setFilters } = useContext()
  return (
    <header>
      <h1>Tienda online 🛒 </h1>
      <Filters onChange={setFilters} />
    </header>
  )
}
