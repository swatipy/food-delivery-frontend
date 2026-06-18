import { Link } from "react-router-dom";
function RestaurantCard({restaurant}){
    return (
        <div className="card m-3 shadow-sm" style={{ width: "20rem" }}>
        <div className="card-body">

            <h5 className="card-title">
            {restaurant.name}
            </h5>

            <p className="card-text">
            {restaurant.address}
            </p>

            <p className="card-text">
            {restaurant.cuisine}
            </p>

            <Link
            to={`/restaurant/${restaurant.Id}`}
            className="btn btn-primary"
            >
            View Menu
            </Link>

        </div>
    </div>
    );
}
export default RestaurantCard;