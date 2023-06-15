import { useEffect, useState } from "react";
import "./Chef.css";

//Hago permanencia más esta no es la mejor forma :(
const token = localStorage.getItem("token");

//hago mi petición
const LeerPedidos = async () => {
  const response = await fetch("http://localhost:8080/orders", {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  const body = await response.json();
  console.log(body);
  return body;
};

const Chef = () => {
  const [pedidos, setPedidos] = useState([]);
  const [pedidosFiltrados, setPedidosFiltrados] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await LeerPedidos();
      setPedidos(data);
      setPedidosFiltrados(data);
    };

    fetchData();
  }, []);
  const handleClickAll = () => {
    setPedidosFiltrados(pedidos.filter((pedido) => pedido.status));
  };
  const handleClickPending = () => {
    setPedidosFiltrados(pedidos.filter((pedido) => pedido.status === "pending"));
  };

  const handleClickDelivered = () => {
    setPedidosFiltrados(pedidos.filter((pedido) => pedido.status === "delivered"));
  };

  const handleClickDelivering = () => {
    setPedidosFiltrados(pedidos.filter((pedido) => pedido.status === "delivering"));
  };


  return (
    <div>
      <div className="nav">
      <a onClick={() => handleClickAll(pedidos.status)}>
          Todas las órdenes
        </a>
        <a onClick={() => handleClickPending(pedidos.status)}>
          Órdenes pendientes
        </a>
        <a onClick={() => handleClickDelivering(pedidos.status)}>
          Órdenes listas
        </a>
        <a onClick={() => handleClickDelivered(pedidos.status)}>
          Órdenes entregadas
        </a>
      </div>
      <div className="contenedor">
        {pedidosFiltrados.map((pedido) => (
          <div
            key={pedido.id}
            className={`recuadro ${
              pedido.status === "pending" ? "pending" : "delivered"
            }`}
          >
            {" "}
            <h3>{pedido.client}</h3>
            <h4>{pedido.status}</h4>
            <ul className="lista">
              {pedido.products?.map((producto) => (
                <li key={producto.product.id} className="listaAgrupada">
                  {producto.product.name}
                </li>
              ))}
            </ul>
            {pedido.status === "pending" && (
              <button /* onClick={() => handleClickBF(pedido.status)} */>
                Listo
              </button>
            )}
            {pedido.status === "delivered" && <h3>Orden Completada</h3>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chef;
