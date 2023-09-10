import React from 'react'

const Profile = () => {
  return (
    <div>
        <h1>
            Profile
            <hr />

        </h1>
        <div className="row container " style={{gap:'2rem'}}>
            <p className='col-5'>
                FirstName
                <br />
                <input type="text" name="fname" id="" />
            </p>
            <p className='col-5'>
              Last Name
              <br />
                <input type="text" name="lname" id="" />
            </p>
            <p className='col-5'>
              Phone No
              <br />
                <input type="number" name="phone" id="" />
            </p>
            <p className="col-5">
              Email 
              <br />
              <input type="email" name="email" id="" />
            </p>
        </div>
    </div>
  )
}

export default Profile