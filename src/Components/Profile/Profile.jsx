import axios from 'axios';
import React, { useEffect, useState } from 'react'


const Profile = () => {
  const [data,setData]=useState([]);
  const getUserData=()=>{
    
    const user=localStorage.getItem("user");
    axios.get("http://localhost:9999/api/v1/login/getuserdetails",{
      headers:{
        token:user
      }
    }).then((data)=>{
      setData(data.data.data);
      console.log(data);
    }).catch((error)=>{
      console.log(error);
    })
  }
  const [editedData,setEditedData]=useState({
    firstName:data[0]?.firstName,
    lastName:data[0]?.lastName,
    phoneNo:data[0]?.phoneNo,
    email:data[0]?.email,
  });
  const [editing,setEditing]=useState(false);
  const handleSubmit=(e)=>{
    e.preventDefault();
    editedData.firstName=e.target.firstName.value;
    editedData.lastName=e.target.lastName.value;
    editedData.phoneNo=e.target.phoneNo.value;
    editedData.email=e.target.email.value;
    console.log(editedData);
    axios.put("http://localhost:9999/api/v1/login/updateuser",editedData,{
      headers:{
        token: localStorage.getItem("user")
      }
    }).then((data)=>{
      console.log(data);
      localStorage.setItem("user",data.data.newToken)
    }).catch((err)=>{
      console.log(err);
    })
    setEditing(false);
  }


  useEffect(()=>{
    getUserData();
  },[]);
  return (
    <div>
      <p >
          <b className='fs-2 me-2'>
             Profile 
            </b> 
        <span onClick={()=>{setEditing(true)}} className='link' style={{cursor:"pointer"}}>
        Edit
        </span>
            <hr />
      </p>
        
        <div className="row container " style={{gap:'2rem'}}>
          <form action=''  onSubmit={handleSubmit}>
            <p className='col-5'>
                FirstName
                <br />
                <input type="text" name="firstName" id="" defaultValue={data[0]?.firstName} disabled={!editing}
                />
            </p>
            <p className='col-5'>
              Last Name
              <br />
                <input type="text" name="lastName" id="" defaultValue={data[0]?.lastName}  disabled={!editing}
                />
            </p>
            <p className='col-5'>
              Phone No
              <br />
                <input type="number" name="phoneNo" id="" defaultValue={data[0]?.phoneNo}  disabled={!editing}
                />
            </p>
            <p className="col-5">
              Email 
              <br />
              <input type="email" name="email" id="" defaultValue={data[0]?.email}
              disabled={!editing}/>
            </p>
            {
              editing && (
                <p>
                  <button className="btn btn-primary">save</button>
                </p>
              )
            }
            </form>
        </div>

    </div>
  )
}

export default Profile