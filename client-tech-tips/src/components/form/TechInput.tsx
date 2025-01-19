"use client";

import { Input } from "@nextui-org/input";
import React from "react";
import { useFormContext } from "react-hook-form";

interface IProps {
  variant?: "flat" | "bordered" | "filled" | "outline" | "faded" | "underlined";
  size?: "xs" | "sm" | "md" | "lg";
  type?: "text" | "number" | "email" | "password";
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  isInvalid?: boolean;
  placeholder?: string;
  label?: string;
  name: string;
}

function TechInput({
  variant,
  size = "md",
  type = "text",
  name,
  label,
  required = true,
}: IProps) {
  const { register } = useFormContext();

  return (
    <Input
      {...register(name)}
      label={label}
      required={required}
      size={size}
      type={type}
      variant={variant}
    />
  );
}

export default TechInput;
