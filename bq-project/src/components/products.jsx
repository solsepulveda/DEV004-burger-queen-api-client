import React from "react";

const Products = ({products}) => {
  return (
    <div className="products-card">
    {
      products.map((item, i) => (
        <div key={i} className="product">
          <h5>{item.name}</h5>
          <img src={item.image} />
          <p>${item.price}</p>
          <button>Agregar</button>
        </div>
      ))
    }
    </div>
  )
}

export default Products
