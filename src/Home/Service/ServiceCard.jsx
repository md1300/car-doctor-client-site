import { Link } from "react-router-dom";


const ServiceCard = ({service}) => {
    const {_id,img,title,price}=service;
    return (
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src={img}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>price :{price}</p>
    <div className="card-actions justify-end">
      <Link to={`/services/${_id}`}><button className="btn btn-primary">check out</button></Link>     
    </div>
  </div>
</div>
    );
};

export default ServiceCard;