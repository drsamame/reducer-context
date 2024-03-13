import { Filters } from './Filters'
import { useContext } from 'react'
import { FiltersContext } from '../context/filters'
export function Header ({ changeFilters }) {
  const { setFilters } = useContext(FiltersContext)
  return (
    <header>
      <h1>Tienda online 🛒 </h1>
      <Filters onChange={setFilters} />
    </header>
  )
}
