import React from "react";
import { FaArrowAltCircleRight, FaUsers } from "react-icons/fa";
import { Alert, Table } from "react-bootstrap";
import "./clients.css";
import { Link } from "react-router-dom";

const clients = () => {
  const clients = [{name:"ahmed"},{name:"mohamed"}];
  return (
    <div className="clint">
      <div className="row clint_head ">
        <FaUsers />
        <span className="ml-2">Clients</span>
      </div>
      <div className="clint_info row text-center">
        {clients.length === 0 ? (
          <Alert variant="dark col-12 mt-5 ">
            {" "}
            there is no Clint <Link to="/">Add Client</Link>{" "}
          </Alert>
        ) : (
          <Table striped bordered hover size="sm" className="mt-3">
            <thead>
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>User Name</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {clients.map(client => 
                <tr>
                  <td>1</td>
                  <td>{client.name}</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td><Link to={`/clint/${client.id}`} className="btn btn-sacandary">
                  <span className="mr-2">Details</span>
                      <FaArrowAltCircleRight/>
                  </Link></td>
                </tr>
              )}
            </tbody>
          </Table>
        )}
      </div>
    </div>
  );
};

export default clients;
