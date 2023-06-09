import { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  /* const [error, setError] = useState(''); */
  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");
  const navigate = useNavigate(); //se declara navigate


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!password || !userEmail) {
      setPassError("Por favor, escribe una contraseña") ||
        setEmailError("Por favor, escribe un email");
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

    fetch("http://localhost:8080/login", {
      method: "POST",
      body: JSON.stringify({ email: userEmail, password: password }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          const jsonPromise = res.json();
          jsonPromise.then((resJson) => {
            //Aquí navegamos haciendo match con el rol del user
            if (resJson.user.role === 'waitress') {
              navigate("/waitress");
            } else if (resJson.user.role === 'chef') {
              navigate("/chef");
            }
            console.log(resJson);
          });
        } else {
          res
            .text()
            .then((text) => {
              throw new Error(text);
            })
            .catch((err) => console.log("Error res:", err));
        }
      })
      .catch((err) => console.log("Error:", err));
  };

  return (
    <>
      <section className="a"></section>
      <form className="loginForm" onSubmit={handleSubmit}>
        <h1>Bienvenida</h1>
        <input
          placeholder="Escribe tu correo"
          type="email"
          onChange={(e) => setUserEmail(e.target.value)}
          value={userEmail}
        />
        {emailError && (
          <p1 className="error">
            <br />
            {emailError}
          </p1>
        )}
        <input
          placeholder="Escribe tu contraseña"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        {passError && (
          <p1 className="error">
            <br />
            {passError}
          </p1>
        )}
        {/* {error && <label className="error">{error}</label>} {} */}
        <button>Iniciar Sesión</button>
      </form>
    </>
  );
}
