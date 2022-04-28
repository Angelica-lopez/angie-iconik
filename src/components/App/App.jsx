import logoIconik from "../../assets/images/logo.png";
import Header from "../Header";
import './app.css';

const App = () => (
  <main className="main">
    <div className="menu">
      <img className='menu__logo-iconik' src={logoIconik} alt="Iconik" />
      <nav className="menu__container">
        <span className="menu__link">Dashboard</span>
        <span className="menu__link">Ingresos</span>
        <span className="menu__link">Egresos</span>
        <span className="menu__link">Trabajadores/as</span>
        <span className="menu__link">Clientes</span>
        <span className="menu__link">Citas</span>
        <span className="menu__link">Productos</span>
        <span className="menu__link">Configuracion</span>
      </nav>
    </div>
    <Header />
    <section className="content">Este es el contenido.</section>
  </main>
);

export default App;
