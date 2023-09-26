import React from 'react'
import { useNavigate } from 'react-router-dom';


const Card = ({img,bedroom,type,price,area,schemeName,location,pincode,classn,id}) => {
  const navigate=useNavigate();
  const navigateToPage=(id)=>{
    console.log("id",id);
    navigate('/house/:'+id,{state:{value:id}});
    window.scrollTo({top:0,behavior:'smooth'})
  }
  return (
    <div className={`${classn} card p-4 m-4`} onClick={()=>{navigateToPage(id)}}
    style={{minHeight:"300px"}}
    >
        <img src={img} alt="Image of house" height={100} width={100}
        className='card-img-top m-auto'
        />
        <div className="card-body ">
        <h5 className="card-title">{bedroom} Bhk {type}</h5>
        <p className='card-text fw-bold'>
          <span>
          &#8377;{price}
          </span>
          |{area}
        </p>
        <p className="card-text">
        <small className='text-muted'>
          {schemeName},{location}-{pincode}
        </small>
        </p>
        </div>
    </div>
  )
}

export default Card