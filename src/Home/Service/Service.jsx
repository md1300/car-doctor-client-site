// import { useState } from "react";
// import { useEffect } from "react";
import useServices from "../../hook/useServices";
import ServiceCard from "./ServiceCard";


const Service = () => {
    const services =useServices()
    // const [services,setServices]=useState([]);
    // useEffect(()=>{
    //     fetch('https://cars-doctors-server-site.vercel.app/services')
    //     .then(res=>res.json())
    //     .then(data=>setServices(data))
    // },[])
    return (
        <div className="mt-6">
           <div className="text-center space-y-4 mb-6">
            <h3 className="text-3xl font-bold text-orange-500">Services</h3>
            <h2 className="text-5xl font-bold">Our Service Area</h2>
            <p >the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map(service=><ServiceCard key={service. _id}
            service={service}></ServiceCard>)}
           </div>
        </div>
    );
};

export default Service;