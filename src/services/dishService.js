import axios from "axios";

import config from "../config";

const API_URL = config.dishesUrl;

export const getDishesByRestaurant = (restaurantId) => {
  return axios.get(`${API_URL}/restaurant/${restaurantId}`);
};

export const deleteDish= (id)=>{
   return axios.delete(

    `${API_URL}/${id}`
   )
}

export const addDish = (dish) => {
  return axios.post(API_URL, dish);
};

export const updateDish = (
    id,
    dish
) => {

   return axios.put(

      `${API_URL}/${id}`,

      dish

   );

};

export const getDishById = (id) => {
  return axios.get(`${API_URL}/${id}`);
};