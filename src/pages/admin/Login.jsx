import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = () => {

        if(username == "admin" && password == "admin123") {
            localStorage.setItem("IsAdmin", true);
            navigate("/admin");

        }
        else{
            alert("Invalid Username or Password")
        }


    };

    return(
         <div className="container mt-5">
          <h1>Admin login</h1>

          <input className="form-control mb-3" placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
          <input className="form-control mb-3" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>

          <button  className="btn btn-primary btn-lg" placeholder= "Login" onClick={handleLogin}> Login</button>



    </div>

    );
}
export default Login;

