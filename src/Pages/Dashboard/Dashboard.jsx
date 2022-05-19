import React from "react";
import ResumeCard from "../../components/ResumeCard";
import { Table } from "../../components/Table/Table";
import { cards } from "../../Helpers/data"
import "./dashboard.css";
/* tengo que importar la variable "cards", "clientsTable", "servicesTable"  que esta en helpers(data.js)*/


const Dashboard = () => (


  <>
    <h1 className="dashboard-title">Dashboard</h1>
    <h2 className="dashboard-text">Bienvenid@s a Iconik</h2>
    <div className="dashboard-cards">
      {
        cards.map(({ 
          value,
          title,
          iconName,
          backgroundCard,
          widthCard,
          heightCard
        }) => (
          <ResumeCard
            value= {value} 
            title={title}
            iconName={iconName} 
            backgroundCard={backgroundCard}
            widthCard={widthCard}
            heightCard={heightCard}
          />
        ))
      }
    </div>

    <div className="tables-container">
    <div className="table1">
      <h1 className="title-table-clients">Ultimos Ingresos</h1>
      <Table></Table>
    </div>

    <div className="table1">
      <h1 className="title-table-clients">Ultimos Egresos</h1>
      <div className="table-container">
        <Table></Table>
      </div>
    </div>
    </div>
  </>
);

export default Dashboard;
