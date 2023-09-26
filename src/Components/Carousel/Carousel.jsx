import React,{useState} from "react";
import {BiSolidLeftArrow,BiSolidRightArrow} from 'react-icons/bi'
import "./Carousel.css";

const Carousel = ({images}) => {
    const [currImg,setCurrImg]=useState(0);
    if(images)
  {return (
    <>
      <div className="carousel ">
        <div className="carousel-inner"
        style={{backgroundImage:`url(${images[currImg]})`}}
        >
        <div className="left"
        onClick={()=>{
        currImg>0 && setCurrImg(currImg-1)
        }}
        >
            <BiSolidLeftArrow/>

        </div>
        <div className="center">
        </div>
        <div className="right"
        onClick={()=>{
           setCurrImg((currImg+1)%(images.length))
            }}>
        <BiSolidRightArrow/>
        </div>
        </div>
        
      </div>
    </>
    // <div className="carousel-container">
    //   <div className="carousel-wrapper">
    //     <button className="left-arrow">&lt;</button>
    //         <div className="carousel-content-wrapper">
    //             <div className="carousel-content">
    //                 <img src={images} alt="image" />
    //             </div>
    //         </div>
    //     <button className="right-arrow">&gt;</button>
    //   </div>
    // </div>
  );}
};

export default Carousel;
