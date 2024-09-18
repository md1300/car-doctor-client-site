
const BookingRow = ({booking,handledeleteButton,handleConfirmButton}) => {
    console.log(booking)
    const {service,price,date,img,_id,status}=booking ;

    
    return (
       
             <tr>
        <th>
           <button onClick={()=>handledeleteButton(_id)} className="btn btn-circle">
     <svg
       xmlns="http://www.w3.org/2000/svg"
       className="h-6 w-6"
       fill="none"
       viewBox="0 0 24 24"
       stroke="currentColor">
       <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 18L18 6M6 6l12 12" />
     </svg>
           </button>
        </th>
        <td>         
            <div className="avatar">
              <div className=" h-24 w-24">
                <img
                  src={img}
                  />
              </div>
          </div>
        </td>
        <td>       
            {service}          
        </td>
        <td>
            {date}
        </td>
        <td>
            {price}
        </td>
        <th>
            {status==='confirm'? <span>confirmed</span>:
          <button onClick={()=>handleConfirmButton(_id)} className="btn btn-ghost btn-xs">Plese Confirm</button>
            }
        </th>
      </tr>
        
    );
};

export default BookingRow;