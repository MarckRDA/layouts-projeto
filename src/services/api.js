import axios from "axios";

export const api = axios.create({
  baseURL: "https://localhost:5001/achebarato",
  headers: { "content-type": "application/json" },
});

export const signUp = ({ name, email, password, phoneNumber }) => {
  return api.post("/users", { name, email, password, phoneNumber });
};

export const postAlarmPrice = ({ productId, priceToMonitor }) => {
  return api.post("/users/alarmsprice", { productId, priceToMonitor });
};

export const getSearchedProducts = ({
  search,
  minPrice,
  maxPrice,
  ordering,
}) => {
  return api.get(
    `/products?Search=${search}&MinPrice=${minPrice}&MaxPrice=${maxPrice}&OrderBy=${ordering}`
  );
};

export const getProductSelected = ({ id }) => {
  return axios.all([
    axios.get(`https://localhost:5001/achebarato/products/${id}`),
    axios.get(`https://localhost:5001/achebarato/products/${id}/relatedproducts`),
  ]);
};

export const postUserPreferences = ( SearchTag ) =>{
  return api
    .post("/users/addPreferences", {SearchTag});
}

export const getTrendProducts = () =>{
  return api
    .get("/products/trendproducts");
}

export const getTrendProductsByUserPreferences = ( search ) =>{
  return api
    .get(`/products/usersPreferences/${search}` );
}