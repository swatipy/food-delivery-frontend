import { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

import {
  getDishesByRestaurant,
  deleteDish
} from "../../services/dishService";

function ManageDishes() {
  const navigate = useNavigate();

  const { id } = useParams();

  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    if (!id) return;

    getDishesByRestaurant(id)
      .then(res => {
        console.log(res.data); // temporary debug
        setDishes(res.data);
      })
      .catch(console.error);

  }, [id]);

  const handleDelete = (dishId) => {
  if (!window.confirm("Delete this dish?")) {
    return;
  }

  deleteDish(dishId)
    .then(() => {
      alert("Dish deleted");

      // Refresh the list
      getDishesByRestaurant(id)
        .then(res => setDishes(res.data))
        .catch(console.error);
    })
    .catch(error => {
      console.error(error);
    });
};

  return (
    <div className="container mt-5">

      <h1>Manage Dishes</h1>

      <button
        className="btn btn-success mb-3"
        onClick={() =>
          navigate(`/admin/restaurants/${id}/dishes/add`)
        }
      >
        Add Dish
      </button>

      {dishes.map(d => (
        <div key={d.Id} className="card mb-3 p-3">

          <h4>{d.description}</h4>

          <p>Category: {d.category}</p>

          <p>Price: ₹{d.price}</p>

          <button
            className="btn btn-warning me-2"
            onClick={() =>
              navigate(`/admin/dish/edit/${d.Id}`)
            }
          >
            Edit
          </button>

          <button
            className="btn btn-danger"
            onClick={() =>
              handleDelete(d.Id)
            }
          >
            Delete
          </button>

        </div>
      ))}

    </div>
  );
}
export default ManageDishes;