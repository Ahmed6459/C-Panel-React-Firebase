import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { signup } from "../../actions/authAction";

export default function Signup() {
  const { register, handleSubmit, watch, errors } = useForm();
  const dispatch = useDispatch();

  const handelSignUp = (data) => {
    dispatch(signup(data));
  };

  const auth = useSelector((state) => state.firebase.auth);
  const { uid } = auth;

  if (uid) {
    return <Redirect to="/" />;
  }
  return (
      <form onSubmit={handleSubmit(handelSignUp)} className="text-center">
        <h3>Singup</h3>
        <div className="form-group">
          <input
            type="email"
            name="email"
            className="form-control col-6 m-auto"
            placeholder="Your Email"
            ref={register({ required: true })}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            className="form-control col-6 m-auto"
            placeholder="Your Password"
            ref={register({ required: true })}
          />
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Singup"
            className="btn btn-success m-auto"
          />
        </div>
      </form>
  );
}
