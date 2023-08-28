import React, { useState } from 'react'
import './Login.css'
import { useForm } from 'react-hook-form'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const {register,handleSubmit,formState:{errors}}=useForm();
  const [formError,setFormError]=useState("");
  const navigate=useNavigate();
  const submit=(data)=>{
    console.log(data);
    axios.post('http://localhost:9999/api/v1/login/getuser',data).then((data)=>{
      setFormError('');
      console.log(data);
      localStorage.setItem("user",data.data.userToken)
      localStorage.setItem("isuser",true)
      navigate('/');
      window.location.reload();
    }).catch((error)=>{
      console.log(error);
      setFormError(error);
    })
  }
  const ValidationSchema={
    email:{
      required:{
        value:true,
        message:"Email is required"
      },
      pattern:{
        value:/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-_]+\.([a-zA-Z]{2,4}$)/,
        message:'Invalid Email'
      }
    },
    password:{
      required:{
        value:true,
        message:"Password is required",
      },
      pattern:{
        value:/(?=.*[0-9])(?=.*[a-zA-Z]).{8,}/,
        message:"Password must contain letter and digit and length must be 8"
      }
    }
  }

  return (
    <>
    <div className="container row login__form ">
    <div className="col-6">
          
          </div>
      <div className="col-6">
        <h1>
          <center>
          Login
          </center>
          <hr />
        </h1>
        <form action="" method="post" onSubmit={handleSubmit(submit)} className='h-100 mt-5'>
          <p>
          <label htmlFor="email">Email address</label>
          <br />
          <input type="email" name="email" id="email" 
          className='mt-3 w-75'
          {...register('email',ValidationSchema.email)}
          placeholder='Enter your email address'
          />
          {
            <span style={{color:'red'}}> 
              {errors?.email?.message}
            </span>
          }
          </p>
          <p>
            <label htmlFor="pswd">Password</label>
            <br />
            <input type="password" name="password" id="pswd"
            placeholder='Enter your password'
            className='mt-2 w-75'
            {...register('password',ValidationSchema.password)}
            />
            {
              <span style={{color:'red'}}> 
                  {errors?.password?.message}
              </span>
            }
          </p>
          <p>
            <button type='submit' className={`btn btn-danger text-light mt-2 ${formError?'disable':''} w-75`}>
              Login
            </button>
          </p>
          <p className='w-75 text-center'>
              Forgot Password?
          </p>
        </form>
      </div>
      
    </div>
    </>
  )
}

export default Login