import axiosInstance from "@/lib/axiosInstance";

export const getAllManagers = async () => {
  const response = await axiosInstance.get("/user/getAllManagers");
  return response.data;
};

export const getManagerById = async (user_id) => {
  const response = await axiosInstance.post("/user/getManagerById", {
    user_id,
  });
  return response.data;
};

export const updateManager = async (data) => {
  console.log(data);
  const response = await axiosInstance.put("/user/updateManager", data);
  return response.data;
};
