import { useMutation } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

import { loginUser } from "../services/AuthServices";
import { registerUser } from "../services/AuthServices";

export const useUserRegistration = () => {
  
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["USER_REGISTRATION"],
    mutationFn: async (userInfo) => await registerUser(userInfo),
    onSuccess: () => {
      toast.success("User successfully register!");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export const useUserLogin = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["USER_LOGIN"],
    mutationFn: async (data) => await loginUser(data),
    onSuccess: () => {
      toast.success("User successfully login!");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
