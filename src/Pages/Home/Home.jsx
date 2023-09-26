import React, { useEffect, useState } from 'react'
import img1 from '../../Images/pexels-photo-3285725.png'
import img2 from '../../Images/Change_house_1.jpg'
import './Home.css'
import Card from '../../Components/Card/Card'
import axios from 'axios';
import { card__data } from '../../data';
import { useForm } from 'react-hook-form';
import PopularProperties from '../../Components/PopularProperties'
const Home = () => {
  const [city,setCity]=useState([]);
  const [area,setArea]=useState([]);
  const [cityName,setCityName]=useState('');
  const [propertyData,setPropertyData]=useState([]);
  const {register,handleSubmit,formState: {errors} }=useForm();
  const [message,setMessage]=useState("");
  const getCity=()=>{
    axios
    .get("http://localhost:9999/api/v1/city/getcity")
    .then((data)=>{
      // console.log("THE DATA IS",data);
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
      // console.log(data.data);
      console.log(data.data.data);
      setArea(data.data.data);
    })
    .catch((error)=>{
      console.log(error);
    })
  }
  const ValidationSchema={
    city:{
      required:{
        value:true,
        message:"Choose City"
      }
    },
    area_village:{
      required:{
        value:true,
        message:"Choose Area/Village"
      }
    },
    category:{
      required:{
        value:true,
        message:"Choose Category"
      },
    },
    budget:{
      required:{
        value:true,
        message:"Choose Your Budget"
      }
    }


  }
  const submit=(data)=>{
    console.log(data);
    axios.post("http://localhost:9999/api/v1/property/getproperty",data).then((data)=>{
      console.log(data);
      if(Object.keys(data.data.data).length>0)
      {setPropertyData(data.data.data);}
      else
      {
        setMessage("Property of Your Choice is not found");
        setCityName(data.data.cityName)
      }
      console.log("DDD",Object.keys(data.data.data).length);
    }).catch((error)=>{
      console.log(error);
    })

    // axios.post("http://localhost:9999/api/v1/property/getproperty",{city:data.city,cityId:1}).then((d)=>{
    //   console.log(d.data);
    //   setPopularData(data.data.data);
    // }).catch((err)=>{
    // console.log(err)})
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
        <form className='choice__form container-fluid' onSubmit={handleSubmit(submit)} >
          <div className="row mt-4">
          <p className='col-md-3 m-auto'>
            <label htmlFor="districts">City</label>
            {
              <span style={{color:'red'}}>
                <br />
                {errors?.city?.message}
              </span>
            }
             
            <select 
            id="citys"
            name="city" 
            {...register("city",ValidationSchema.city)}
            onChange={getArea}
            >
              <option value='' >Choose city</option>
              {
                city?.map((e)=>{
                  return (<option value={e._id}  >
                    {e.cityName}
                  </option>);
                })}
            </select>
          </p>
          <p className='col-md-3 m-auto'>
            <label htmlFor="village">Area/Village</label>
            {
              <span style={{color:'red'}}>
                <br />
                {errors?.area_village?.message}
              </span>
            }
            <select name="area_village" id="village"
            {...register("area_village",ValidationSchema.area_village)}
            >
              <option value='' >Choose Village</option>
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
              {/* <option value="Commercial">Commercial</option> */}
            </select>
          </p>
          </div>
          <div className="row mt-4">
          <p className='col-md-3 m-auto'>
            <label htmlFor="category">Category</label>
            {
              <span style={{color:'red'}}>
                <br />
                {errors?.category?.message}
              </span>
            }
            <select name="category" id="category"
            {...register("category",ValidationSchema.category)}
            >
              <option value="">Choose Category</option>
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
            {
              <span style={{color:'red'}}>
                <br />
                {errors?.budget?.message}
              </span>
            }
            <select name="budget" id="budget"
            {...register("budget",ValidationSchema.budget)}
            >
              <option value="" >Budget</option>
              <option value="2500000">
                &#8377; 25 lac
              </option>
              <option value="4000000">
                &#8377; 40 lac
              </option>
              <option value="5000000">
                &#8377; 50 lac
              </option>
              <option value="6000000">
                &#8377; 60 lac
              </option>
              <option value="8000000">
                &#8377; 80 lac
              </option>
              <option value="1000000">
                &#8377;  &gt; 80lac
              </option>
            </select>
          </p>
          <p className='col-md-3 m-auto'>
            <button type="submit" onClick={()=>{console.log('1')}}>
            &#128269;
            Search</button>
          </p>
          </div>
        </form>
          <div className="container-fluid mt-2 row popular__card">
            {
              propertyData?.map((e)=>{
                return (
                  <Card img={e.image[0]} bedroom={e.bedrooms} type={e.type}
                  id={e._id}
                  classn={'col-sm-6 col-lg-3'}
                  price={e.price}
                   schemeName={e.schemeName}
                   area={e.area} location={e.city} pincode={e.pincode}
                   />
                   )
                  })
                }
                {message.length>0 ?
                <h5 style={{color:'red'}}> 
                  {message}
                </h5>:''
                }
          </div>

        <div className="advertise mt-2">
          <h1>
            <center>
            Popular Properties In Ahmedabad
            </center>
          </h1>
          <div className='container-fluid mt-2 row'> 
          {console.log(cityName)}
          {
            cityName.length>0 && (<PopularProperties city={cityName}/>)
          }
          {/* {
            card__data.map((e)=>
            {
              return (
                <Card img={e?.img} type={e.type} price={e?.price}
                classn={'col-sm-6 col-lg-3'}
                bedroom={e?.bedrooms}
                area={e?.area} schemeName= {e?.schemeName} location={e?.location}
                pincode={e?.pincode}
                ></Card>
                )
              })
            } */}
            </div>
        </div>
    </div>
    </>
  )
}

export default Home