/* import { useEffect } from "react"
import { useState } from "react"; */

const token = localStorage.getItem('token');

const LeerPedidos = async() => {
    const response = await fetch('http://localhost:8080/orders', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
      });

    const body = await response.json();
    console.log(body)
}

const Chef = () => {
    const onClickHandler = () => {
      LeerPedidos();
    };
    return (
      <div>
        <button onClick={onClickHandler}>holis</button>
      </div>
    );
  }
  export default Chef;
