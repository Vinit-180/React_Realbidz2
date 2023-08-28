import React, { useEffect, useState } from 'react'
import img1 from '../../Images/pexels-photo-3285725.png'
import './Home.css'
import Card from '../../Components/Card/Card'
import axios from 'axios';
import { card__data } from '../../data';
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
            <img src={img1} alt="img1" className='img-fluid' />
        </div>
        <center>
        <h1>
            Discover your Property in RealBidz
            </h1>
        </center>
        <form action="" method='post' className='choice__form container-fluid'>
          <div className="row mt-4">
          <p className='col-md-3 m-auto'>
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
          <p className='col-md-3 m-auto'>
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
          <p className='col-md-3 m-auto'>
            <label htmlFor="type">Type</label>
            <br />
            <select name="type" id="type">
              <option value="Type">Choose Type</option>
              <option value="Buy">Buy</option>
              <option value="Rent">Rent</option>
              <option value="Commercial">Commercial</option>
            </select>
          </p>
          </div>
          <div className="row mt-4">
          <p className='col-md-3 m-auto'>
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
          <p className='col-md-3 m-auto'>
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
          <p className='col-md-3 m-auto'>
            <button type="submit">
            &#128269;
            Search</button>
          </p>
          </div>
        </form>
        {/* <div class="card p-4 m-4">
          <img src="Images/1 (2).png" class="card-img-top" alt="..." id="img1">
          <div class="card-body m-2">
            <h5 class="card-title">3 BHK Apartment</h5>
            <p class="card-text fw-bold">
              <span id="price1">
                48.8 Lac
              </span>
               | 1140sqft
            </p>
            <p class="card-text"><small class="text-muted">Kavisha amara</small>
              <br>
              Under Construction
            </p>
          </div>
        </div> */}
        <div className="advertise row">
          <div className='col-sm-6 col-lg-3'> 
          {
            card__data.map((e)=>
            {
              return (
                <Card img={img1} type={e.type} price={e.price}
                area={e.area} schemeName= {e.schemeName} location={e.location}
                pincode={e.pincode}
                ></Card>
                )
              })
            }
            </div>
        {/* <Card img={img1} >
         <h1>2 BHK apartment
          48.8Lac |1140sqft
        </h1>
        <h3>
          Kavish amara
        </h3> 
        </Card>  */}
        </div>
    </div>
    </>
  )
}

export default Home