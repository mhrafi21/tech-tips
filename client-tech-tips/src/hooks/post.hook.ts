import { useMutation } from "@tanstack/react-query";
import { getPosts } from "../services/PostServices";

export const usePosts = () => {
    return useMutation<any>({
        mutationKey: ["posts"],
        mutationFn: async () => await getPosts(),
        onError: (error) => {
            toast.error(error.message);
        },
    });
};