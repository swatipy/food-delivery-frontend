import { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

import { getDishById, updateDish} from "../../services/dishService";

function EditDish() {

  const navigate = useNavigate();

  const { id } = useParams();

  const [dish, setDish] = useState({
    description: "",
    category: "",
    price: ""
  });

  useEffect(() => {

    getDishById(id)

      .then(response => {

        setDish({
          description: response.data.description,
          category: response.data.category,
          price: response.data.price
        });

      })

      .catch(console.error);

  }, [id]);

  const handleChange = (e) => {

    const { name, value } = e.target;

    setDish(prev => ({
      ...prev,
      [name]: value
    }));

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    updateDish(id, dish)

      .then(() => {

        alert("Dish updated");

        navigate(-1);

      })

      .catch(console.error);

  };

  return (

    <div className="container mt-5">

      <h2>Edit Dish</h2>

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

          Update Dish

        </button>

      </form>

    </div>

  );
}

export default EditDish;