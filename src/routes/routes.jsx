import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Home/Home/Home";
import LogIn from "../pages/LogIn/LogIn";
import SignUp from "../pages/SignUp/SignUp";
import CheckOut from "../pages/CheckOut/CheckOut";
import Booking from "../pages/Booking/Booking";
import PrivateRoute from "./PrivateRoute";




const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>           
        },
        {
          path:'/signIn',
          element:<LogIn></LogIn>
        },
        {
          path:'/signUp',
          element:<SignUp></SignUp>
        },
        {
          path:'/services/:id',
          element:<PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
          loader:({params})=>fetch(`https://cars-doctors-server-site.vercel.app/services/${params.id}`)
        },
        {
          path:'/booking',
          element:<PrivateRoute><Booking></Booking></PrivateRoute>
        }
      ]
    },
  ]); 

export default router