const LunchProducts = ({ products }) => {
  const lunchProducts = products.filter((item) => item.type === "Almuerzo");
  return (
    <div className="products-card">
      {
        lunchProducts.map((item) => (
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

export default LunchProducts;