import "./Footer.css";
import React from "react";
import { Link } from "react-router-dom";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
  AiFillLinkedin,
} from "react-icons/ai";
const Footer = () => {
  return (
    <>
      {/* <div className="container">
        <div className="row m-3 text-dark discription">
          <div className="col-4 p-3">
            <div className="list-group " id="list-tab" role="tablist">
              <a
                class="list-group-item list-group-item-action active text-dark"
                id="list-home-list"
                data-bs-toggle="list"
                href="#list-home"
                role="tab"
                aria-controls="list-home"
              />
              Description
              <a
                class="list-group-item list-group-item-action text-dark"
                id="list-profile-list"
                data-bs-toggle="list"
                href="#list-profile"
                role="tab"
                aria-controls="list-profile"
              />
              Profile
              <a
                class="list-group-item list-group-item-action text-dark"
                id="list-messages-list"
                data-bs-toggle="list"
                href="#list-messages"
                role="tab"
                aria-controls="list-messages"
              >
                Messages
              </a>
              <a
                class="list-group-item list-group-item-action text-dark"
                id="list-settings-list"
                data-bs-toggle="list"
                href="#list-settings"
                role="tab"
                aria-controls="list-settings"
              >
                Map
              </a>
            </div>
          </div>
          <div className="col-8 p-2 text-black">
            <div className="tab-content" id="nav-tabContent">
              <div
                class="tab-pane fade show active p-3 "
                id="list-home"
                role="tabpanel"
                aria-labelledby="list-home-list"
              >
                Whether you're seeking to buy or sell property in realbidz our
                know-how and market insights will help you through the process
                to make it easier, more enjoyable and rewarding. Blue Sky
                Properties approach to real estate is to maintain a highly
                personalized service, ensuring utmost care, trust, quality and
                ultimately a better client experience. www.realbidz.com is a
                property portal. All real estate inquiries are handled by
                Registered professional Real Estate Agents. FOX Smart Estate
                Agency is a Registered & Licensed Estate Agent with Registration
                No. 488 and Licensed No. 344/E
              </div>
              <div
                class="tab-pane fade p-3"
                id="list-profile"
                role="tabpanel"
                aria-labelledby="list-profile-list"
              >
                <div class="left">
                  website Creators:
                  <br />
                  Name : Vinit Harishbhai Chokshi
                  <br />
                  Mobile : 7228806111
                  <br />
                  Email: vinitchokshi1809@gmail.com
                </div>
                <div
                // style={{float: right}}
                >
                  <img src="vinit2.jpg" alt="" height="200px" width="200px" />
                </div>
              </div>
              <div
                class="tab-pane fade "
                id="list-messages"
                role="tabpanel"
                aria-labelledby="list-messages-list"
              >
                <form action="index.html" method="get">
                  <label for=""></label>
                  <textarea
                    name="msg"
                    id=""
                    cols="40"
                    rows="7"
                    placeholder="For any query u can msg us"
                  ></textarea>
                  <input type="submit" value="submit" class="" />
                </form>
              </div>
              <div
                class="tab-pane fade"
                id="list-settings"
                role="tabpanel"
                aria-labelledby="list-settings-list"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.893969325645!2d72.48581451493968!3d22.990926184969066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b90a3f34d37%3A0x913d17ff7ed5306b!2sL.%20J.%20Campus%20near%20Sanand%20chowkadi!5e0!3m2!1sen!2sin!4v1677237870947!5m2!1sen!2sin"
                  width="600"
                  height="200"
                  //  style={{border:0}}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <footer class="" id="footer">
        <div className="container text-light">
          <div style={{overflowX:"auto"}}>
          {/* //  style={{overflowX: auto}} */}
            <table className=" table table-borderless w-100">
              <tr>
                <th className="tab-head-padd tablehead">
            Realbidz
                {/* <Link to="/" className="footer-link">
          </Link> */}
                    </th>
                <th className="tab-head-padd tablehead">Links</th>
                <th className="tab-head-padd tablehead">Legal</th>
                <th className="tab-head-padd tablehead">Follow Us On</th>
              </tr>
              <tr>
                <td className="concat">
                  Concat : 
                  <a href="/#" className="footer-link"> +917228806111</a>
                </td>
                <td>
                <Link to="/about" className="footer-link"
                >About Us</Link>
                </td>
                <td>
                  <a href="/#" className="footer-link">
                    Terms & Conditions
                  </a>
                </td>
                <td className="share">
                <p>
                <AiFillFacebook />
                <span className="footer-link">
              Facebook
                </span>
                    
                </p>
                </td>
              </tr>
              <tr>
                <td>Email :</td>
                <td>
                <Link to="/contact" className="footer-link">Contact Us</Link>
                  {/* <a href="contact.html" className="footer-link">
                    Contact Us
                  </a> */}
                </td>
                <td>
                  <a href="/#" className="footer-link">
                    News
                  </a>
                </td>
                <td className="share">
                    <p >
                <AiFillLinkedin />
                <span className="footer-link">
              Linkdin

                </span>
                    </p>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="/#" className="footer-link concat">
                    vinitchokshi1809@gmail.com
                  </a>
                </td>
                <td></td>
                <td></td>
                <td className="share">
                  <p>
                  <AiFillTwitterSquare />
                  <span className="footer-link">
              Twitter
                  </span>
                  </p>
                </td>
              </tr>
              <tr className="abc">
                <td></td>
                <td></td>
                <td></td>
                <td className="share">
                  <p>
                  <AiFillInstagram />
                  <span className="footer-link">
              Instagram
                  </span>
                  </p>
                </td>
              </tr>
            </table>
          </div>
          <div
            className="align-items-center text-center aboutRealBidz"
            // style="text-align: justify; "
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio,
            dolorum nisi. Quisquam cumque soluta tenetur, nobis culpa amet rem
            dicta laboriosam repellat exercitationem iusto, quasi vero
            perspiciatis reprehenderit rerum. Neque facilis magnam iusto, quo
            deserunt nulla, ut earum a similique odit assumenda laborum?
            Deleniti, accusamus sit ad voluptatem fugit error ex iste non odit
            sed eligendi aliquid hic esse perspiciatis molestias aliquam.
            Perspiciatis nemo rerum inventore numquam itaque suscipit laudantium
            odio ad non, repudiandae totam accusantium optio sapiente iure quos,
            animi voluptate a enim deleniti. Temporibus quisquam, dolore minus
            eveniet illo quaerat in quidem vitae aspernatur et ad velit nobis.
          </div>
        </div>
      </footer>
      {/* <footer className="footer__container">
        <p>
          <Link to="/">
            <b>Realbidz</b>
          </Link>
          <ul>
            <p>
              <h4>Contact :</h4> <span>+917228806111</span>
            </p>
          </ul>
          <h4>Email:</h4>
          <span id="email">vinitchokshi1809@gmail.com</span>
        </p>
        <p>
          <b>Links</b>
          <ul>
            <li>
              <Link to="/about">About Us</Link>
            </li>
          </ul>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </p>
        <p>
          <b>Legal</b>
          <br />
          <Link to="/">Terms And Conditions</Link>
        </p>
        <p>
          <b>Follow Us on</b>
          <ul>
            <li>
              <AiFillFacebook />
              Facebook
            </li>
            <li>
              <AiFillInstagram />
              Instagram
            </li>
            <li>
              <AiFillTwitterSquare />
              Twitter
            </li>
            <li>
              <AiFillLinkedin />
              Linkdin
            </li>
          </ul>
        </p>
      </footer> */}
    </>
  );
};

export default Footer;
