import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import RestaurantDetails from "./components/RestaurantDetails";
import Login from "./pages/admin/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminDashboard from "./pages/admin/AdminDashboard"
import ManageDishes from "./pages/admin/ManageDishes";
import ManageRestaurants from "./pages/admin/ManageRestaurants";
import AddRestaurant from "./pages/admin/AddRestaurant";
import EditRestaurant from "./pages/admin/EditRestaurant";
import AddDish from "./pages/admin/AddDish";
import EditDish from "./pages/admin/EditDish";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = "/" element ={<Home/>}/>
      <Route path = "/restaurant/:id" element = {<RestaurantDetails/>}/>

  {/* Admin routes */}

  <Route path="/admin/login" element={<Login />} />
  <Route path="/admin" element={ <ProtectedRoute> <AdminDashboard /> </ProtectedRoute> } />

  <Route

  path="/admin/restaurants"

  element={

    <ProtectedRoute>

      <ManageRestaurants />

    </ProtectedRoute>

  }

/>

<Route

  path="/admin/restaurants/add"

  element={

    <ProtectedRoute>

      <AddRestaurant />

    </ProtectedRoute>

  }

/>
<Route

 path="/admin/restaurants/edit/:id"

 element={

   <ProtectedRoute>

      <EditRestaurant />

   </ProtectedRoute>

 }

/>
<Route
  path="/admin/restaurants/:id/dishes/add"
  element={
    <ProtectedRoute>
      <AddDish />
    </ProtectedRoute>
  }
/>
<Route
 path="/admin/dish/edit/:id"

 element={

   <ProtectedRoute>

      <EditDish />

   </ProtectedRoute>

 }
></Route>

<Route

 path="/admin/restaurants/:id/dishes"

 element={

   <ProtectedRoute>

     <ManageDishes />

   </ProtectedRoute>

 }

/>


    </Routes>




    
   </BrowserRouter>
  );
}

export default App;