import React, { useRef, useState, useEffect, useContext } from 'react';
import "./Login.css"
import { Link } from 'react-router-dom';
import { auth, googleProvider } from "../../config/firebaseConfig";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged
} from "firebase/auth";

import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { consoleOrigin } from 'firebase-tools/lib/api';

const Login = () => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [user, setUser] = useState(null);





  const signIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, pwd);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log(auth?.currentUser?.email)
  }, [auth?.currentUser])


  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };


  return (
    <>

      <section>
        <div className="wrapper">
          <div className="logo">
            <Link to="/"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxx46BgSMG_BlM4CANwlEqOcHTmY8qT2pstw&s" alt="" />
            </Link>
          </div>
          <div className="text-center mt-4 name">
            Sign In
          </div>
          <form className="p-3 mt-3" onSubmit={signIn}>
            <div className="form-field d-flex align-items-center">
              <span className="far fa-user"></span>
              <input
                type="email"
                required
                placeholder="Type in your email"
                autoComplete="off"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-field d-flex align-items-center">
              <span className="fas fa-key"></span>
              <input
                required
                placeholder="Type a strong password"
                type="password"
                onChange={(e) => setPwd(e.target.value)}
              />
            </div>
            <button className="btn mt-3">Login</button>
          </form>

          <button onClick={signInWithGoogle} className="google-button" > <img src="https://static-00.iconduck.com/assets.00/google-icon-2048x2048-pks9lbdv.png" alt="" className="google-icon" />Sign in with Google</button>
          <div className="text-center fs-6">
            <Link to="/forge"> <a href="#" >Forgot password?</a></Link>
            or <Link to="/register"><a href="#">Sign up</a>
            </Link>  </div>

          <br />

        </div>

      </section>

    </>
  )
}

export default Login
