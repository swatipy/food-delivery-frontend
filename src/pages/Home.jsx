import { useState,useEffect } from "react";
import { getRestaurants } from "../services/restaurantService";
import RestaurantCard from "../components/RestaurantCard";



function Home() {
    const [restaurants,setRestaurants] = useState([]);

    useEffect(() => {
        getRestaurants()
        .then(response => setRestaurants(response.data))
        .catch(error => console.error(error))
    }, []);

    return (
        <div className="container mt-4">
            <h1>Restaurants</h1>
               <div className="d-flex flex-wrap">

            {
            restaurants.map(r => (
                <RestaurantCard key = {r.id} restaurant={r}></RestaurantCard>
            ))}
            </div>
       </div>
    );

    
}
export default Home;
