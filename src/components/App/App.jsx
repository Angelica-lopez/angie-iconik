import Header from "../Header";
import Menu from "../Menu";
import './app.css';

const App = () => (
  <main className="main">
    <Menu/>
    <Header />
    <section className="content">Este es el contenido.</section>
  </main>
);

export default App;
