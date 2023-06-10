import { useState } from "react";
import './Login.css'

export default function Login() {
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passError, setPassError] = useState('');
  const [resError, setResError] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!password && !userEmail) {
      setPassError("Por favor, escribe una contraseña") || setEmailError("Por favor, escribe un email");
      return;
    } else if (!userEmail) {
      setEmailError("Por favor, escribe un email");
      return;
    } else if (!password) {
      setPassError("Por favor, escribe una contraseña");
      return;
    }
    
    // mover if dentro del catch
    

    fetch('http://localhost:8080/login', {
      method: 'POST',
      body: JSON.stringify({ email: userEmail, password: password }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      //.then(res => res.json())
      .then(res => {
        if (res.ok) {
          const jsonPromise = res.json()
          jsonPromise.then(resJson => console.log(resJson))  
        } else {
          res.text().then(text => { throw new Error(text) })
            .catch(err => {
              console.log('Error res:', err)
              if (err === 'Error: "Cannot find user"' || err === 'Error: "Incorrect password"') {
                setResError("Correo y/o contraseña incorrecta");
              }
              console.log(resError);              
            })
            
        }
      })
      .catch(err => console.log('Error:', err))
  }

  return (
    <>
      <section className="indexImg"></section>
      <form className="loginForm" onSubmit={handleSubmit} >
        <h1>Bienvenido</h1>
        {resError && (
          <p1 className="error">
            <br />
            {resError}
          </p1>
        )}
        <input
          placeholder='Escribe tu correo'
          type='email'
          onChange={e => { 
            setUserEmail(e.target.value)
          }}          
          value={userEmail}
        />
        {emailError && (
          <p1 className="error">
            <br />
            {emailError}
          </p1>
        )}
        <input
          placeholder='Escribe tu contraseña'
          type='password'
          onChange={e => {
            setPassword(e.target.value)
          }}
          value={password}
        />
        {passError && (
          <p1 className="error">
            <br />
            {passError}
          </p1>
        )}
        <button>Iniciar Sesión</button>
      </form>
    </>
  );
}
