"use client";

import { Button } from "@nextui-org/button";
import React from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";

import TPForm from "@/src/components/form/TPForm";
import TechInput from "@/src/components/form/TechInput";
import { useUserLogin } from "@/src/hooks/auth.hook";

const Login = () => {
  const { mutate: loginUser, isPending } = useUserLogin();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    loginUser(data);
  };

  return (
    <div className="lg:w-[30%] md:w-[50%] sm:w-[80%] flex justify-center items-center h-full mx-auto">
      <div className="w-full  h-full">
        <h1 className="text-3xl font-semibold">Welcome</h1>
        <p className="pb-4">Enter your email, password to login.</p>
        <TPForm onSubmit={onSubmit}>
          <div className="py-3">
            <TechInput label="Email" name="email" type="email" />
          </div>
          <div className="py-3">
            <TechInput label="Password" name="password" type="password" />
          </div>
          {isPending ? (
            <Button
              isLoading
              className="w-full"
              color="primary"
              size="lg"
              spinner={
                <svg
                  className="animate-spin h-5 w-5 text-current"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    fill="currentColor"
                  />
                </svg>
              }
              type="submit"
            >
              Loading
            </Button>
          ) : (
            <Button className="w-full" color="primary" size="lg" type="submit">
              Login
            </Button>
          )}
        </TPForm>
      </div>
    </div>
  );
};

export default Login;
