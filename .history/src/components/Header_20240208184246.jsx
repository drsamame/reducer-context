import { Filters } from './Filters'
import { useContext } from 'react'
import { FiltersProvider } from '../context/filters'
export function Header ({ changeFilters }) {
  const { setFilters } = useContext(FiltersProvider)
  return (
    <header>
      <h1>Tienda online 🛒 </h1>
      <Filters onChange={setFilters} />
    </header>
  )
}
