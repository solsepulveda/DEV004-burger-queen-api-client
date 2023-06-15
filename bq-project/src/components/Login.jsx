import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css';

//El primer valor es el current state, el segundo es el que nos va a actualizar
export default function Login() {
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passError, setPassError] = useState('');
  const [resError, setResError] = useState('');
  const navigate = useNavigate(); //se declara navigate

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

    //hacemos nuestra petición
    fetch('http://localhost:8080/login', {
      method: 'POST',
      body: JSON.stringify({ email: userEmail, password: password, }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      //.then(res => res.json())
      .then((res) => {
        // Verifica si la respuesta del servidor tiene un estado "ok" (200-299)
        if (res.ok) {
          //Convierte la respuesta en formato JSON en una promesa para acceder a los datos de la respuesta.
          const jsonPromise = res.json();
          //Se ejecuta cuando se resuelva la promesa y se obtengan los datos de la respuesta en formato JSON.
          jsonPromise.then((resJson) => {
            //Aquí navegamos haciendo match con el rol del user
            if (resJson.user.role === 'waitress') {
              localStorage.setItem('token', resJson.accessToken)
              navigate("/waitress");
            } else if (resJson.user.role === 'chef') {
              localStorage.setItem('token', resJson.accessToken)
              navigate("/chef");
            }
            /* console.log(resJson);  */
          });
        } else {
          // Si la respuesta del servidor no es exitosa, se convierte en texto y se genera un error para ser capturado por el siguiente catch.
          res.text().then(text => { throw new Error(text) })
            .catch(err => {
               // Manejar los errores de respuesta del servidor y establecer el mensaje de error correspondiente
              if (err.message === '"Cannot find user"' || err.message === '"Incorrect password"') {
                // Establece el mensaje de error correspondiente en el estado resError.
                setResError("Correo y/o contraseña incorrecta");
              }
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
        <input
          placeholder='Escribe tu correo'
          type='email'
          onChange={e => {
            setUserEmail(e.target.value)
          }}
          value={userEmail}
        />
        {emailError && (
          <p className="error">
            <br />
            {emailError}
          </p>
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
          <p className="error">
            <br />
            {passError}
          </p>
        )}
        <button>Iniciar Sesión</button>
        {resError && (
          <p className="error">
            <br />
            {resError}
          </p>
        )}
      </form>
    </>
  );
}