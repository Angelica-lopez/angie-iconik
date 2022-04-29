import { Link } from "react-router-dom"
import logoIconik from "../../assets/images/logo.png";
import "./menu.css";

const Menu = () => (
  <div className="menu">
    <img className='menu__logo-iconik' src={logoIconik} alt="Iconik" />
    <nav className="menu__container">
      <Link to="/" className="menu__link">Dashboard</Link>
      <Link to="/ingresos" className="menu__link">Ingresos</Link>
      <Link to="/egresos" className="menu__link">Egresos</Link>
      <Link to="/trabajadores" className="menu__link">Trabajadores/as</Link>
      <Link to="/clientes" className="menu__link">Clientes</Link>
      <Link to="/citas" className="menu__link">Citas</Link>
      <Link to="/productos" className="menu__link">Productos</Link>
      <Link to="/configuracion" className="menu__link">Configuracion</Link>
    </nav>
  </div>
);

export default Menu;
