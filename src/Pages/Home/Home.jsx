import React, { useEffect, useState } from 'react'
import img1 from '../../Images/pexels-photo-3285725.png'
import './Home.css'
import Card from '../../Components/Card/Card'
import axios from 'axios';
import Footer from '../../Components/Footer'
const Home = () => {
  const [city,setCity]=useState([]);
  const [area,setArea]=useState([]);
  const [range,setRange]=useState(0);
  const getCity=()=>{
    axios
    .get("http://localhost:9999/api/v1/city/getcity")
    .then((data)=>{
      console.log("THE DATA IS",data);
      setCity(data.data.data);
    }).catch((error)=>{
      console.log(error);
    })
  }
  const getArea=(e)=>{
    console.log(e.target.value)
    axios
    .get("http://localhost:9999/api/v1/area/getareabyid/"+e.target.value)
    .then((data)=>{
      console.log(data.data);
      console.log(data.data.data);
      setArea(data.data.data);
    })
    .catch((error)=>{
      console.log(error);
    })
  }
  useEffect(()=>{
    getCity();
    console.log("the data is ",city);
  },[]);
  return (
    <>
    <div className="main__container">
        <div className="main__image">
            <img src={img1} alt="img1" />
        </div>
        <center>
        <h1>
            Discover your Property in RealBidz
            </h1>
        </center>
        <form action="" method='post'>
          <p>
            <label htmlFor="district">City</label>
             <br />
            <select name="district" 
            id="district"
            onChange={getArea}
             required>
              <option value="choose city" >Choose city</option>
              {
                city?.map((e)=>{
                  return (<option value={e._id}>
                    {e.cityName}
                  </option>);
                })}
            </select>
          </p>
          <p>
            <label htmlFor="village">Area/Village</label>
            <br />
            <select name="village" id="village">
              <option value="village">Choose Village</option>
              {
                area.map((area)=>{
                  return (
                    <option value={area.areaName}>
                      {area.areaName}
                    </option>
                  );
                })
              }
            </select>
          </p>
          <p>
            <label htmlFor="type">Type</label>
            <br />
            <select name="type" id="type">
              <option value="Type">Choose Type</option>
              <option value="Buy">Buy</option>
              <option value="Rent">Rent</option>
              <option value="Commercial">Commercial</option>
            </select>
          </p>
          <p>
            <label htmlFor="category">Category</label>
            <br />
            <select name="category" id="category">
              <option value="category">Choose Category</option>
              <option value="1Bhk">1 Bhk</option>
              <option value="2Bhk">2 Bhk</option>
              <option value="3Bhk">3 Bhk</option>
              <option value="4Bhk">4 Bhk</option>
              <option value="4Bhk">4+ Bhk</option>
              <option value="House/villa">House/Villa</option>
            </select>
          </p>
          <p >
            Budget
            <br />
            <select name="budget" id="budget">
              <option value="budget">Budget</option>
              <option value="25lac">
                &#8377; 25 lac
              </option>
              <option value="40lac">
                &#8377; 40 lac
              </option>
              <option value="50lac">
                &#8377; 50 lac
              </option>
              <option value="60lac">
                &#8377; 60 lac
              </option>
              <option value="25lac">
                &#8377; 25 lac
              </option>
              <option value="25lac">
                &#8377; 25 lac
              </option>
            </select>
          </p>
          <p>
            <button type="submit">
            &#128269;
            Search</button>
          </p>
        </form>
        <div className="advertise">
        <Card img={img1}>
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
  )
}

export default Home