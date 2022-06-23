import React, { ReactElement } from "react";
import { Parent } from "../login/loginStyles";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface IFromValue {
  username: string;
}
const schema = yup
  .object({
    username: yup.string().required("Name is required"),
  })
  .required();
const forgotPassword = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<IFromValue>({ resolver: yupResolver(schema) });

  //@ts-ignore
  const onSubmit = (data) => {
    console.log("DATA", data);
    if (data.username === "admin" && data.password === "admin") {
      console.log("sucees");
    } else {
      console.log("invalid");
    }
    reset();
  };
  return (
    <Parent>
      <div className="child1">
        <img src="/login.svg" alt="logo" />
      </div>
      <div className="child2">
        <div className="content1">
          <p className="forgot-text">Forgot Password?</p>
          <p>
            Enter your username and a password reset code will be sent to you
            email.
          </p>
        </div>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <div className="label-head">
                <label>User Name</label>
              </div>
              <div>
                <input
                  {...register("username")}
                  type="text"
                  name="username"
                  placeholder="Enter Username"
                  className="input-style"
                />
                {errors.username?.message && (
                  <div className="error">{errors.username?.message}</div>
                )}
              </div>
              <div className="btn-content">
                <button type="submit" className="login-btn">
                  Get Reset Code
                </button>
                <a href="/login" className="forgot">
                  Go back to login page{" "}
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Parent>
  );
};

export default forgotPassword;

forgotPassword.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>;
};
