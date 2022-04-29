import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from "../Header";
import Menu from "../Menu";
import Dashboard from "../../Pages/Dashboard";
import Income from "../../Pages/Income";
import Expenses from "../../Pages/Expenses";
import Workers from "../../Pages/Workers";
import Clients from "../../Pages/Clients";
import Appointment from "../../Pages/Appointment";
import Products from "../../Pages/Products";
import Configuration from "../../Pages/Configuration";
import './app.css';

const App = () => (
  <BrowserRouter>
    <main className="main">
      <Menu/>
      <Header />
      <section className="content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/ingresos" element={<Income />} />
          <Route path="/egresos" element={<Expenses />} />
          <Route path="/trabajadores" element={<Workers />} />
          <Route path="/clientes" element={<Clients />} />
          <Route path="/citas" element={<Appointment />} />
          <Route path="/productos" element={<Products />} />
          <Route path="/configuracion" element={<Configuration />} />
        </Routes>
      </section>
    </main>
  </BrowserRouter>
);

export default App;
