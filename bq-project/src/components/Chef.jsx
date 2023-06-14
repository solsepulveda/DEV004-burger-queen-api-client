import { useEffect, useState } from "react";
import "./Chef.css";

const token = localStorage.getItem("token");

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

  useEffect(() => {
    const fetchData = async () => {
      const data = await LeerPedidos();
      setPedidos(data);
    };

    fetchData();
  }, []);


  return (
    <div>
      <div className="nav">
        <a>Órdenes Chef</a>
      </div>
      <div className="contenedor">
        {pedidos.map((pedido) => (
          <div
            key={pedido.id}
            className={`recuadro ${pedido.status === 'pending' ? 'pending' : 'delivered'}`}
          >
            <h3>{pedido.client}</h3>
            <h4>{pedido.status}</h4>
            <ul className="lista">
              {pedido.products?.map((producto) => (
                <li key={producto.product.id} className="listaAgrupada">
                  {producto.product.name}
                </li>
              ))}
            </ul>
            {pedido.status === 'pending' && <button>Listo</button>}
            {pedido.status === 'delivered' && <h3>Orden Completada</h3>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chef;