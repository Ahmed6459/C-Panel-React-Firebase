import React from "react";
import {useForm}from "react-hook-form"
import { useFirestore } from 'react-redux-firebase'
import { useHistory } from "react-router";



export default function AddClient() {

  const firestore = useFirestore()
  const history = useHistory()

    const { register, handleSubmit, watch, errors } = useForm({
      mode: 'onTouched'
    });

    const addDataOnSubmit =( data )=> firestore.collection('client').add(data).then(history.push("/"))
    

  return (
    <div id="add-client">
      <form onSubmit={handleSubmit(addDataOnSubmit)}>
        <div className="form-row">
            <div className="form-group col-6">
            <label >Frist Name</label>
            <input
                type="text"
                className="rounded-pill form-control"
                id="fristname"
                aria-describedby="emailHelp"
                name="fristname"
                 ref={register({ required: true })}
            />
            {errors.fristname && errors.fristname.type === 'required' && (
										<span className="d-block text-danger">
											First Name Required
										</span>
									)}
            </div>
            <div className="form-group col-6">
            <label>Last Name</label>
            <input
                type="text"
                className="rounded-pill form-control"
                id="exampleInputPassword1"
                name="lastname"
                 ref={register({ required: true })}
            />
                        {errors.lastname && errors.lastname.type === 'required' && (
										<span className="d-block text-danger">
											Last Name Required
										</span>)}
            </div>
        </div>
        <div className="form-row">
        <div className="form-group col-6">
          <label >Email</label>
          <input
            type="email"
            className="rounded-pill form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
             ref={register({ required: true,pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/})}
            name="email"
          />
          {errors.email&&errors.email.type==="required"?<span className="d-block text-danger">Required</span>:""}
          {errors.email&&errors.email.type==="pattern"?<span className="d-block text-danger">Invalid email</span>:""}
        </div>
        <div className="form-group col-6">
          <label >Phone</label>
          <input
            type="text"
            className="rounded-pill form-control"
             ref={register({ required: true,pattern: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im })}
            name="phone"
          />
          {errors.phone&&errors.phone.type === "required"?<span className="d-block text-danger">Phone Required</span>:""}
          {errors.phone&&errors.phone.type === "pattern"?<span className="d-block text-danger">Invalid Phone</span>:""}
        </div>
        <div className="form-group col-6">
          <label >Balance</label>
          <input
            type="number"
            className="rounded-pill form-control"
            ref={register({ required: true,pattern:/^[0-9]+$/,valueAsNumber: true})}
            name="balance"
          />
          {errors.balance&&errors.balance.type === "required"?<span className="d-block text-danger">balance Required</span>:""}
          {errors.balance&&errors.balance.type === "valueAsNumber"?<span className="d-block text-danger">Numbers Only</span>:""}
        </div>
    </div>
    <button type="submit" className="btn btn-primary col-12 w-50 rounded-pill d-block m-auto">
          Submit
        </button>
      </form>
    </div>
  );
}     