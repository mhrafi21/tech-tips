/* eslint-disable prettier/prettier */
"use client";

import React, { ReactNode } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

interface formConfigProps {
  defaultValues?: Record<string, any>;
  resolver?: any;
}

interface IProps extends formConfigProps {
  children: ReactNode;
  onSubmit: SubmitHandler<any>;
}

// eslint-disable-next-line prettier/prettier
const TPForm = ({ children, onSubmit, defaultValues, resolver }: IProps) => {
  const formConfig: formConfigProps = {};

  if (!!defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }

  if (!!resolver) {
    formConfig["resolver"] = resolver;
  }

  const methods = useForm(formConfig);
  const submitHandler = methods.handleSubmit;

  return (
    <FormProvider {...methods}>
      <form onSubmit={submitHandler(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default TPForm;
