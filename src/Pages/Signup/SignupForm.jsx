import React, { useState } from 'react'
import logo from '../../Images/auction.png'
import './SignupForm.css'
import { useForm } from 'react-hook-form';
import axios from 'axios';
const SignupForm = () => {
    // const [formdata,setFormdata]=useState({});
    const {register,handleSubmit,watch,formState:{errors}}=useForm();
    const [formError,setFormError]=useState("");
    const submit=(data)=>{
        console.log("eee",errors);
        console.log(data);
        // localhost:9999/api/v1/signup/adduser
        axios.post('http://localhost:9999/api/v1/signup/adduser',data).then((data)=>{
            console.log(1);
            console.log(data.data.data);
        }).catch((error)=>{
            setFormError(error.response.data.message+'!!');
            console.log(error);
        })
    }
   
    const ValidationSchema={
        firstName:{
            required:{
                value:true,
                message:"First Name is required"
            }
        },
        lastName:{
            required:{
                value:true,
                message:"Last Name is required"
            }
        },
            email:{
                required:{
                    value:true,
                    message:"Email is required"
                }
            },
            phoneNo:{
                required:{
                    value:true,
                    message:"Phone no. is required"
                },
                pattern:{
                    value:/^(0|91)?[6-9][0-9]{9}$/,
                    message:"Enter Valid Phone no."
                }
            },
            password:{
                required:{
                    value:true,
                    message:"Password must be required"
                },
                pattern:{
                    value:/(?=.*[0-9])(?=.*[a-zA-Z]).{8,}/,
                    message:"Password must contain letter and digits and length must 8"
                },
            },
            cpswd:{
                required:{
                    value:true
                }
            },
            tandc:{
                required:{
                    value:true,
                    message:"Agree with terms and conditions"
                }
            }
        }
      return (
    <>
    {/* form__container */}
    <div className='form__container row mt-5 ms-3'>
    <div className="col-xl-6 form__left ">
        <img src={logo} alt="Logo Image" />
    </div>
    <div className="col-xl-6 form__right col-sm-12">
        {/* // form__right */}
        <h1>REGISTER FORM</h1>
    <form action="" onSubmit={handleSubmit(submit)}>        
            <h1 style={{color:'Red'}}>{formError}</h1>
        <p >
        <label htmlFor="firstName">Firstname</label>
        <br />
        <input type="text" name="firstName"
         id="fName"
        //  className='form-control col-lg-6 col-xl-12'
         placeholder='Enter your firstname'
         {...register("firstName",ValidationSchema.firstName)}
         />
         {<span style={{color:'red'}}>
            {errors?.firstName?.message}
         </span>}
        </p>
        <p className='col-xl-12'>
            <label htmlFor="lastName">Lastname</label>
            <br />
            <input type="text"
             name="lastName" 
             id="lName"
             placeholder='Enter your lastname'
             {...register('lastName',ValidationSchema.lastName)}
             />
            {
                <span style={{color:'red'}}>
                    {errors?.lastName?.message}</span>
            }                
        </p>
        <p>
            <label htmlFor="email">Email</label>
            <br />
            <input type="email" name="email"
             id="email"
             placeholder='Enter your email address'
             {...register('email',ValidationSchema.email)}
             />
             {
                <span style={{color:'red'}}>
                    {errors?.email?.message}
                </span>
             }
        </p>
        <p>
            <label htmlFor="phoneNo">Phone</label>
            <br />
            <input type="number"
             name="phoneNo" id="phoneNo"
             placeholder='Enter your phoneno.'
             {...register('phoneNo',ValidationSchema.phoneNo)}
             />
             {
                <span style={{color:'red'}}>
                    {errors?.phoneNo?.message}
                </span>
             }
        </p>
        <p>
            <label htmlFor="password">Password</label>
            <br />
            <input type="password" name="password"
             id="password" 
             placeholder='Enter your password'
             {...register("password",ValidationSchema.password)}
             />
             {
                <span style={{color:'red'}}>
                    {errors?.password?.message}
                </span>
             }
        </p>
        <p>
            <label htmlFor="cpswd">Confirm Password</label>
            <br />
            <input type="password"
             name="cpswd" id="cpswd" 
             placeholder='Confirm your password'
             {...register("cpswd",ValidationSchema.cpswd)}
             />
             {
                watch('cpswd')!==watch('password')?(
                <span style={{color:'red'}}>
                    NOT MATCH
                    {/* {errors.cpswd?.message} */}
                </span>):null
             }
        </p>
        <p className='tandc form-check'>
            <input type="checkbox" name="tandc" id="tandc"
            className="form-check-input"
            {...register("tandc",ValidationSchema.tandc)}
            />
            <label htmlFor="tandc"
            className="form-check-label"
            >I Agree To Terms And Conditions 
            {
                <p style={{color:'red'}}>
                    {errors?.tandc?.message}
                </p>
            }
            </label>
        </p>
        <p>
            <input type="submit" value="SignUp" />
        </p>
        <p>
            Already register?
            <span>
                <a href="/login">login now</a>
            </span>
        </p>
    </form>
    </div>
    </div>
    </>
  )
}

export default SignupForm