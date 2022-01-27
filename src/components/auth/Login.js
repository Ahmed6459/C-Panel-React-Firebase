import React from "react";
import { login } from "../../actions/authAction";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { Redirect } from "react-router";

import { Link } from "react-router-dom";

export default function Login() {
  const dispatch = useDispatch();

  const { register, handleSubmit, watch, errors } = useForm({
    mode: "onTouched",
  });

  const handelLogin = (data) => {
    dispatch(login(data));
  };
  const auth = useSelector((state) => state.firebase.auth);

  const { uid } = auth;

  if (uid) {
    return <Redirect to="/" />;
  }

  return (
    <div className="text-center">
      <h3>Login</h3>
      <form onClick={handleSubmit(handelLogin)} className="">
        <div className="form-group">
          <input
            type="email"
            ref={register({ required: true })}
            className="form-control w-50 m-auto"
            name="email"
            placeholder="email"
            id=""
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            ref={register({ required: true })}
            className="form-control w-50 m-auto"
            name="password"
            placeholder="password"
            id=""
          />
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Login"
            className="btn btn-success"
          />
        </div>
      </form>
      <small>
        If you dont have an account please{" "}
        <Link to="/Signup">Create account</Link>{" "}
      </small>
    </div>
  );
}
