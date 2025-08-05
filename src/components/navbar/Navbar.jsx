import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";
import home from "../img/homeimage.png"
import 'bootstrap/dist/css/bootstrap.css'
import { auth, googleProvider } from "../../config/firebaseConfig";
import { signOut } from "firebase/auth";
// import logo from './logo.svg';
import Home from "../../pages/home/Home.jsx";
function Nabar() {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  const { pathname } = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
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
  const currentUser = {
    id: 1,
    username: "Stanley",
    isSeller: true,
  };

  return (

    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      {isMobile && <div><p>Mobile view</p></div>}
      <div className="container">
        <div>

          <Link to="/">

            <h1>
              <img src={home} alt="" className="house" />
              <span>moiBlog</span>
              <span>.</span>
            </h1>

          </Link>

        </div>
        <div className="links">
          <Link to="/test">   <span>Explore</span></Link>

          <Link to="/add" className="Sin"><span>Add Something</span> </Link>


          <select required className="languages" >
            <option value="design">English</option>
            <option value="web">Japanese</option>
            <option value="animation">Chinese</option>
            <option value="music">Yoruba</option>
            <option value="music">Igbo</option>
            <option value="music">Hausa</option>
          </select>

          <Link to="/login" className="Sin"><span>Sign In</span> </Link>
          <Link to="/register" ><button>Register</button> </Link>

          <button onClick={logout}>Logout</button>

          {!auth?.currentUser && <span>Become a Seller</span>}
          {auth?.currentUser?.email ? (
            <div className="user" onClick={() => setOpen(!open)}>
              <img
                src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />

              <span>{auth?.currentUser?.email}</span>
              {open && <div className="options">
                {currentUser.isSeller && (
                  <>
                    <Link className="link" to="/mygigs">
                      Gigs
                    </Link>
                    <Link className="link" to="/add">
                      Add New Gig
                    </Link>
                  </>
                )}
                <Link className="link" to="/orders">
                  Orders
                </Link>
                <Link className="link" to="/messages">
                  Messages
                </Link>
                <Link className="link" to="/">
                  Logout
                </Link>
              </div>}
            </div>
          ) : (
            <>
              <span>Sign in</span>
              <Link className="link" to="/register">
                <button>Join</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>


  );
}

export default Nabar;
