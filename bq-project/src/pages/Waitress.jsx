import { useState } from 'react';
import './Waitress.css';
import Products from '../components/Waitress/products';
import BFProducts from '../components/Waitress/bFProducts';
import LunchProducts from '../components/Waitress/lunchProducts';
import { useEffect } from 'react';
import Order from '../components/Waitress/Order'
import { OrderProvider } from '../context/order';


export default function Waitress() {
  const [products, setProducts] = useState([]);
  const [costumerName, setCostumerrName] = useState('');
  const [bfProducts, setBfProducts] = useState(false);
  const [lunchProducts, setLunchProducts] = useState(false);
  const [allProducts, setAllProducts] = useState(true)
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

  const handleClickAll = () => {
    setAllProducts(true);
    setBfProducts(false);
    setLunchProducts(false);
  }
  
  const handleClickBF = () => {
    setAllProducts(false);
    setBfProducts(true);
    setLunchProducts(false);
  }

  const handleClickLunch = () => {
    setAllProducts(false);
    setLunchProducts(true);
    setBfProducts(false);
  }

  /* const addProduct = () => {

  } */
  /*  const handleNewOrder = () => {
 
   } */

  return (
    <OrderProvider>
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
        <button onClick={handleClickAll}>Todos</button>
        <button onClick={handleClickBF}>Desayuno</button>
        <button onClick={handleClickLunch}>Almuerzo y Cena</button>
      </div>
      <div className='products'>
        <h2>Productos</h2>
        {allProducts && (<Products products={products} />)}
        {bfProducts && (<BFProducts products={products} />)}
        {lunchProducts && (<LunchProducts products={products} />)}  
      </div>
      <div className="orders">
        <h2>Pedido</h2>
        <h4>Cliente: {costumerName}</h4>
        <Order />
        <button>Enviar a cocina</button>
      </div>
    </OrderProvider>

  )
}