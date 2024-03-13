import './Products.css'

export function Products ({ products }) {
  return (
    <main className='products'>
      <ul>
        {products?.map((item) => {
          return (
            <li key={item.id}>
              <img src={item.thumbnail} alt={item.title} />
              <div>
                <strong>{item.title}</strong>
              </div>
            </li>
          )
        })}
      </ul>
    </main>
  )
}
