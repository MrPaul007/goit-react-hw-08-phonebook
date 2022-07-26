import axios from "axios";

const instance = axios.create({
    baseURL: "https://connections-api.herokuapp.com/"
});

export const getContacts = async () => {
    const {data} = await instance.get("/contacts");
    return data;
};

export const addContact = async(data) => {
    const {data: result} = await instance.post("/contacts", data);
    return result;
};

export const removeContact = async(id) => {
    const {data} = await instance.delete(`/contacts/${id}`);
    return data;
};

export default instance;