import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";
import home from "../img/homeimage.png"
import 'bootstrap/dist/css/bootstrap.css'
import { auth, googleProvider } from "../../config/firebaseConfig";
import { signOut } from "firebase/auth";
// import logo from './logo.svg';

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
function Nabar() {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  const contentStyle = {
    height: "50%",
    width: "100%",
    background: "green",
    border: "4px solid",

    // border: "transparent"

  };

  const { pathname } = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 890);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener("scroll", isActive);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // const currentUser = null
  const logout = async () => {
    try {
      await signOut(auth);

    } catch (err) {
      console.error(err);
    }
    window.location.reload(true);
  };


  return (
    <div className="all-nav">
      {isMobile ? <div className="mobile-view"><div className="mobile-logo">
        {pathname == "/" ? (<a href="#home" className="navOpts">

          <h5>
            <img src={home} alt="" className="house" />
            <b>
              <span >moiBlog</span>
            </b>
          </h5> </a>) : (
          <Link to="/" className="navOpts">
            <h5>
              <img src={home} alt="" className="house" />
              <b>
                <span >moiBlog</span>
              </b>
            </h5>
          </Link>
        )}
        <div className="nav-topbar">  <Popup
          contentStyle={contentStyle}
          trigger={<FontAwesomeIcon className="men-nav" icon={faBars} />}
          position="bottom center"
          nested
        >
          {close => (
            <div className="optso">
              <Link className="linke" to="/dashboard">
                Dashboard
              </Link>
              <br />
              <Link className="linke" to="/add">
                Add
              </Link>
              <br />
              <Link className="linke" to="/test">
                Available
              </Link>
              <br />
              <Link className="linke" to="/messages">
                Messages
              </Link>
              <br />
              <Link className="linke" to="/messages">
                Messages
              </Link>
              <br />
              <Link className="linke" to="/messages">
                Messages
              </Link>
              <br />
              {/* <Link className="linke" to="/settings">
                Settings
              </Link> */}

              <Link className="linke" to="/" onClick={logout}>
                Logout
              </Link>
            </div>

          )}

        </Popup></div>
      </div>

      </div > : <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>

        <div className="containa">
          <div>

            {pathname == "/" ? (<a href="#home" className="navOpts">

              <h5>
                <img src={home} alt="" className="house" />
                <b>
                  <span >EduSphere</span>
                </b>
              </h5> </a>) : (
              <Link to="/" className="navOpts">
                <h5>
                  <img src={home} alt="" className="house" />
                  <b>
                    <span >EduSphere</span>
                  </b>
                </h5>
              </Link>
            )}



          </div>

          <div className="links">
            {pathname == "/" &&
              <div className="links">
                <span><Link to="/about" className="navOpts">About Us</Link></span>
                <span>                 <Link to="/contact" className="navOpts">   How it Works</Link></span>
                <span>  <Link to="/contact" className="navOpts">  Features</Link></span>
                <span> <Link to="/contact" className="navOpts">Contact Us</Link></span>




                {/* <Link to="/test" style={{ textDecoration: 'none' }} className="navOpts">   <span>How it Works</span></Link>
              <Link to="/test" style={{ textDecoration: 'none' }} className="navOpts">   <span>Features</span></Link>
              <Link to="/test" style={{ textDecoration: 'none' }} className="navOpts">   <span>Contact Us</span></Link> */}
              </div>

            }

            {/* <Link to="/add"className="Sin"><span>Add Something</span> </Link> */}


            {/* <select required className="languages" >
            <option value="design">English</option>
            <option value="web">Japanese</option>
            <option value="animation">Chinese</option>
            <option value="music">Yoruba</option>
            <option value="music">Igbo</option>
            <option value="music">Hausa</option>
          </select> */}





            {/* {!auth?.currentUser && <span>
            <Link to="/register" ><button>Register</button> </Link></span>} */}
            {auth?.currentUser?.email ? (

              <div className="user" onClick={() => setOpen(!open)}>
                <img
                  src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="" />
                <span>{auth?.currentUser?.email}</span>
                {open && <div className="options">
                  {auth?.currentUser && (
                    <>
                      <Link className="link" to="/dashboard">
                        Dashboard
                      </Link>
                      <Link className="link" to="/add">
                        Add New Gig
                      </Link>
                    </>
                  )}
                  <Link className="link" to="/test">
                    Available Gigs
                  </Link>
                  <Link className="link" to="/messages">
                    Messages
                  </Link>
                  <Link className="link" to="/messages">
                    Messages
                  </Link>
                  <Link className="link" to="/messages">
                    Messages
                  </Link>
                  <Link className="link" to="/settings">
                    Settings
                  </Link>
                  <Link className="link" to="/" onClick={logout}>
                    Logout
                  </Link>
                </div>}
              </div>
            ) : (
              <>
                <Link to="/register">
                  <button className="reg" >Register</button>
                </Link>
                <Link to="/login"><button className="log">Login</button> </Link>

              </>
            )}
          </div>
        </div>

      </div>
      }

    </div >



  );
}

export default Nabar;
