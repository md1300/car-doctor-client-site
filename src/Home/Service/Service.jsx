// import { useState } from "react";
// import { useEffect } from "react";
import { useState } from "react";
import useServices from "../../hook/useServices";
import ServiceCard from "./ServiceCard";


const Service = () => {
    const [asc,setAsc]=useState(true)
    const [search,setSearch]=useState('')
    const services =useServices(asc,search)
    
    // const [services,setServices]=useState([]);
    // useEffect(()=>{
    //     fetch('https://cars-doctors-server-site.vercel.app/services')
    //     .then(res=>res.json())
    //     .then(data=>setServices(data))
    // },[])
    // console.log(services)

    const handleSearchButton=e=>{
        e.preventDefault()
        const searchText=e.target.search.value;
        setSearch(searchText)
        
    }


    return (
        <div className="mt-6">
           <div className="text-center space-y-4 mb-6">
            <h3 className="text-3xl font-bold text-orange-500">Services</h3>
            <h2 className="text-5xl font-bold">Our Service Area</h2>
            <p >the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
          <form onSubmit={handleSearchButton} >  <input type="text" name="search" />
            <button type="submit" className="btn">search</button></form>

            <button 
            onClick={()=>setAsc(!asc)}
            className="btn btn-secondary">
                {asc?'price : high to low':'price : low to high'}
                </button>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map(service=><ServiceCard key={service. _id}
            service={service}></ServiceCard>)}
           </div>
        </div>
    );
};

export default Service;