import React, { useEffect, useState } from "react";
import { carousel__images } from "../../data";
import Carousel from "../../Components/Carousel/Carousel";
import Card from "../../Components/Card/Card";
import "./House.css";
import axios from "axios";
import PopularProperties from '../../Components/PopularProperties'
import { useLocation } from "react-router-dom";
const House = () => {
  const [data,setData]=useState([]);
  const location=useLocation();
  const value=location.state?.value;
  const [showData,setShowData]=useState(false);
  const getData=()=>{
    axios.get("http://localhost:9999/api/v1/property/getpropertybyid/"+value).then((data)=>{
      console.log("the data is ",data);
      setData(data.data.data);
    }).catch((error)=>{
      console.log(error);
    })
  }

  useEffect(()=>{
    getData();
  },[value]);
  
  return (
    <>
      (<div className="carousels" >
        <Carousel images={data?.image} ></Carousel>
      </div>
      <div className="details">
        <ul>
          <li>
            Type:
            <p>
              <b>
                {data?.type}
              </b>
            </p>
          </li>
          <li>Category:
            <p> 
            <b>{data?.category}</b>
            </p>
          </li>
          <li>
            Bedrooms
            <p>
              <b>
                {data?.bedrooms} Bhk
              </b>
            </p>
          </li>

          <li>Carpet Area:
            <p><b>{data?.carpetArea}sqft</b></p>
          </li>
          <li>
            Floor :
            <p>
              <b>{data?.floor} (out of 8)</b>
            </p>
          </li>
          <li>
            Transaction Type:
            <p>
              <b>
                Resale
              </b>
            </p>
          </li>
          <li>
            Amenities:
            <p>
              <b>
                Water availibility 24X7,Garden,Parking
              </b>
            </p>
          </li>
        </ul>
        <ul>
          <li>Price:
            <p><b>&#8377; {data?.price}</b></p>
          </li>
          <li>Address :
            <p><b>
              {data?.fullAddress}
              </b></p>
          </li>
          {
            data?.totalFloor && (<li>
              Total Floors:
              <p>
                <b>
                  {data?.totalFloors}
                </b>
              </p>
            </li>)
          }
          
          <li>
            Listed By:
            <p>
              <b>
                {data?.listedBy}
              </b>
            </p>
          </li>
          <li>
            Furnishing :
            <p>
              <b>
                {data?.furnishing}
                </b>
            </p>
          </li>
          <li>
          Construction Status : 
          <p>
            <b>
              {data?.constructionStatus}
            </b>
          </p>
          </li>
          <li>
            Age of Construction:
            <p>
              <b>
                {data?.ageOfConstruction}
              </b>
            </p>
          </li>
          <li>
            Full Address :
            <p>
              <b>
                {data?.fullAddress}
              </b>
            </p>
          </li>
        </ul>
      </div>
      <div className="contactowner container">
        <button onClick={()=>{setShowData(true)}}>
        Contact Owner
        </button>
        {
          showData && (
              <div className="owner mt-3 ms-2">

            <p>
              Name: 
              <b className="ms-1">
              {data?.userId?.firstName} {data?.userId?.lastName}
              </b>
            </p>
            <p>
              Email: 
              <span className="ms-1">
                {data?.userId?.email}
              </span>
            </p>
            <p>
              phoneNo : {data?.userId?.phoneNo}
            </p>
              </div>
          
          )
        }
      </div>
      <div className="advertise">
      <h1>
        <center>
         Popular Properties In {data?.city} 
        </center>
         </h1>
         {data  && console.log(Object.keys(data).length>0)}
         {
          Object.keys(data).length>0 &&  
        (<PopularProperties city={data?.city}/>)
        }
      </div>

)
    </>
  );
};

export default House;
