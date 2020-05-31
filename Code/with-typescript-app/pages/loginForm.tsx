import React from "react";
import { useForm } from "react-hook-form";
import { Container } from "react-bootstrap";

type LoginForm = {
  email: string;
  password: string;
};

const LoginForm: React.FunctionComponent = () => {
  const { register, handleSubmit, errors } = useForm<LoginForm>();
  const onSubmit = (data: LoginForm) => {
    console.log("data", data);
  };

  return (
    <Container className="mt-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            ref={register({ required: true })}
          />
          {errors.email && errors.email.type === "required" && (
            <div className="error">Email is required.</div>
          )}
        </div>
        <div className="field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            ref={register({ required: true })}
          />
          {errors.password && errors.password.type === "required" && (
            <div className="error">Password is required.</div>
          )}
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </Container>
  );
};

export default LoginForm;
