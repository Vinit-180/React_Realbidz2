import img1 from "./Images/house__.png";
// import img2 from '../../Images/pexels-photo-3285725.png'
import img2 from './Images/pexels-photo-3285725.png'
import img3 from './Images/Change_house_1.jpg'
// import img3 from '../../Images/Change_house_1.jpg'
export const links = [
  {
    name: "Realbidz",
    path: "/",
  },
  {
    name: "About",
    path: "/",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

export const carousel__images = [
  {
    id: 1,
    img: img1
  },
  {
    id: 2,
    img: require("./Images/house1_01.jpg"),
  },
  {
    id: 3,
    img: require("./Images/house1_02.jpg"),
  },
  {
    id: 4,
    img: require("./Images/house1_03.jpg"),
  },
];

export const card__data=[
  {
    id:1,
    type:'Apartment',
    bedrooms:2,
    img:img2,
    price:'48.8 Lac',
    area:'1140sqft',
    schemeName:'Kavish amara (Under Constuction)',
    location:'Ahmedabad',
    pincode:382016
  },
  {
    id:2,
    type:'Apartment',
    bedrooms:2,
    img:img3,
    price:'48.8 Lac',
    area:'1140sqft',
    schemeName:'Kavish amara (Under Constuction)',
    location:'Ahmedabad',
    pincode:382016
  }
]
