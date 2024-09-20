import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { Navigate } from "react-router-dom";

const axiosSecure=axios.create({
    baseURL:'https://cars-doctors-server-site.vercel.app',
    withCredentials:true
})
const useAxiosSecure = () => {
    const {logOut}=useAuth()
    useEffect(()=>{
        axiosSecure.interceptors.response.use(response=>{
            return response
        },error=>{
            console.log('error tracked in the interceptor :',error.response)
            if(error.response.status === 401 || error.response.status === 403){
                // console.log('logged out please')
                logOut()
    .then(()=>{
        Navigate('/signIn')
    })
    .catch(error=>console.log(error))
            }
        })
    },[])
  return axiosSecure ;  
};

export default useAxiosSecure;