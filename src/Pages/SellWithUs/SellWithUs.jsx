import React, { useEffect, useState } from "react";
import "./SellWithUs.css";
import sellImage from "../../Images/sellwithus.svg";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import {GiCancel} from 'react-icons/gi'
import 'react-toastify/dist/ReactToastify.css';
const SellWithUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [city,setCity]=useState([]);
  const [area,setArea]=useState([]);
  const getCity=()=>{
    axios
    .get("http://localhost:9999/api/v1/city/getcity")
    .then((data)=>{
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
      console.log(data);
      setArea(data.data.data);
    })
    .catch((error)=>{
      console.log(error);
    })
  }
  
  const clickForLoop = (item, id) => {
    for (let i = 0; i < item.length; i++) {
      if (item[i].id === id) {
        // console.log('cicked',id);
        item[i].classList.add("click");
        item[i].classList.add("btn-danger");
        item[i].classList.remove("btn-outline-secondary");
        // item[i].classList.remove("btn");
        // console.log(item[i].classList)
      } else {
        item[i].classList.remove("click");
        item[i].classList.remove("btn-danger");
        item[i].classList.add("btn-outline-secondary");
      }
    }
  };
  const click = (id, type) => {
    if (type === "category") {
      const category = document.querySelectorAll(".category");
      clickForLoop(category, id);
    }
    if (type === "type") {
      const type_ = document.querySelectorAll(".type");
      clickForLoop(type_, id);
    }
    if (type === "bedroom") {
      const bedroom = document.querySelectorAll(".bedroom");
      clickForLoop(bedroom, id);
    }
    if (type === "furnishing") {
      const furnishing = document.querySelectorAll(".furnishing");
      clickForLoop(furnishing, id);
    }
    if (type === "listed__by") {
      const listed__by = document.querySelectorAll(".listed__by");
      clickForLoop(listed__by, id);
    }
  };
  const ValidationSchema = {
    // Category:{
    //     requried:{
    //         value:true,
    //         message:"Category of property required"
    //     }
    // },
    type: {
      required: {
        value: true,
        message: "Property type is required",
      },
    },
    bedrooms: {
      required: {
        value: true,
        message: "No.of bedroom is required",
      },
    },
    furnishing: {
      required: {
        value: true,
        message: "which type of furnishing",
      },
    },
    listedBy: {
      required: {
        value: true,
        message: "listed By whom is required",
      },
    },
    carpetArea: {
      required: {
        value: true,
        message: "CarpetArea is required",
      },
    },
    schemeName:{
      required:{
        value:true,
        message:"SchemeName is required"
      }
    },
    floor: {
      required: {
        value: true,
        message: "propertis at floor",
      },
    },
    totalFloors: {
      required: {
        value: false,
      },
    },
    amenities: {
      required: {
        value: false,
      },
    },
    constuctionStatus: {
      required: {
        value: true,
        message: "status of property is required",
      },
    },
    ageOfConstruction: {
      required: {
        value: true,
        message: "age of property is required",
      },
    },
    city:{
      required:{
        value: true,
        message: "City of property is required",
      },
    },
    area:{
      required:{
        value:true,
        message:"Area of property is required"
      }
    },
    fullAddress: {
      required: {
        value: true,
        message: "FullAddress is required",
      },
    },
    pincode:{
        required:{
          value:true,
          message:"Pincode is required"
        }
    },
    price: {
      required: {
        value: true,
        message: "price of property",
      },
    },
    image: {
      required: {
        value: true,
        message: "Images of your Property",
      },
    },
  };
  const fileReader=new FileReader();
  const [images, setImages] = useState([]);
  const [prevImages,setPrevImages]=useState([]);
  const notify = (success,msg) =>{success ? (toast.success(msg,{
    position: toast.POSITION.TOP_RIGHT
})) : (toast.error(msg))};
  const handleImageChange = (event) => {
    event.preventDefault();
    const newImages = event.target.files;
    console.log("1 IMAGE UPLOADED");
    console.log(images);
    const img2=URL.createObjectURL(event.target.files[0]);
    // console.log(img2);
    // console.log(newImages)
    setPrevImages([...prevImages,{file:img2}]);
    setImages([...images,...newImages]);
  };
  const removeImage=(id)=>{
    const arr=[];
    // setImages(...arr,images.filter((e)=>{
    //   if(e.file!=id)
    //   {
    //     return true
    //   }
    //   return false
    // }));
    setPrevImages(...arr,prevImages.filter((e)=>{
      if(e.file!=id)
      {
        return true
      }
      return false
    }))

  }
  const [formError, setFormError] = useState("");
  const submit = (data) => {

    window.alert(
      "PLEASE WAIT FOR UPLOADING THE DATA AND DO NOT REFRESH YOUR PAGE"
    );
    console.log(errors);
    console.log(data);
    const formData = new FormData();
    var keys = Object.keys(data);
    keys.map((e) => {
      console.log(e);
      formData.append(e, data[e]);
    });
    console.log(images);
    images.forEach((image) => {
      console.log(1);
      console.log(image);
      formData.append("file", image);
    });
    const config = {
      headers: { "content-type": "multipart/form-data" },
    };
    axios
      .post(
        "http://localhost:9999/api/v1/property/addproperty",
        formData,
        {headers: {
          "content-type": "multipart/form-data" ,
          token: localStorage.getItem("user")
        }}
      )
      .then((data) => {
        console.log(data);
        notify(true,'Your form has been successfully uploaded.');
        setTimeout(()=>{
          window.location.pathname='/';
        },2000)
      })
      .catch((error) => {
        setFormError(error.message);
        console.log(error.message);
        notify(false,error.message)
      });
  };
  useEffect(()=>{
    getCity();
  },[]);
  return (
    <>
      <div className="row container-fluid ">
        <div className="col-md-6 mt-5 mb-5 col-sm-0">
          <img src={sellImage} alt="" className="h-100 w-100" />
        </div>
        <div className="col-md-6 mt-5 mb-5 col-sm-12">
          <h1>
            <center>Post your Ad</center>
            <p style={{color:'red'}}>
            {formError}
            </p>
          </h1>
          <form encType="multipart/form-data" onSubmit={handleSubmit(submit)}>
            {/* <p>
              Category:
              <br />
              <button
                type="button"
                name="category"
                className="category me-3"
                id="category1"
                onClick={() => {
                  click("category1",'Bedroom');
                }}
              >
                Residential
              </button>
              <button
                type="button"
                name="category"
                className="category me-3"
                id="category2"
                onClick={() => {
                  click("category2",'Bedroom');
                }}
              >
                Commercial
              </button>
            </p> */}
            <p>
              Type:
              {<span style={{ color: "red" }}>{errors?.type?.message}</span>}
              <br />
              <input
                type="radio"
                className="btn-check me-2 type"
                name="type"
                id="type1"
                value="House/Villa"
                {...register("type", ValidationSchema.type)}
                autocomplete="off"
              />
              <label
                className="btn btn-outline-secondary me-3 type"
                onClick={() => {
                  click("type1", "type");
                }}
                id="type1"
                htmlFor="type1"
              >
                House/Villa
              </label>
              <input
                type="radio"
                className="btn-check me-2 type"
                name="type"
                id="type2"
                value="Flat"
                {...register("type", ValidationSchema.type)}
                autocomplete="off"
              />
              <label
                className="btn btn-outline-secondary me-3 type"
                onClick={() => {
                  click("type2", "type");
                }}
                id="type2"
                htmlFor="type2"
              >
                Flat
              </label>
              {/* <button
                name="type"
                id="type1"
                type="button"
                required
                className="type me-2 mt-1"
                onClick={() => {
                  click("type1", "type");
                }}
                {...register("type", ValidationSchema.type)}
              >
                House/Villa
              </button> */}
              {/* <button
                name="type"
                id="type2"
                type="button"
                className="type mt-1"
                onClick={() => {
                  click("type2", "type");
                }}
                {...register("type", ValidationSchema.type)}
              >
                Flat
              </button> */}
            </p>
            <p>
              Bedrooms
              {
                <span style={{ color: "red" }}>
                  {errors?.bedrooms?.message}
                </span>
              }
              <br />
              <input
                type="radio"
                className="btn-check me-2 bedroom"
                name="bedrooms"
                id="bedroom1"
                value="1"
                {...register("bedrooms", ValidationSchema.bedrooms)}
                autocomplete="off"
              />
              <label
                className="btn btn-outline-secondary me-3 bedroom"
                onClick={() => {
                  click("bedroom1", "bedroom");
                }}
                id="bedroom1"
                htmlFor="bedroom1"
              >
                1
              </label>
              <input
                type="radio"
                className="btn-check me-2 bedroom"
                name="bedrooms"
                id="bedroom2"
                value="2"
                {...register("bedrooms", ValidationSchema.bedrooms)}
                autocomplete="off"
              />
              <label
                className="btn btn-outline-secondary me-3 bedroom"
                onClick={() => {
                  click("bedroom2", "bedroom");
                }}
                id="bedroom2"
                htmlFor="bedroom2"
              >
                2
              </label>
              <input
                type="radio"
                className="btn-check me-2 bedroom"
                name="bedrooms"
                id="bedroom3"
                value="3"
                {...register("bedrooms", ValidationSchema.bedrooms)}
                autocomplete="off"
              />
              <label
                className="btn btn-outline-secondary me-3 bedroom"
                onClick={() => {
                  click("bedroom3", "bedroom");
                }}
                id="bedroom3"
                htmlFor="bedroom3"
              >
                3
              </label>
              <input
                type="radio"
                className="btn-check me-2 bedroom"
                name="bedrooms"
                id="bedroom4"
                value="4"
                {...register("bedrooms", ValidationSchema.bedrooms)}
                autocomplete="off"
              />
              <label
                className="btn btn-outline-secondary me-3 bedroom"
                onClick={() => {
                  click("bedroom4", "bedroom");
                }}
                id="bedroom4"
                htmlFor="bedroom4"
              >
                4
              </label>
              <input
                type="radio"
                className="btn-check me-2 bedroom"
                name="bedrooms"
                id="bedroom4+"
                value="4+"
                {...register("bedrooms", ValidationSchema.bedrooms)}
                autocomplete="off"
              />
              <label
                className="btn btn-outline-secondary me-3 bedroom"
                onClick={() => {
                  click("bedroom4+", "bedroom");
                }}
                id="bedroom4+"
                htmlFor="bedroom4+"
              >
                4+
              </label>
            </p>
            <p>
              Furnishing
              {
                <span style={{ color: "red" }}>
                  {errors?.furnishing?.message}
                </span>
              }
              <br />
              <input
                type="radio"
                className="btn-check"
                name="furnishing"
                id="furnished"
                value="Fully Furnished"
                autocomplete="off"
                {...register("furnishing", ValidationSchema.furnishing)}
                // onClick={() => {
                //   click("furnished",'furnishing');
                // }}
              />
              <label
                className="btn btn-outline-secondary me-3 furnishing"
                onClick={() => {
                  click("furnished", "furnishing");
                }}
                id="furnished"
                htmlFor="furnished"
              >
                Fully Furnished
              </label>
              <input
                type="radio"
                className="btn-check me-2 furnishing"
                name="furnishing"
                id="semifurnished"
                value="Semi Furnished"
                {...register("furnishing", ValidationSchema.furnishing)}
                autocomplete="off"
              />
              <label
                className="btn btn-outline-secondary me-3 furnishing"
                onClick={() => {
                  click("semifurnished", "furnishing");
                }}
                id="semifurnished"
                htmlFor="semifurnished"
              >
                Semi Furnished
              </label>
              {/* <button
                className="furnishing me-3"
                type="button"
                name="furnishing"
                id="semifurnished"
                {...register("furnishing", ValidationSchema.furnishing)}
                onClick={() => {
                  click("semifurnished", "furnishing");
                }}
              >
                Semi-Furnished
              </button> */}
              <input
                type="radio"
                className="btn-check me-2 furnishing"
                name="furnishing"
                id="unfurnished"
                value="UnFurnished"
                {...register("furnishing", ValidationSchema.furnishing)}
                autocomplete="off"
              />
              <label
                className="btn btn-outline-secondary me-3 furnishing"
                onClick={() => {
                  click("unfurnished", "furnishing");
                }}
                id="unfurnished"
                htmlFor="unfurnished"
              >
                UnFurnished
              </label>
            </p>
            <p>
              Listed by
              {
                <span style={{ color: "red" }}>
                  {errors?.listedBy?.message}
                </span>
              }
              <br />
              <input
                type="radio"
                className="btn-check me-2 listed__by"
                name="listedBy"
                id="builder"
                value="Builder"
                {...register("listedBy", ValidationSchema.listedBy)}
                autocomplete="off"
              />
              <label
                className="btn btn-outline-secondary me-3 listed__by"
                onClick={() => {
                  click("builder", "listed__by");
                }}
                id="builder"
                htmlFor="builder"
              >
                Builder
              </label>
              <input
                type="radio"
                className="btn-check "
                name="listedBy"
                id="dealer"
                value="Dealer"
                {...register("listedBy", ValidationSchema.listedBy)}
                autocomplete="off"
              />
              <label
                className="btn btn-outline-secondary me-3 listed__by"
                onClick={() => {
                  click("dealer", "listed__by");
                }}
                id="dealer"
                htmlFor="dealer"
              >
                Dealer
              </label>
              <input
                type="radio"
                className="btn-check me-2 listed__by"
                name="listedBy"
                id="owner"
                value="Owner"
                {...register("listedBy", ValidationSchema.listedBy)}
                autocomplete="off"
              />
              <label
                className="btn btn-outline-secondary me-3 listed__by"
                onClick={() => {
                  click("owner", "listed__by");
                }}
                id="owner"
                htmlFor="owner"
              >
                Owner
              </label>
              {/* <button
                className="listed__by me-3"
                name="listedBy"
                type="button"
                id="builder"
                onClick={() => {
                  click("builder", "listed__by");
                }}
                {...register("listedBy", ValidationSchema.listedBy)}
              >
                {" "}
                Builder
              </button> */}
            </p>
            <p>
              Carpet Area(ft <sup>2</sup>):
              {
                <span style={{ color: "red" }}>
                  {errors?.carpetArea?.message}
                </span>
              }
              <br />
              <input
                type="text"
                name="carpetArea"
                id="carea"
                placeholder="800"
                {...register("carpetArea", ValidationSchema.carpetArea)}
              />
            </p>
            <p>
              SchemeName:{
                <span style={{ color: "red" }}>
                  <br />
                {errors?.schemeName?.message}
              </span>
              }
              <input type="text"
               name="schemeName" 
              id="scheme"
              placeholder="Casela Tower"
              {...register("schemeName",ValidationSchema.schemeName)}
              />
            </p>
            <p>
              Floor :
              {<span style={{ color: "red" }}>{errors?.floor?.message}</span>}
              <br />
              <input
                type="number"
                name="floor"
                id="floor"
                placeholder="6"
                {...register("floor", ValidationSchema.floor)}
              />
            </p>
            <p>
              Total Floors:
              {
                <span style={{ color: "red" }}>
                  {errors?.totalFloors?.message}
                </span>
              }
              <br />
              <input
                type="number"
                name="totalFloors"
                id="tfloor"
                placeholder="8"
                {...register("totalFloors", ValidationSchema.totalFloors)}
              />
            </p>
            <p>
              Amenities :
              {
                <span style={{ color: "red" }}>
                  {errors?.amenities?.message}
                </span>
              }
              <br />
              <input
                type="text"
                name="amenities"
                id="amenities"
                {...register("amenities", ValidationSchema.amenities)}
              />
            </p>
            <p>
              Constuction Status:
              {
                <span style={{ color: "red" }}>
                  {errors?.constuctionStatus?.message}
                </span>
              }
              <br />
              <input
                type="text"
                name="constuctionStatus"
                id="ttype"
                placeholder="new Launch/ready to Move"
                {...register(
                  "constructionStatus",
                  ValidationSchema.constuctionStatus
                )}
              />
            </p>
            <p>
              Age of Constuction :
              {
                <span style={{ color: "red" }}>
                  {errors?.ageOfConstruction?.message}
                </span>
              }
              <br />
              <input
                type="text"
                name="ageOfConstruction"
                id="age"
                placeholder="1 year"
                {...register(
                  "ageOfConstruction",
                  ValidationSchema.ageOfConstruction
                )}
              />
            </p>
            <p>
            <label htmlFor="cities">City</label>
            {
              <span style={{color:"red"}}>
            {errors?.city?.message}
            </span>}
             <br />
            <select
            id="cities"
            name='city'
            {...register("city",ValidationSchema.city)}
            onChange={getArea}
             >
              <option value=''>--Choose city--</option>
              {
                city?.map((e)=>{
                  return (<option value={e._id} 
                    name="city" 
                  >
                    {e.cityName}
                  </option>);
                })}
            </select>
            </p>
            <p>
            <label htmlFor="area" id='area'>Area/Village</label>
            
            {
              <span style={{color:'red'}}>
                {errors?.area?.message}
              </span>
            }
            <br />
            <select name="area" id="area"
            {...register('area',ValidationSchema.area)}
            >
              <option value="">Choose Area/Village</option>
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
              Full Address:
              {
                <span style={{ color: "red" }}>
                  {errors?.fullAddress?.message}
                </span>
              }
              <br />
              <input
                type="text"
                name="fullAddress"
                id="fa"
                {...register("fullAddress", ValidationSchema.fullAddress)}
              />
            </p>
            <p>
              PinCode:
              {
                <span style={{ color: "red" }}>
                  <br />
                {errors?.pincode?.message}
              </span>
              }
              <input type="number" name="pincode"
               id="pincode"
               {...register("pincode",ValidationSchema.pincode)}
               />
            </p>
            <p>
              Set a Price
              {<span style={{ color: "red" }}>{errors?.price?.message}</span>}
              <br />
              <input
                type="number"
                name="price"
                id="price"
                placeholder="1,000,000"
                {...register("price", ValidationSchema.price)}
              />
            </p>
            
            <p>
              Upload Upto 20 Photos
              <br />
              <input
                type="file"
                name="imag"
                id="imag"
                className="multiple-files-filepond"
                // required=""
                accept="image/"
                {...register("image")}
                onChange={handleImageChange}
                
                // accept='.jpeg/.jpg/.png'
              />
              
              {images.length > 0 ? images.length+' Upload' :''}

              <br />
              {
                prevImages.map((e)=>{
                  // console.log(e,"eeeee");
                  return (
                  <>
                  <img src={e.file} alt="IAMGES"
                  className="preview_image"
                  />
                  <GiCancel className="cancel_image" onClick={()=>{removeImage(e.file)}}/>
                  </>
                  )
                  // fileReader.onload((e)=>{

                  // })
                  // return (fileReader.readAsDataURL(e.blob))
                })
              }
            </p> 
            <p>
              <button type="submit" className="btn btn-danger">
                Post Now
              </button>
            </p>
            <ToastContainer/>
          </form>
        </div>
      </div>
    </>
  );
};

