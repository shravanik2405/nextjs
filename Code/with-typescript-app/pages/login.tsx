import React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit, errors } = useForm(); // initialise the hook
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div>
      <Link href="/login">asd </Link>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="firstname" ref={register} /> {/* register an input */}
        <input name="lastname" ref={register({ required: true })} />
        {errors.lastname && "Last name is required."}
        <input name="age" ref={register({ pattern: /\d+/ })} />
        {errors.age && "Please enter number for age."}
        <input type="submit" />
      </form>
    </div>
  );
};
export default Login;
