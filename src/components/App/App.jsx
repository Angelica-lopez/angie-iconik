import logoIconik from "../../assets/images/logo.png";
import './app.css';

const App = () => (
  <>
    <section className="menu">
      <img className='menu__logoIconik' src={logoIconik} alt="Iconik" />
      <div className="menu__container">
        <span className="menu__container-item">Dashboard</span>
        <span className="menu__container-item">Ingresos</span>
        <span className="menu__container-item">Egresos</span>
        <span className="menu__container-item">Trabajadores/as</span>
        <span className="menu__container-item">Clientes</span>
        <span className="menu__container-item">Citas</span>
        <span className="menu__container-item">Productos</span>
        <span className="menu__container-item">Configuracion</span>
      </div>
    </section>

    <header className="header">
      <span className="header__name">Angie Lopez H.</span>
      <button className="header__button">Salir</button>
    </header>

    <span>Este es el contenido.</span>
  </>
);

export default App;
