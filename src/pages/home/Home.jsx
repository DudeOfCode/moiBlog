import React from 'react'
import { Link } from "react-router-dom";
import "./Home.scss"
import { auth } from "../../config/firebaseConfig";
import Navbar from '../../components/navbar/Navbar';
import Post from '../../components/post/Post';

import Register from '../register/Register';
const Home = () => {
  return (
    <section>
      <Navbar />

      <div className="cont">
        <a id="contact-us"> </a>
        <h1>Blog on Progress</h1>
        <br />

        <div className="for-post">
          <Post />
          <Post />
        </div>

        <div className="for-post">
          <Post />
          <Post />
        </div>

        <div className="for-post">
          <Post />
          <Post />

        </div>


      </div>
      <div className='linkus'>
        <Link to="/add"> <button className="sup" >Newadd</button></Link>
        <br />
        <Link to="/login"> <button className="sup">Sign In</button></Link>

        <Link to="/register"><button className="sup">Sign Up</button></Link>
        <br />
        <Link to="/gigs"> <button className="sup">Added Projects</button></Link>
        <br />
        <Link to="/test"> <button className="sup">All Avalable (for me)</button></Link>
        <br />
        <p>Dash B</p>
        <Link to="/dashboard"> <button className="sup">Your Things</button></Link>
        <Link to="/apage"> <button className="sup">Videos</button></Link>

        <br />
        <p>Cart</p>
        <Link to="/progress"> <button className="sup">Progress</button></Link>
        <br />
        <Link to="/complete"> <button className="sup">Completed</button></Link>

        <br />
        <p>Mine</p>
        <Link to="/mycompleted"> <button className="sup">myCompleted</button></Link>
        <br />
        <Link to="/myprogress"> <button className="sup">myProgress</button></Link>
        <br />
        <Link to="/chat"> <button className="sup">Chat</button></Link>

      </div>
    </section>

  )
}
export default Home;