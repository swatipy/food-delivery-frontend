import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDishesByRestaurant } from "../services/dishService";

function RestaurantDetails() {

  const { id } = useParams();
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    getDishesByRestaurant(id)
      .then(response => {
        setDishes(response.data);
      })
      .catch(error => console.error(error));
  }, [id]);

  return (
    <div>
      <h1>Restaurant Details</h1>
      <h6>Restaurant Id: {id}</h6>
      
      
      <h3>Dishes</h3>
      
      <div className="card m-3 shadow-sm" style={{ width: "20rem" }}>
      <div className="card-body">
      
      {dishes.map(d => (
        <div key={d.id}>
          <h4 className="card-text">{d.description}</h4>
          <p className="card-text">{d.category}</p>
          <p className="card-text">₹{d.price}</p>
        </div>
      ))}
      </div>
      </div>

    </div>
  );
}

export default RestaurantDetails;