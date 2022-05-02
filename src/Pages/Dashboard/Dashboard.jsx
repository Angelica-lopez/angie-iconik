import TargetMenu from "../../components/Resume-card";
import "./dashboard.css";

const Dashboard = () => (
  <>
    <h1 className="dashboard-title">Dashboard</h1>
    <h2 className="dashboard-text">Bienvenid@s a Iconik</h2>
    <div className="dashboard-cards">
      <TargetMenu value="$1000000" cardName="Ingresos" iconName="money-in"></TargetMenu>
      <TargetMenu value="$4000000" cardName="Egresos" iconName="money-in" backgroundCard="#EAC0C1"></TargetMenu>
      <TargetMenu value="5" cardName="Clientes" iconName="money-in" backgroundCard="#C18585"></TargetMenu>
      <TargetMenu value="10" cardName="Proximas citas" iconName="money-in" backgroundCard="#606060" marginCard="0"></TargetMenu>
    </div>
  </>
);

export default Dashboard;
