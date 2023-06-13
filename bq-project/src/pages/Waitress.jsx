/* import { useState } from "react"; */
import { useState } from 'react';
import './Waitress.css';
import Products from '../components/products';
import { useEffect } from 'react';

export default function Waitress() {
  const [products, setProducts] = useState([]);
  /* const [userName, setUserName] = useState(''); */

  const token = localStorage.getItem('token');
  useEffect(() => {
    fetch('http://localhost:8080/products/', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'        
      }
    })
      .then(resp => resp.json())
      .then(data => setProducts(data))
      .catch(error => console.log(error))
  }, []);
  
  
  const handleClick = () => {}
    

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
      <div className='products'>
        <h3>Productos</h3>
        <Products products={products} />
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