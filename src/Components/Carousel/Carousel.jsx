import React,{useState} from "react";
import {BiSolidLeftArrow,BiSolidRightArrow} from 'react-icons/bi'
import "./Carousel.css";

const Carousel = ({images}) => {
    const [currImg,setCurrImg]=useState(0);
    console.log(images)
  return (
    <>
      <div className="carousel">
        <div className="carousel-inner"
            style={{backgroundImage:`url(${images[currImg].img})`}}
        >
        {/* <img src={images[currImg].img} alt="image"
            /> */}
        <div className="left"
        onClick={()=>{
        currImg>0 && setCurrImg(currImg-1)
        }}
        >
            <BiSolidLeftArrow/>
            {/* <button className="left-arrow">
                &lt;
            </button> */}

        </div>
        <div className="center">
        </div>
        <div className="right"
        onClick={()=>{
           currImg<images.length-1 && setCurrImg(currImg+1)
            }}>
        <BiSolidRightArrow/>
            {/* <button className="right-arrow">
                &gt;
            </button> */}
        </div>
        {/* {
            images.map((e)=>{
                return <img src={e.img} alt="imaggre" />
            })
        } */}
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
  );
};

export default Carousel;
