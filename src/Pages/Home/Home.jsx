import React from 'react'
import img1 from '../../Images/pexels-photo-3285725.png'
import './Home.css'
import Card from '../../Components/Card/Card'
import Footer from '../../Components/Footer'
const Home = () => {
  return (
    <>
    <div className="main__container">
        <div className="main__image">
            <img src={img1} alt="img1" />
        </div>
        <center>
        <h1>
            Discover your Property in RealBidz
            </h1>
        </center>
        <form action="" method='post'>
          <p>
            <label htmlFor="district">Distric</label>
            <select name="district" id="district">
              <option value="disabled city">Choose city</option>
            </select>
          </p>
          <p>
            <label htmlFor="village">Area/Village</label>
            <select name="village" id="village">
              <option value="village">Choose Village</option>
            </select>
          </p>
          <p>
            <label htmlFor="type">Type</label>
            <select name="type" id="type">
              <option value="Type">Choose Type</option>
            </select>
          </p>
          <p>
            <label htmlFor="category">Category</label>
            <select name="category" id="category">
              <option value="category">Choose Category</option>
            </select>
          </p>
          <p>
            <label htmlFor="bidget">Price</label>
            <select name="budget" id="budget">
              <option value="budget">Budget</option>
            </select>
          </p>
          <p>
            <button type="submit">
            &#128269;
            Search</button>
          </p>
        </form>
        <Card img={img1}>
        <h1>2 BHK apartment
          48.8Lac |1140sqft
        </h1>
        <h3>
          Kavish amara
        </h3>
        </Card> 
    </div>
    </>
  )
}

export default Home