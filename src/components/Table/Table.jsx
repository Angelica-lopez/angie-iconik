import PropTypes from "prop-types";
import React from "react";
import { cards, clientsTable, servicesTable, tableComponents } from "../../Helpers/data.js"
import "./table.css";

/* tengo que importar la variable "cards", "clientsTable", "servicesTable"  que esta en helpers(data.js)*/

const infoTableClients = (row) => {
  servicesTable.map(({ type, row }) => (
    <tr>
      {
        servicesTable.map(({ type, row }) => (
          <React.Fragment key={row}>
            {type === "header" && <th>{row}</th>}
            {type === "info" && <td>{row}</td>}
          </ React.Fragment>
        ))
      }
    </tr>
  ))
}


export const Table = () => (  
  <div className="content__table">
    <table className="table">
      {
        servicesTable.map(({ type, row }) => (
          <React.Fragment>
            {type === "header" && <theader>{infoTableClients(row)}</theader>}
            {type === "body" && <tbody>{infoTableClients(row)}</tbody>}
          </ React.Fragment>
        ))
      }
    </table>
  </div>
);

