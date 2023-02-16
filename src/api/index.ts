import axios from "axios";
export const getData = () => {
  return axios.get("/todoList.json");
};

export const getProduct = () => {
  return axios.get("/product.json");
}