import { useState } from "react";
import './Login.css'

export default function LoginSection() {
  const [userEmail, setUserEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:8080/login', {
      method: 'POST',
      body: JSON.stringify({email: userEmail, password: password}),
      headers:{
        'Content-Type': 'application/json'
      } 
    })
      .then(res => res.json())
      .catch(error => console.log('Error:', error))
      .then(response => console.log('Success:', response));
  }

  return (
    <>
    <section className="a"></section>
    <form className="loginForm" onSubmit={handleSubmit}>
      <h1>Bienvenida</h1>
      <input placeholder='Escribe tu correo' type='email' onChange={e => setUserEmail(e.target.value)} value={userEmail} />
      <input placeholder='Escribe tu contraseña' type='password' onChange={e => setPassword(e.target.value)} value={password} />
      <button>Iniciar Sesión</button>
    </form>
    </>
  );
}