export default SellWithUs;

{
  /* <button
                name="bedroom"
                type="button"
                id="bedroom1"
                className="bedroom me-3"
                onClick={() => {
                  click("bedroom1", "bedroom");
                }}
                {...register("bedroom", ValidationSchema.bedroom)}
              >
                1
              </button>
              <button
                name="bedroom "
                type="button"
                className="bedroom me-3"
                id="bedroom2"
                onClick={() => {
                  click("bedroom2", "bedroom");
                }}
                {...register("bedroom", ValidationSchema.bedroom)}
              >
                2
              </button>
              <button
                name="bedroom "
                type="button"
                className="bedroom me-3"
                id="bedroom3"
                onClick={() => {
                  click("bedroom3", "bedroom");
                }}
                {...register("bedroom", ValidationSchema.bedroom)}
              >
                3
              </button>
              <button
                name="bedroom "
                type="button"
                className="bedroom me-3"
                id="bedroom4"
                onClick={() => {
                  click("bedroom4", "bedroom");
                }}
                {...register("bedroom", ValidationSchema.bedroom)}
              >
                4
              </button>
              <button
                name="bedroom "
                type="button"
                className="bedroom me-3"
                id="bedroom4+"
                onClick={() => {
                  click("bedroom4+", "bedroom");
                }}
                {...register("bedroom", ValidationSchema.bedroom)}
              >
                4+
              </button> */
}
