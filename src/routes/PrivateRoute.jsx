import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";



const PrivateRoute = ({children}) => {
    const {user,loader}=useContext(AuthContext)
    const location =useLocation();

   //  console.log(location)
       

   if(loader){
      return <progress className="progress w-56"></progress>
   }

   if(user?.email){
    return children
   }
   return <Navigate state={location.pathname} to='/signIn' replace></Navigate>

};

export default PrivateRoute;