import React, { useEffect, useState } from "react";
import { carousel__images } from "../../data";
import Carousel from "../../Components/Carousel/Carousel";
import Card from "../../Components/Card/Card";
import "./House.css";
import axios from "axios";
import { useLocation } from "react-router-dom";
const House = () => {
  const [data,setData]=useState([]);
  const location=useLocation();
  const value=location.state?.value;
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
  },[]);
  
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
            <p><b>{data?.category}</b></p>
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
        </ul>
      </div>
      <div className="contactowner">
        <button>
        Contact Owner
        </button>
        <p>

        </p>
      </div>
      <div className="advertise">
      <h1>
        <center>
         Popular Properties In Gujarat
        </center>
         </h1>
         <div className="advertise__card">
         <Card img={carousel__images[0].img} type={'2BHK Apartment'}
         price='48.8Lac' area='Ahemdabad' schemeName='Kavish amara'
         location='Ahemdabad'
         pincode='382006'
         >
        {/* <h1>2 BHK apartment
        </h1>
        <h2>
          &#8377;
          48.8Lac |1140sqft
        </h2>
        <h3>
          Kavish amara
        </h3> */}
        </Card> 
         <Card img={carousel__images[0].img}>
        <h1>2 BHK apartment
          48.8Lac |1140sqft
        </h1>
        <h3>
          Kavish amara
        </h3>
        </Card> 
         <Card img={carousel__images[0].img}>
        <h1>2 BHK apartment
          48.8Lac |1140sqft
        </h1>
        <h3>
          Kavish amara
        </h3>
        </Card> 
         <Card img={carousel__images[0].img}>
        <h1>2 BHK apartment
          48.8Lac |1140sqft
        </h1>
        <h3>
          Kavish amara
        </h3>
        </Card> 
        </div>
      </div>

)
    </>
  );
};

export default House;
