import React, { useEffect, useState } from 'react'
import { carousel__images } from "../data";
import Carousel from "../Components/Carousel/Carousel";
import Card from "../Components/Card/Card";
import axios from 'axios';
const PopularProperties = ({city}) => {
  const [popularData,setPopularData]=useState([]);
  
  const getcityData=()=>{
    console.log("POPULAR DATA");
    axios.post('http://localhost:9999/api/v1/property/getproperty',{"city":city,budget:undefined}).then((data)=>{
      console.log(data);
      setPopularData(data.data.data);
    }).catch((err)=>{
      console.log(err);
    })
  }
  useEffect(()=>{
    getcityData();
  },[])
  return (
    <>
    <div className="row">
    {
      popularData.map((e)=>{
        return <Card img={e?.image[0]} type={e?.type}
          id={e?._id}
          price={e?.price} area={e?.area} schemeName={e?.schemeName}
         location={e?.fullAddress}
         pincode={e?.pincode} />
      })
    }
    </div>
    </>
  )
}

export default PopularProperties