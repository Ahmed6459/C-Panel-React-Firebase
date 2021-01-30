import React from "react";
import { useHistory, useParams } from "react-router-dom";
import "./clients.css";
import Spenner from "../layout/spenner"

import { useSelector } from "react-redux";
import { getFirebase, useFirestoreConnect } from "react-redux-firebase";
import { useForm } from "react-hook-form";
import {isLoaded, isEmpty } from "react-redux-firebase";


export default function DitClient() {
  const clientId = useParams();
  const {id} = clientId
const history = useHistory();
  const firestore = getFirebase().firestore();

  useFirestoreConnect(["client"]);

  const clients = useSelector((state) => state.firestore.ordered.client);
  const client = clients && clients.find((client) => client.id === id);
  const { register, handleSubmit, watch, errors } = useForm({
    mode: "onTouched",

  });

  const addDataOnSubmit =( data )=> firestore.collection('client').doc(id).update(data).then(history.push("/"))


  if (!isLoaded(client)) {
    return <Spenner />;
  }
  return (
    <div className="card">
      <div className="card-body">
        <form onSubmit={handleSubmit(addDataOnSubmit)}>
          <div className="form-row">
            <div className="form-group col-6">
              <label>Frist Name</label>
              <input
              defaultValue={client.fristname}
                type="text"
                className="rounded-pill form-control"
                id="fristname"
                aria-describedby="emailHelp"
                name="fristname"
                ref={register({ required: true })}
              />
              {errors.fristname && errors.fristname.type === "required" && (
                <span className="d-block text-danger">First Name Required</span>
              )}
            </div>
            <div className="form-group col-6">
              <label>Last Name</label>
              <input
                defaultValue={client.lastname}
                type="text"
                className="rounded-pill form-control"
                id="exampleInputPassword1"
                name="lastname"
                ref={register({ required: true })}
              />
              {errors.lastname && errors.lastname.type === "required" && (
                <span className="d-block text-danger">Last Name Required</span>
              )}
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-6">
              <label>Email</label>
              <input
                defaultValue={client.email}
                type="email"
                className="rounded-pill form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                ref={register({
                  required: true,
                  pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                })}
                name="email"
              />
              {errors.email && errors.email.type === "required" ? (
                <span className="d-block text-danger">Required</span>
              ) : (
                ""
              )}
              {errors.email && errors.email.type === "pattern" ? (
                <span className="d-block text-danger">Invalid email</span>
              ) : (
                ""
              )}
            </div>
            <div className="form-group col-6">
              <label>Phone</label>
              <input
                defaultValue={client.phone}
                type="text"
                className="rounded-pill form-control"
                ref={register({
                  required: true,
                  pattern: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
                })}
                name="phone"
              />
              {errors.phone && errors.phone.type === "required" ? (
                <span className="d-block text-danger">Phone Required</span>
              ) : (
                ""
              )}
              {errors.phone && errors.phone.type === "pattern" ? (
                <span className="d-block text-danger">Invalid Phone</span>
              ) : (
                ""
              )}
            </div>
            <div className="form-group col-6">
              <label>Balance</label>
              <input
                defaultValue={client.balance}
                type="number"
                className="rounded-pill form-control"
                ref={register({
                  required: true,
                  pattern: /^[0-9]+$/,
                  defaultValueAsNumber: true,
                })}
                name="balance"
              />
              {errors.balance && errors.balance.type === "required" ? (
                <span className="d-block text-danger">balance Required</span>
              ) : (
                ""
              )}
              {errors.balance && errors.balance.type === "defaultValueAsNumber" ? (
                <span className="d-block text-danger">Numbers Only</span>
              ) : (
                ""
              )}
            </div>
          </div>
          <button type="submit" className="btn btn-primary col-12 w-50 rounded-pill d-block m-auto">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
