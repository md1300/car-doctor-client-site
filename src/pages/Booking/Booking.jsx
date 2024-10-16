import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingRow from "./BookingRow";
import axios from "axios";
import useAxiosSecure from "../../hook/useAxiosSecure";

const Booking = () => {
    const {user}=useContext(AuthContext)
    const [bookings,setBookings]=useState([])
    const axiosSecure=useAxiosSecure()
    // console.log(user.email)

    // --------------------handle delete button -------------------

    const handledeleteButton=id=>{
        const proceeds=confirm('are you sure to delete data')
        if(proceeds){
            fetch(`https://cars-doctors-server-site.vercel.app/bookings/${id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                if(data.deletedCount>0){
                    alert(' deleted successfully')
                    const remainingBooking=bookings.filter(booking=>booking._id !== id)
                    setBookings(remainingBooking)

                }
            })
        }
    }

    // ----------update button ---------------------
    const handleConfirmButton=id=>{

        fetch(`https://cars-doctors-server-site.vercel.app/bookings/${id}`,{
            method:'PATCH',
            headers:{
                "Content-Type": "application/json",
            },
            body:JSON.stringify({status:'confirm'})
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount>0){
              // updateStatus
              const remaining=bookings.filter(booking=>booking._id!==id);
              const updated=bookings.find(booking=>booking._id===id)
              updated.status='confirm'
              const newBooklings=[updated,...remaining]
              setBookings(newBooklings)
            }
           
        })

    }
//  -------------------called api ------------------
    const url=`/bookings?email=${user.email}`;
    // const url=`https://cars-doctors-server-site.vercel.app/bookings?email=${user.email}`;
    // console.log(url)

    useEffect(()=>{
        // fetch(url,{credentials:'include'})
        // .then(res=>res.json())
        // .then(data=>setBookings(data))
        axiosSecure.get(url)
        .then(res=>setBookings(res.data))
    },[url,axiosSecure])
    return (
        <div>
            <h1 className="text-4xl text-center text-orange-400">booking page :{bookings.length} </h1>
            {/* ------------------------------ */}
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>image</th>
        <th>service name</th>
        <th>date</th>
        <th>price</th>
        <th>status</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     
     {
        bookings.map(booking=><BookingRow 
            key={booking._id}
            booking={booking}
            handledeleteButton={handledeleteButton}
            handleConfirmButton={handleConfirmButton}
        ></BookingRow>)
     }
     
    </tbody>
    
   
  </table>
</div>
  
            {/* ------------------------------- */}
        </div>
    );
};

export default Booking;