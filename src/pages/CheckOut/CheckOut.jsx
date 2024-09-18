import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const CheckOut = () => {
    const service=useLoaderData();
    const {title,_id,service_id,price,img}=service ;
    const {user}=useContext(AuthContext)

    const handleSubmitButton=e=>{
      e.preventDefault()
      const form =e.target;
      const name=form.name.value;
      const date=form.date.value;
      const email=user?.email;
      const booking={
       costomerName:name,
       service:title,
       email,   
       date,
       price,
       service_id,
       img,
      
      }

console.log(booking)

    fetch(`http://localhost:5000/bookings`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(booking)
    })
    .then(res => res.json())
    .then(data =>{
      console.log(data)
    })

    }

    return (
        <div>
            <h3>book in :{title} </h3>

      <form onSubmit={handleSubmitButton} className="card-body">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="form-control">
          <label className="label">
            <span className="label-text">name</span>
          </label>
          <input type="text" name="name" defaultValue={user?.displayName} placeholder="your name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">date</span>
          </label>
          <input type="date" name="date"  className="input input-bordered" required />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Due amount</span>
          </label>
          <input type="text" defaultValue={'$'+price} className="input input-bordered" required />
          
           </div>
        </div>     
        <div className="form-control mt-6">
          
         <input type="submit" className="btn btn-block " value="Submit" />
        </div>
      </form>
    </div>
 
    );
};

export default CheckOut;