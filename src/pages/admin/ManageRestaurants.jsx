import { useEffect, useState } from "react";
import { getRestaurants } from "../../services/restaurantService";
import { useNavigate } from "react-router-dom";
import { deleteRestaurant } from "../../services/restaurantService";

function ManageRestaurants() {

    const [restaurants, setrestaurants] = useState([]);
    const navigate = useNavigate();

    
    const loadRestaurants = () => {

    getRestaurants()

        .then(response => {

        setrestaurants(response.data);

        })

        .catch(error => {

      console.error(error);

    });

};
    
    useEffect(() => {

        loadRestaurants();

        }, []);
        
    const handleDelete = (id) => {

                if (

                !window.confirm(

                "Delete this restaurant?"

                )

                ) {

                    return;

                }

  deleteRestaurant(id)

   .then(() => {

      alert(

       "Restaurant deleted"

      );

      loadRestaurants();

   })

   .catch(error => {

      console.error(error);

   });

};

    return(
            <div className="container mt-5">
            <h1>Manage Restaurants</h1>
           <button className="btn btn-success mb-3"

            onClick={() =>
                navigate("/admin/restaurants/add")
            } >
          Add Restaurant
          </button>

            {restaurants.map(r=>(
                <div key = {r.id}  className="card mb-3 p-3">
                    <h4>{r.name}</h4>
                    <p>{r.address}</p>

           <button className=
                    "btn btn-warning me-2"

                    onClick={() =>

                    navigate(

                    `/admin/restaurants/edit/${r.Id}`

                    )

                    }

                    >

                    Edit</button>

            <button className="btn btn-danger" onClick={() =>handleDelete(r.Id)}>Delete</button>
            <button className="btn btn-info me-2" onClick={() => navigate( `/admin/restaurants/${r.Id}/dishes`)}>Manage Dishes

            </button>
            
        
    </div>
    ))}
    
 </div>

  );

}



export default ManageRestaurants;