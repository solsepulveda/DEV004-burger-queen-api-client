import { useOrder } from '../../hook/useOrder';

const Products = ({ products }) => {
  const { addToOrder } = useOrder()
  
  return (
    <div className="products-card">
      {
        products.map((product) => (
          <div key={product.id} className="product">
            <h4>{product.name}</h4>
            <img src={product.image} />
            <p>${product.price}</p>
            <button onClick={() => addToOrder(product)}>Agregar</button>
          </div>
        ))
      }
    </div>
  )
}

export default Products;




