import React from "react";
import { carousel__images } from "../../data";
import Carousel from "../../Components/Carousel/Carousel";
import Card from "../../Components/Card/Card";
import "./House.css";
const House = () => {
  return (
    <>
      <div className="carousels" >
        <Carousel images={carousel__images} ></Carousel>
      </div>
      <div className="details">
        <ul>
          <li>Category:
            <span><b>Residential</b></span>
          </li>
          <li>Carpet Area:
            <span><b>800sqft</b></span>
          </li>
          <li>
            Floor :
            <span>
              <b>5 (out of 8)</b>
            </span>
          </li>
          <li>
            Transaction Type:
            <span>
              <b>
                Resale
              </b>
            </span>
          </li>
          <li>
            Amenities:
            <span>
              <b>
                Water availibility 24X7,Garden,Parking
              </b>
            </span>
          </li>
        </ul>
        <ul>
          <li>Price:
            <span><b>&#8377; 45lac</b></span>
          </li>
          <li>Address :
            <span><b>
              I-504, Swarnim Paradise,Vavol, Gandhinagar,Gujarat-382016
              </b></span>
          </li>
          <li>
            Furnishing :
            <span>
              <b>
                Fully Furnished
                </b>
            </span>
          </li>
          <li>
            Age of Construction:
            <span>
              <b>
                7 Years
              </b>
            </span>
          </li>
        </ul>
      </div>
      <div className="contactowner">
        <button>
        Contact Owner
        </button>
      </div>
      <div className="advertise">

      <h1>
        <center>
         Popular Properties In Gujarat
        </center>
         </h1>
         <div className="advertise__card">
         <Card img={carousel__images[0].img}>
        <h1>2 BHK apartment
        </h1>
        <h2>
          &#8377;
          48.8Lac |1140sqft
        </h2>
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


    </>
  );
};

export default House;
