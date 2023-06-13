/* import { useState } from "react"; */
import './Waitress.css';

export default function Waitress() {
  /* const [userName, setUserName] = useState(''); */
  const token = localStorage.getItem('token');
  const handleClick = () => {
    fetch('http://localhost:8080/products/', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'        
      }
    })
      .then(resp => resp.json())
      .then(data => console.log(data));
  }

  return (
    <>
      <div className="nav">
        <h1>BQ</h1>
        <a>Menú</a>
        <a>Órdenes</a>
        <a>Estado Órdenes</a>
      </div>
      <div className="costumer">
        <label>Nombre Cliente: </label>
        <input
          placeholder="Ingrese nombre cliente"
          type="text"
        />
      </div>
      <div className="buttons" onClick={handleClick}>
        <button>Desayuno</button>
        <button>Almuerzo y Cena</button>
      </div>
      <div className="products">PRODUCTOS
        <div className="card">producto 1</div>
        <div className="card">producto 2</div>
        <div className="card">producto 3</div>
      </div>
      <div className="orders">Pedido
        <div className="prod">orden 1</div>
        <div className="prod">orden 2</div>
        <div className="prod">orden 3</div>
        <button>Enviar a cocina</button>
      </div>
    </>

  )
}