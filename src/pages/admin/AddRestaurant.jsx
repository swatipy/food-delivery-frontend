import { useState } from "react";
import { addRestaurant } from "../../services/restaurantService";

import { useNavigate } from "react-router-dom";

function AddRestaurant() {

  const [name, setName] = useState("");

  const [address, setAddress] = useState("");

  const [cuisine, setCuisine] = useState("");

  const [contactNumber, setContactNumber] = useState("");
  const navigate = useNavigate();
  const handleSubmit = () => {

  const restaurant = {

    name,

    address,

    cuisine,

    contactNumber

  };

  addRestaurant(restaurant)

    .then(() => {

      alert("Restaurant added successfully");

      navigate("/admin/restaurants");

    })

    .catch(error => {

      console.error(error);

    });

};
  return (

    <div className="container mt-5">

      <h1>Add Restaurant</h1>

      <input

        className="form-control mb-3"

        placeholder="Name"

        value={name}

        onChange={(e) =>
          setName(e.target.value)
        }

      />

      <input

        className="form-control mb-3"

        placeholder="Address"

        value={address}

        onChange={(e) =>
          setAddress(e.target.value)
        }

      />

      <input

        className="form-control mb-3"

        placeholder="Cuisine"

        value={cuisine}

        onChange={(e) =>
          setCuisine(e.target.value)
        }

      />

      <input

        className="form-control mb-3"

        placeholder="Contact Number"

        value={contactNumber}

        onChange={(e) =>
          setContactNumber(e.target.value)
        }

      />

      <button

        className="btn btn-primary"

        onClick={handleSubmit}

      >

        Save Restaurant

      </button>

    </div>

  );

}

export default AddRestaurant;