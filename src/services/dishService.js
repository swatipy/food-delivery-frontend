import axios from "axios";

const API_URL = "http://localhost:8080/dishes";

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