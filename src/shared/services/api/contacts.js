
import { instance } from "./auth";


export const getItems = async () => {
  const { data } = await instance.get("/contacts");
  return data;
};

export const deleteItem = async (id) => {
 await instance.delete(`/contacts/${id}`);
return id;
};

export const addItem = async (data) => {
  const { data: result } = await instance.post("/contacts", data);
  return result;
};
