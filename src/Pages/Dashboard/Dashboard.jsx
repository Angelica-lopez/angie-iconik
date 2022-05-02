import ResumeCard from "../../components/ResumeCard";
import "./dashboard.css";

const Dashboard = () => (
  <>
    <h1 className="dashboard-title">Dashboard</h1>
    <h2 className="dashboard-text">Bienvenid@s a Iconik</h2>
    <div className="dashboard-cards">
      <ResumeCard 
        value="$1000000"
        cardName="Ingresos"
        iconName="money-in"
      />
      <ResumeCard value="$4000000" cardName="Egresos" iconName="money-out" backgroundCard="#EAC0C1"/>
      <ResumeCard value="5" cardName="Clientes" iconName="group" backgroundCard="#C18585"/>
      <ResumeCard value="10" cardName="Proximas citas" iconName="calendar-check" backgroundCard="#606060" marginCard="0"/>
    </div>
  </>
);

export default Dashboard;
