export function Products ({ products }) {
  return (
    <main className='products'>
      <ul>
        {products?.map((item) => {
          return (
            <li key={item.id}>
              <img src='' alt='' />
              {item.title}
            </li>
          )
        })}
      </ul>
    </main>
  )
}
