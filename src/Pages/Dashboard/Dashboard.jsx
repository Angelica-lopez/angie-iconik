import React from "react";
import ResumeCard from "../../components/ResumeCard";
import "./dashboard.css";

const cards = [
  {
    value: "$1000000",
    title: "Ingresos",
    iconName: "money-in",   
  },
  {
    value: "$4000000", 
    title: "Egresos", 
    iconName: "money-out", 
    backgroundCard: "#EAC0C1",
    widthCard: 35,
    heightCard: 35,
  },
  {
    value: "5", 
    title: "Clientes", 
    iconName: "group", 
    backgroundCard: "#C18585",
  },
  {
    value: "10", 
    title: "Proximas citas", 
    iconName: "calendar-check", 
    backgroundCard: "#606060", 
    marginCard: "0",
  },
];

const clientsTable = [
  {
    type: "header",
    data: [
      "clientes",
      "Trabajador/a",
      "fecha",
      "valor",
    ],
  },
  {
    type: "info",
    data: [
      "Stephanie",
      "Rosa",
      "Abril 21",
      "$30.000"
    ],
  },
  {
    type: "info",
    data: [
      "Cinthya",
      "Micari Yurei",
      "Abril 21",
      "$30.000",
    ],
  },
  {
    type: "info",
    data: [
      "Lady",
      "Eli",
      "Abril 21",
      "$30.000",
    ],
  },
  {
    type: "info",
    data: [
      "Edilma",
      "Olga",
      "Abril 21",
      "$30.000",
    ],
  },
]

const servicesTable = [
  {
    type: "header",
    data: [
      "Proveedor",
      "Descripcion",
      "Fecha",
      "Valor",
    ],
  },
  {
    type: "info",
    data: [
      "AAA",
      "Servicio agua",
      "Abril 1",
      "$80.000"
    ],
  },
  {
    type: "info",
    data: [
      "Organic",
      "Compra esmaltes",
      "Abril 12",
      "$100.000",
    ],
  },
]

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
      <div className="table-container">
        <table>
          {
            clientsTable.map(({ type, data }) => (
              <tr>
                {
                  data.map(itm => (
                    <React.Fragment key={itm}>
                      {type === "header" && <th>{itm}</th>}
                      {type === "info" && <td>{itm}</td>}
                    </ React.Fragment>
                  ))
                }
              </tr>
            ))
          }
        </table>
      </div>
    </div>

    <div className="table1">
      <h1 className="title-table-clients">Ultimos Egresos</h1>
      <div className="table-container">
        <table>
          {
            servicesTable.map(({ type, data }) => (
              <tr>
                {
                  data.map(itm => (
                    <React.Fragment key={itm}>
                      {type === "header" && <th>{itm}</th>}
                      {type === "info" && <td>{itm}</td>}
                    </ React.Fragment>
                  ))
                }
              </tr>
            ))
          }
        </table>
      </div>
    </div>
    </div>
  </>
);

export default Dashboard;
