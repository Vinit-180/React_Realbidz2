import React, { useState } from "react";
import profile from "../../Images/defaultProfilePic.jpg";
import Profile from "../../Components/Profile/Profile";
import UserProperty from "../../Components/UserProperty";
import {FiCamera} from 'react-icons/fi'
import './Dashboard.css'
const Dashboard = () => {
  const [card,setCard]=useState('profile');
  const ButtonSelect=(id)=>{
    const buttons=document.querySelectorAll('.profile-card');
    for(let i=0;i<buttons.length;i++)
    {
      if(buttons[i].id===id){
        buttons[i].classList.add("active");
        setCard(buttons[i].id);
        // console.log(card,id);
      }
      else
      {
        buttons[i].classList.remove("active");
      }
    }
  }
  return (
    <>
      <div className="container-fluid row">
        <div className="col-3">
          <h1>
            <center>DASHBOARD</center>
          </h1>
          <p className="w-75 mt-2 profileImage">
            <input type="file" name="userProfile" id="profilepic" 
            style={{display:"none"}}
            />
            <label htmlFor="profilepic">
            <div className="text-profilepic">
            {/* <a href="/#" className1="icon" title="User Profile">
      <i class="fa fa-user"></i>
    </a> */}
            <i class="fas fa-camera"></i>
            </div>
            <img src={profile} alt="UserImage" id="userProfile" />
            </label>
            
          </p>
          <div class="list-group mt-5 w-75 m-auto">
            <button
              type="button"
              class="list-group-item list-group-item-action active profile-card"
              aria-current="true"
              id='profile'
              onClick={()=>{ButtonSelect('profile')}}
            >
              Profile
            </button>
            <button
              type="button"
              class="list-group-item list-group-item-action profile-card"
              id='property'
              onClick={()=>{ButtonSelect('property')}}
            >
              Your Property
            </button>
          </div>
        </div>
        <div className="col-9 mt-5">
          {
            console.log(card)
          }
          {card==='profile'? <Profile/> : <UserProperty/>}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
