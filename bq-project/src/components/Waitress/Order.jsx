import { useOrder } from "../../hook/useOrder";

export function CostumerOrder () {
  const { order, clearOrder, addToOrder } = useOrder()

  return (
    <>
    <ul>
      {order.map(item => (
        <li key={item.id}>
          <button>-</button><p>{item.quantity}</p><button onClick={addToOrder}>+</button>
          <p>{item.name}</p>
          <p>{item.price}</p>
          <p>$ {item.price*item.quantity}</p>
        </li>
      ))}
    </ul>
    <button onClick={clearOrder}>Eliminar Orden</button>
    <strong>Total $ </strong>
    </>
  );

}

export default CostumerOrder