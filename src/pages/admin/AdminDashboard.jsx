import { useNavigate } from "react-router-dom";
function AdminDashboard() {
    const navigate = useNavigate();

    return (
        <div className="container mt-5">
            <h1>Admin Dashboard</h1>

            <button className="btn btn-primary me-2" onClick={()=>navigate("/admin/restaurants")}>Manage Restauarnts</button>
            <button className="btn btn-success" onClick={()=>navigate("/admin/dishes")}>Manage Dishes </button>
            <div>
                <button onClick={()=>navigate("/admin/login")}>Logout</button>
            </div>

        </div>
    )
}
    export default AdminDashboard;
