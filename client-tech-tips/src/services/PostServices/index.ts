import axiosInstance from "@/src/lib/AxiosInstance";

export const getPosts = async () => {
    try {
        const res = await axiosInstance.get("/posts");
        return res.data;
    } catch (error) {
        throw new Error(error);
    }
};