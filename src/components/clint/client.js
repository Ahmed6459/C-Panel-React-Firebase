import React from "react";
import { FaUsers,FaRegTrashAlt, FaEdit } from "react-icons/fa";
import { Alert } from "react-bootstrap";
import "./clients.css";
import { Link,Redirect,useHistory } from "react-router-dom";

import Spenner from "../layout/spenner";
import {removeTask} from "../../actions/taskaction"

//redux and firebase
import { useSelector,useDispatch } from "react-redux";
import { useFirestoreConnect, isLoaded, isEmpty } from "react-redux-firebase";


const Clients = () => {

  const history = useHistory()

  const dispatch = useDispatch()

  useFirestoreConnect(["client"]); //the name of collection  on firebase

  const clients = useSelector((state) => state.firestore.ordered.client);

  const auth = useSelector(state=>state.firebase.auth)

  const {uid} = auth;

//handel remove function
  const removeClientHandler = (id)=>{
    dispatch(removeTask(id));
}
  // noted that Clients loaded async so we must check if it undefied or not
  const totalBalance =
    clients &&
    clients.reduce(
      (acc, client) => parseFloat(acc + Number(client.balance)),
      0
    );


    //
if(!uid){
  return <Redirect to="/login" />
}

  if (!isLoaded(clients)) {
    return <Spenner />;
  }

  if (isEmpty(clients)) {
    return (
      <Alert variant="dark w-100 mt-5 text-center ">
        there is no client <Link to="/client/add">Add Client</Link>
      </Alert>
    );
  }
  return (
    <div className="client">
      <div className="row client_head ">
        <div className="col">
          <FaUsers />
          <span className="ml-2">Clients</span>
        </div>
        <div className="col text-right">
          <span className="d-b">Total: </span>
          <span className="ml-auto "><small>$</small>{Number(totalBalance).toFixed(2)}</span>
        </div>
      </div>
      <div className="client_info row text-center">
        <table className="mt-3 w-100 table-bordered">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Balance</th>
              <th>Deleate</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => (
              <tr key={client.id}>
                <td>{client.fristname}</td>
                <td>{client.lastname}</td>
                <td>{client.email}</td>
                <td>{client.phone}</td>
                <td>${client.balance}</td>
                <td>
                <button className="btn btn-danger" onClick={()=>removeClientHandler(client.id)}>   
                Remove {" "}              
                <FaRegTrashAlt/>
                </button>
                </td>
                <td>
                <button className="btn btn-primary" onClick={()=>history.push(`/clint/edit/${client.id}`)} >  
                Edit {" "}               
                <FaEdit/>
                </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Clients;
