import axios from "axios";

const API_URL = "http://localhost:8080/restaurants";

export const getRestaurants = () => {
  return axios.get(API_URL);
};

export const addRestaurant = (restaurant) => {
  return axios.post(API_URL, restaurant);
};

export const getRestaurantById = (id) => {

  return axios.get(

    `${API_URL}/${id}`

  );

};
export const updateRestaurant = (
    id,
    restaurant
) => {

   return axios.put(

      `${API_URL}/${id}`,

      restaurant

   );

};
export const deleteRestaurant = (id) => {

  return axios.delete(

    `${API_URL}/${id}`

  );

};