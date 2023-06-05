import { useState } from "react";


export default function LoginSection() {
  const [userName, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefaul()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder='Escribe tu correo' type='email' onChange={e => setUsername(e.target.value)} value={userName} />
      <input placeholder='Escribe tu contraseña' type='password' onChange={e => setPassword(e.target.value)} value={password} />
      <button>Iniciar Sesión</button>
    </form>
  );
}
