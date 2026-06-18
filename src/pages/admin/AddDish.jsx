import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { addDish } from "../../services/dishService";

function AddDish() {
  const navigate = useNavigate();

  const { id } = useParams();

  const [dish, setDish] = useState({
    category: "",
    description: "",
    price: "",
    restaurant: {
      Id: id
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setDish(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addDish(dish)
      .then(() => {
        alert("Dish added successfully");

        navigate(`/admin/restaurants/${id}/dishes`);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div className="container mt-5">

      <h2>Add Dish</h2>

      <form onSubmit={handleSubmit}>

        <div className="mb-3">

          <label className="form-label">
            Description
          </label>

          <input
            type="text"
            name="description"
            className="form-control"
            value={dish.description}
            onChange={handleChange}
            required
          />

        </div>

        <div className="mb-3">

          <label className="form-label">
            Category
          </label>

          <input
            type="text"
            name="category"
            className="form-control"
            value={dish.category}
            onChange={handleChange}
            required
          />

        </div>

        <div className="mb-3">

          <label className="form-label">
            Price
          </label>

          <input
            type="number"
            name="price"
            className="form-control"
            value={dish.price}
            onChange={handleChange}
            required
          />

        </div>

        <button
          type="submit"
          className="btn btn-primary"
        >
          Save Dish
        </button>

      </form>

    </div>
  );
}

export default AddDish;