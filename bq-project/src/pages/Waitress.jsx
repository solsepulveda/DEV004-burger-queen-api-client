/* import { useState } from "react"; */
import { useState } from 'react';
import './Waitress.css';
import Products from '../components/products';
import { useEffect } from 'react';

export default function Waitress() {
  const [products, setProducts] = useState([]);
  const [costumerName, setCostumerrName] = useState('');
  /* const [order, setOrder] = useState([]); */

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
    
  const handleClickBF = () => {
    setProducts(products.filter((item) => item.type === "Desayuno"))
  }

  const handleClickLandD = () => {
    setProducts(products.filter((item) => item.type === "Almuerzo"))
  }

  /* const addProduct = () => {

  } */
 /*  const handleNewOrder = () => {

  } */

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
          onChange={e => setCostumerrName(e.target.value)}
        />
      </div>
      <div className="buttons">
        <button onClick={handleClickBF}>Desayuno</button>
        <button onClick={handleClickLandD}>Almuerzo y Cena</button>
      </div>
      <div className='products'>
        <h2>Productos</h2>
        <Products products={products} />
      </div>
      <div className="orders">
        <h2>Pedido</h2>
        <h4>Cliente: {costumerName}</h4>
        
        <button>Enviar a cocina</button>
      </div>
    </>

  )
}