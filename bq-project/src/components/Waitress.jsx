import './Waitress.css';

export default function Waitress() {
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
              placeholder="ingrese nombre cliente"
              type="text"
              />
            </div>
            <div className="buttons">
              <button>Desayuno</button>
              <button>Almuerzo y Cena</button>
            </div>
            <div className="products">PRODUCTOS
              <div className="card">producto 1</div>
              <div className="card">producto 2</div>
              <div className="card">producto 3</div>
            </div>
            <div className="orders">ORDEN
              <div className="order">orden 1</div>
              <div className="order">orden 2</div>
              <div className="order">orden 3</div>
            </div>
        </>

    )
}