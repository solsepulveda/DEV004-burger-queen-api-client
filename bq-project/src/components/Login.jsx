import { useState } from "react";
import './Login.css'

export default function LoginSection() {
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!password || !userEmail) {
      setPassError("Por favor, escribe una contraseña") || setEmailError("Por favor, escribe un email");
      return;
    }

    if (!userEmail) {
      setEmailError("Por favor, escribe un email");
      return;
    }

    if (!password) {
      setPassError("Por favor, escribe una contraseña");
      return;
    }

    fetch('http://localhost:8080/login', {
      method: 'POST',
      body: JSON.stringify({ email: userEmail, password: password }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .catch(err => console.log('Error:', err))
      .then(response => console.log('Success:', response));
  }

  return (
    <>
      <section className="a"></section>
      <form className="loginForm" onSubmit={handleSubmit}>
        <h1>Bienvenido</h1>
        <input
          placeholder='Escribe tu correo'
          type='email'
          onChange={e => setUserEmail(e.target.value)}
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
          onChange={e => setPassword(e.target.value)}
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
