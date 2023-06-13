import Login from './pages/Login.jsx';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Waitress from './pages/Waitress.jsx';
import Chef from './pages/Chef.jsx';

export default function App() {
  return (
    <>
      <Router>
        {<Routes>
          <Route path="/" element={<Login />} />
          <Route path="/waitress" element={<Waitress />} />
          <Route path="/Chef" element={<Chef />} />
        </Routes>}
      </Router>
    </>
  );
}