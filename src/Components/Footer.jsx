import './Footer.css'
import React from 'react'
import { Link } from 'react-router-dom'
import {AiFillFacebook,AiFillInstagram,AiFillTwitterSquare,AiFillLinkedin} from 'react-icons/ai'
const Footer = () => {
  return (
    <footer className='footer__container'>
    <p>
            <Link to='/'>
              <b>
              Realbidz
              </b>
              </Link>
              <ul>
                  <p>
            <h4>Contact :</h4> <span>+917228806111</span>
                  </p>

              </ul>
            <h4>
                Email:
            </h4>
            <span id="email">vinitchokshi1809@gmail.com</span>
    </p>
    <p>
      <b>Links</b>
      <ul>
        <li>
      <Link to='/about'>About Us</Link>
        </li>
      </ul>
      <li>
      <Link to='/contact'>Contact Us</Link>
      </li>
    </p>
    <p>
      <b>Legal</b>
      <br />
      <Link to='/'>Terms And Conditions</Link>
    </p>
    <p>
      <b>
      Follow Us on
      </b>
      <ul>
        <li>
        <AiFillFacebook/>
        Facebook
        </li>
        <li>
        <AiFillInstagram/>
        Instagram
        </li>
        <li>
        <AiFillTwitterSquare/>
        Twitter
        </li>
        <li>
        <AiFillLinkedin/>
        Linkdin
        </li>
      </ul>
    </p>
    </footer>
  )
}

export default Footer