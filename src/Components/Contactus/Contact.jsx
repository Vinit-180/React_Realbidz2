import React, { useEffect, useState } from 'react'
import contactUs from '../../Images/contactus.png'
import { useForm } from 'react-hook-form'
import jwt_decode from 'jwt-decode';
import { ConnectionStates } from 'mongoose';
import axios from 'axios';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Contact = () => {
    const [decoded,setDecoded] =useState();
    useEffect(()=>{
        setDecoded( jwt_decode(localStorage.getItem("user")));
    },[]);
    console.log(decoded)
    const [formData1, setFormData] = useState({
        fullName:decoded?.fullName,
        email: decoded?.email,
        phoneNumber:decoded?.phoneNumber
      });
      const [msg,setMsg]=useState("qwert");
    //   const [success,setSuccess]=useState(false);
      const notify = (success,msg) =>{success ? (toast.success(msg,{
        position: toast.POSITION.TOP_RIGHT
    })) : (toast.error(msg))};
    const submit=(e)=>{
        e.preventDefault();
        formData1.fullName=e.target.name.value;
        formData1.email=e.target.email.value;
        formData1.phoneNumber=e.target.phone.value;
        formData1.message=e.target.message.value;
        console.log(formData1);
        axios.post("http://localhost:9999/api/v1/contact/addticket",formData1).then((data)=>{
            console.log(data.data.message);
            setMsg(data.data.message);
            // setSuccess(true);
             notify(true,data.data.message)
                }).catch((err)=>{
                    console.log("wergt",err);
            notify(false,err.message);
        })
        
    }
  return (
    <>
    <div className="container">
        <h1>
            Contact Us
        </h1>
        <div className="align-items-center row" id="form">
            <div className="col-sm-6" id="image_concat">
                <img src={contactUs} alt="image"/>
            </div>
            <div className="container-fluid  col-sm-6">
                <form id="form1" onSubmit={submit}>
                    <div className="mb-3">
                        <input type="text" name="name" id="example" className="form-control" placeholder="Name"
                        defaultValue={decoded?.fullName}
                        />
                    </div>
                    <div className="mb-3 d-flex flex-row">
                        <input type="email" className="form-control me-2" id="exampleInputEmail1"
                            aria-describedby="emailHelp" placeholder="Email"
                            name="email"
                            defaultValue={decoded?.email}
                            />
                        <input type="number" 
                            defaultValue={decoded?.phoneNumber}
                            name="phone" id="phonenumber" className="form-control "
                            placeholder="Phone Number"
                            />
                    </div>

                    <div className="mb-3">
                        <textarea  id="" cols="85" rows="10" placeholder="Messages"
                        name="message"
                            className="form-control"></textarea>
                    </div>
                    <button type="submit" className="btn btn-danger w-100 mt-3">Submit</button>
                </form>
            </div>

            <div className=" container m-4 p-2 row">
                <div className="col-sm-9">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.893969325645!2d72.48581451493968!3d22.990926184969066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b90a3f34d37%3A0x913d17ff7ed5306b!2sL.%20J.%20Campus%20near%20Sanand%20chowkadi!5e0!3m2!1sen!2sin!4v1677237870947!5m2!1sen!2sin"
                        width="100%" height="300" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="col-sm-3 justify-content-center">
                    <h2 className="text-primary">Realbidz</h2>
                    <p className="justify-content-start mb-3">
                        L J Institute Of Engineering And Technology , Makarba, Sarkhej-Okaf, Gujarat 380054
                    </p>
                    <p className="justify-content-start mb-3">
                        <h4>Office Hours:</h4>
                        Daily : 9:00-19:00
                        <br/>
                        Monday: closed
                    </p>
                </div>
            </div>
        </div>
        <ToastContainer/>
    </div>
    </>
    )
}

export default Contact