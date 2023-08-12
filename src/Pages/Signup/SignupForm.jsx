import React, { useState } from 'react'
import logo from '../../Images/auction.png'
import './SignupForm.css'
import { useForm } from 'react-hook-form';
const SignupForm = () => {
    // const [formdata,setFormdata]=useState({});
    const submit=(data)=>{
        console.log(data);
    }
    const {register,handleSubmit,watch,formState:{errors},getValues}=useForm();
    const password=watch("pswd");
    const ValidationSchema={
        fname:{
            required:{
                value:"true",
                message:"First Name is required"
            }
        },
        lname:{
            required:{
                value:'true',
                message:"Last Name is required"
            }
        },
            email:{
                required:{
                    value:"true",
                    message:"Email is required"
                }
            },
            phone:{
                required:{
                    value:"true",
                    message:"Phone no. is required"
                },
                pattern:{
                    value:/^(0|91)?[6-9][0-9]{9}$/,
                    message:"Enter Valid Phone no."
                }
            },
            pswd:{
                required:{
                    value:'true',
                    message:"Password must be required"
                },
                pattern:{
                    value:/(?=.*[0-9])(?=.*[a-zA-Z]).{8,}/,
                    message:"Password must contain letter and digits and length must 8"
                },
            },
            cpswd:{
                required:{
                    value:'true'
                }
            },
            tandc:{
                required:{
                    value:'true',
                    message:"please agree with us"
                }
            }
        }
      return (
    <>
    <div className='form__container'>
    <div className="form__left">
        <img src={logo} alt="Logo Image" />
    </div>
    <div className="form__right">
        <h1>REGISTER FORM</h1>
    <form action="" method='post' onSubmit={handleSubmit(submit)}>
        <p>
        <label htmlFor="fname">Firstname</label>
        <br />
        <input type="text" name="fname"
         id="fname"
         placeholder='Enter your firstname'
         {...register("fname",ValidationSchema.fname)}
         />
         {<span style={{color:'red'}}>
            {errors?.fname?.message}
         </span>}
        </p>
        <p>
            <label htmlFor="lname">Lastname</label>
            <br />
            <input type="text"
             name="lname" 
             id="lname"
             placeholder='Enter your lastname'
             {...register('lname',ValidationSchema.lname)}
             />
            {
                <span style={{color:'red'}}>
                    {errors?.lname?.message}</span>
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
            <label htmlFor="phone">Phone</label>
            <br />
            <input type="number"
             name="phone" id="phone"
             placeholder='Enter your phoneno.'
             {...register('phone',ValidationSchema.phone)}
             />
             {
                <span style={{color:'red'}}>
                    {errors?.phone?.message}
                </span>
             }
        </p>
        <p>
            <label htmlFor="pswd">Password</label>
            <br />
            <input type="password" name="pswd"
             id="pswd" 
             placeholder='Enter your password'
             {...register("pswd",ValidationSchema.pswd)}
             />
             {
                <span style={{color:'red'}}>
                    {errors?.pswd?.message}
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
                watch('cpswd')!==watch('pswd')?(
                <span style={{color:'red'}}>
                    NOT MATCH
                    {/* {errors.cpswd?.message} */}
                </span>):null
             }
        </p>
        <p className='tandc'>
            <input type="checkbox" name="tandc" id="tandc"
            {...register("tandc",ValidationSchema.tandc)}
            />
            <label htmlFor="tandc">I Agree To Terms And Conditions 
            {
                <p style={{color:'red'}}>
                    {errors?.tandc?.message}
                </p>
            }
            </label>
        </p>
        <p>
            <input type="submit" value="Signup" />
        </p>
        <p>
            Already register?
            <span>
                <a href="/">login now</a>
            </span>
        </p>
    </form>
    </div>
    </div>
    </>
  )
}

export default SignupForm