import React, { ReactElement } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import * as styles from "./loginStyles";
import { useRouter } from "next/router";

interface IFromValue {
  username: string;
  password: string;
}
const schema = yup
  .object({
    username: yup.string().required("Name is required"),
    password: yup.string().required("Password is required"),
  })
  .required();
const Login = () => {
  const router = useRouter();
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
      router.push("/");
    } else {
      console.log("invalid");
    }
    reset();
  };

  return (
    <>
      <styles.Parent>
        <div className="child1">
          <div>
            <img src="/login.svg" alt="logo" />
            <div className="dash-name">Owner Dashboard</div>
          </div>
        </div>
        <div className="child2">
          <div className="login-text">
            Login to Platformsuite Owner Dashboard
          </div>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
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
                </div>
                <div>
                  <div className="label-head">
                    <label>Password</label>
                  </div>
                  <div>
                    <input
                      {...register("password")}
                      type="password"
                      name="password"
                      placeholder="Enter Password"
                      className="input-style"
                    />
                    {errors.password?.message && (
                      <div className="error">{errors.password?.message}</div>
                    )}
                  </div>
                </div>
                <div className="btn-content">
                  <button type="submit" className="login-btn">
                    Login
                  </button>
                  <a href="/forgot-password" className="forgot">
                    Having trouble in loging in?
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </styles.Parent>
    </>
  );
};

export default Login;

Login.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>;
};
