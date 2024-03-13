import { FiltersContext } from '../context/filters'
import './Footer.css'
import { useContext } from 'react'
export function Footer() {
  const { filters } = useContext(FiltersContext)
  return <footer className='footer'>{JSON.stringify(filters)}</footer>
}
