import { useEffect, useState} from "react";

import {

  useNavigate,

  useParams

} from "react-router-dom";

import {

  getRestaurantById,

  updateRestaurant

}

from "../../services/restaurantService";

function EditRestaurant() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [name, setName]

   = useState("");

  const [address, setAddress]

   = useState("");

  const [cuisine, setCuisine]

   = useState("");

  const [

   contactNumber,

   setContactNumber

  ] = useState("");

  useEffect(() => {

    getRestaurantById(id)

      .then(response => {

        setName(

         response.data.name

        );

        setAddress(

         response.data.address

        );

        setCuisine(

         response.data.cuisine

        );

        setContactNumber(

         response.data.contactNumber

        );

      })

      .catch(error =>

       console.error(error)

      );

  }, [id]);

  const handleUpdate = () => {

    const restaurant = {

      name,

      address,

      cuisine,

      contactNumber

    };

    updateRestaurant(

      id,

      restaurant

    )

    .then(() => {

      alert(

       "Restaurant Updated"

      );

      navigate(

       "/admin/restaurants"

      );

    })

    .catch(error =>

     console.error(error)

    );

  };

  return (

    <div className="container mt-5">

      <h1>

       Edit Restaurant

      </h1>

      <input

       className=

       "form-control mb-3"

       value={name}
       placeholder="Name"

       onChange={e =>

       setName(

       e.target.value

       )}

      />

      <input

       className=

       "form-control mb-3"

       value={address}
       placeholder="Address"

       onChange={e =>

       setAddress(

       e.target.value

       )}

      />

      <input

       className=

       "form-control mb-3"

       value={cuisine}
       placeholder="Cuisine"

       onChange={e =>

       setCuisine(

       e.target.value

       )}

      />

      <input

       className=

       "form-control mb-3"

       value={contactNumber}
       placeholder="Contact number"

       onChange={e =>

       setContactNumber(

       e.target.value

       )}

      />

      <button

       className=

       "btn btn-primary"

       onClick={handleUpdate}

      >

       Update Restaurant

      </button>

    </div>

  );

}

export default EditRestaurant;