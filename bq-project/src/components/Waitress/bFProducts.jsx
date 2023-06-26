const BFProducts = ({ products }) => {
  const bfProducts = products.filter((item) => item.type === "Desayuno")
  return (
    <div className="products-card">
      {
        bfProducts.map((item) => (
          <div key={item.id} className="product">
            <h4>{item.name}</h4>
            <img src={item.image} />
            <p>${item.price}</p>
            <button>Agregar</button>
          </div>
        ))
      }
    </div>
  )
}

export default BFProducts;