import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import "./Home.scss"
import { auth } from "../../config/firebaseConfig";
import Nabar from '../../components/navbar/Navbar';

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Post from '../../components/post/Post';
import { useMutation, useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";

import UseOnlineStatus from '../../components/UseOnlineStatus';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
const Home = () => {

  const [user, setUser] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
  useEffect(() => {

    const interval = setInterval(() => {

      { auth?.currentUser?.email != null && setUser(auth?.currentUser?.email) }

    }, 1000);

    return () => clearInterval(interval);




  }, [auth?.currentUser]);


  useEffect(() => {

    const handleResize = () => {
      setIsMobile(window.innerWidth < 890);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const posts = useQuery(api.posts.list) || [];
  const [name] = useState(() => auth?.currentUser?.email);

  const link = "https://fantastic-oriole-450.convex.site/getImage?storageId="

  return (
    <div>
      {!isMobile ? (<section className='all-home'>
        {/* <div><HomeNav /></div> */}
        <Nabar />
        <div className='boda' >
          <a id='home' className="offset"></a>
          <div className="appinfo">
            <h6 className='appInfoText'> Read Everything and Digest what you see</h6>
          </div>
          <div className="appHead">
            <p>
              <h1><b>
                Welcome To
                <p>MoiBlog</p>
              </b>
              </h1>
            </p>
            <p>Conquer your academic challenges with ease. Find help or lend a <br />
              hand - your success starts here! Connecting students to share <br />
              knowledge, complete academic tasks and earn rewards</p>
          </div>


        </div >
        <div className='under'>
          {!user ? (<div><Link to="/register"> <button className='mob-jnow'>Join Now</button> </Link> -Or-
            <Link to="/login"> <button className='mob-jnow'>Login</button> </Link></div>) : (<div>You are logged in as {auth?.currentUser?.email}</div>)
          }
        </div>

        <div className="for-post" >
          <Post />
        </div>


        {/* <div className='small-box-parent'>
          <div className='small-box'>
            <div className='up-space'></div>
            <h6><b>Post Assignments</b></h6>
            <p><h6><b>with Ease</b></h6></p>
            <p>Need help? Create a Task, Set Deadlines and Let your Peers Assist </p>
          </div>
          <div className='small-box'>

            <h6><b>Find Tasks That</b></h6>
            <p><h6><b>Match your Skills</b></h6></p>
            <p>Search for Tasks You are Passionate About and Earn Recognition</p>
          </div>
          <div className='small-box'>

            <p><h6><b>Connect with Peers</b></h6></p>
            <p>Chat, Share Files and Work Together Seamlessly </p>
          </div>

        </div> */}

        {/* <div className='ent-bring'>
          <p style={{ color: "blue", fontSize: "12px", marginTop: "5%" }}>Your Learning Partner, Anytime, Anywhere.</p>
          <div className='bring'> <h2> <b>Bringing students together to solve assignments, share knowledge, and achieve academic excellence.</b>  </h2> </div>
          <div className='bringn'>
            <span><b>Fast Matching</b> <p>Post a task and connect with solvers instantly.</p></span>
            <span className='no-c'><b>No cost to join</b> <p>Totally free and easy to use</p></span>

          </div>
          <div className='bringn'>
            <span><b>Trusted Community</b><p>Verified profiles ensures quality interactions</p></span>
            <span className='earn-l'><b>Earn & Learn</b> <p>Help others while gaining money and new skills</p></span>

          </div>

        </div>
        <div className='h-works'>
          <p className='acad'>Your Academic Superpower is Here!</p>
          <h1>  <b>How it Works</b></h1>
          Whether you need help or want to help, Edusphere connects you with the perfect match
        </div> */}

        {/* <div className='iya-t-pos'>
          <p className='t-pos'>For Task Posters</p>
          <h1><b>Find Scholars to</b> </h1>
          <h1><b>help you with stuff</b></h1>
          Whether you need help or want to help. EduSphere connects you with the perfect match.
        </div>

        <div className='iya-sc-so'>
          <p className='sc-so'>  For Scholars/Solvers</p>
          <h1><b>Help others while gaining new skills.</b></h1>
          The easiest way to put you skils to use and earn money. Use yourknowledge to get more dough
        </div> */}

        <div className='h-works'>
          <h1>  <b>What Do You Wish To Read About?</b></h1>
          MoiBlog has everything you want, be it:
          <div className='tags'>
            <div className='tag-pikin'>
              <span className='butto'><button className='buttso'>Lifestyle</button></span>
              <span className='butto'> <button className='buttso' >Technology and Progamming</button></span>
              <span className='butto'>   <button className='buttso'>Movies and Series</button></span>
              <span className='butto'> <button className='buttso' >Games and Applications</button></span>
            </div >

            <div className='tag-pikin'>
              <span className='butto'>   <button className='buttso'>Reality shows</button></span>
              <span className='butto'>     <button className='buttso' >Academics</button></span>
              <span className='butto'>   <button className='buttso'> Love and Romance</button></span>
              <span className='butto'> <button className='buttso'>Cooking</button></span>
            </div >
            <div className='tag-pikin'>
              <span className='butto'><button className='buttso'>Celebrities</button></span>
              <span className='butto'><button className='buttso'>Medical</button></span>
              <span className='butto'><button className='buttso'>Fantasy</button></span>
              <span className='butto'><button className='buttso'>Folktale</button></span>
            </div >


            <br />
            <Link className='others-link'>And others</Link>
          </div>

        </div>
        {/* <div className="cont">
        <a id="learn" className="offset"> </a>

        <h2><b>How it Works</b></h2>
      </div>

      <div className="cont">
        <a id="features" className="offset"> </a>
        <h1>Features</h1>


      </div> */}



        <div className='lowerPanel'>
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
          {/* <Link to="/countdown"> <button className="sup">myCountdown</button></Link> */}
          <br />
          <br />
          <br />
          {/* <Link to="/chat"> <button className="sup">Forum</button></Link> */}
          <br />
          <br />

          <Link to="/pay"> <button className="sup">Pay</button></Link>
          <br />
          {/* <Link to="/chat"> <button className="sup">Chat</button></Link> */}
          {/* <Link to="/add"> <button className="sup" >Newadd</button></Link> */}

          <Link to="/forum"> <button className="sup">My Forum</button></Link>
          <br />
          <Link to="/chat"> <button className="sup">My play in </button></Link>


          {/* <Link to="/dashboard"> <button className="sup">Your Things</button></Link> */}
          {/* <Link to="/navb"> <button className="sup">Yor Things</button></Link> */}

        </div>

      </section>) : (<div>
        <Nabar />
        <div className='mob-boda' >
          <a id='home' className="offset"></a>
          <div className="mob-appinfo">
            <h6 className='mob-appInfoText'>Connect, Collaborate, Conquer</h6>
          </div>
          <div className="mob-appHead">
            <p>
              <h1><b>
                Welcome To
                <p>MoiBlog</p>
              </b>
              </h1>
            </p>
            <p>Conquer your academic challenges with ease. Find help or lend a <br />
              hand - your success starts here! Connecting students to share <br />
              knowledge, complete academic tasks and earn rewards</p>
          </div>


        </div >
        <div className='mob-under'>
          {!user ? (<div><Link to="/register"> <button className='mob-jnow'>Join Now</button> </Link>
            <Link to="/login"> <button className='mob-jnow'>Login</button> </Link></div>
          ) : (<div>Keep grinding {auth?.currentUser?.email}</div>)

          }

        </div>

        <div className='mob-small-box-parent'>
          <div className='mob-small-box'>
            {/* <div className='up-space'></div> */}
            <h6><b>Post Assignments</b></h6>
            <p><h6><b>with Ease</b></h6></p>
            <p>Need help? Create a Task, Set Deadlines and Let your Peers Assist </p>
          </div>
          <div className='mob-small-box'>

            <h6><b>Find Tasks That</b></h6>
            <p><h6><b>Match your Skills</b></h6></p>
            <p>Search for Tasks You are Passionate About and Earn Recognition</p>
          </div>
          <div className='mob-small-box'>

            <p><h6><b>Connect with Peers</b></h6></p>
            <p>Chat, Share Files and Work Together Seamlessly </p>
          </div>

        </div>
        <div className='mob-ent-bring'>
          <p style={{ color: "blue", fontSize: "12px", marginTop: "5%" }}>Your Learning Partner, Anytime, Anywhere.</p>
          <div className='mob-bring'> <h6> <b>Bringing students together to solve assignments, share knowledge, and achieve academic excellence.</b>  </h6> </div>
          <div className='mob-bringn'>
            <span><b>Fast Matching</b> <p>Post a task and connect with solvers instantly.</p></span>
            <span className='mob-no-c'><b>No cost to join</b> <p>Totally free and easy to use</p></span>

          </div>
          <div className='mob-bringn'>
            <span><b>Trusted Community</b><p>Verified profiles ensures quality interactions</p></span>
            <span className='mob-earn-l'><b>Earn & Learn</b> <p>Help others while gaining money and new skills</p></span>

          </div>

        </div>
        <div className='mob-h-works'>
          <span className='mob-acad'>Your Academic Superpower is Here!</span>
          <h1>  <b>How it Works</b></h1>
          Whether you need help or want to help, Edusphere connects you with the perfect match
        </div>

        <div className='mob-iya-t-pos'>
          <span className='mob-t-pos'>For Task Posters</span>
          <h6><b>Find Scholars to help you with stuff</b></h6>
          Whether you need help or want to help. EduSphere connects you with the perfect match.
        </div>

        <div className='mob-iya-sc-so'>
          <span className='mob-sc-so'>  For Scholars/Solvers</span>
          <h6><b>Help others while gaining new skills.</b></h6>
          The easiest way to put you skils to use and earn money. Use yourknowledge to get more dough
        </div>

        <div className='mob-wh-works'>
          <h5>  <b>What Task do you need done</b></h5>
          You benefit from MGC regardless of the track you are in. Be it
          <div className='mob-tags'>
            <div className='mob-tag-pikin'>
              <span className='mob-butto'><button className='mob-buttso'>Project</button></span>
              <span className='mob-butto'><button className='mob-buttso'>Data Science</button></span>
              <span className='mob-butto'> <button className='mob-buttso' >Project Management</button></span>
              <span className='mob-butto'>   <button className='mob-buttso'>Data Analysis</button></span>
              <span className='mob-butto'>   <button className='mob-buttso'>Al consultancy</button></span>
              <span className='mob-butto'>     <button className='mob-buttso' >Accounting</button></span>
              <span className='mob-butto'>   <button className='mob-buttso'> Project Management</button></span>
              <span className='mob-butto'> <button className='mob-buttso'>Data Entry</button></span>

              <span className='mob-butto'><button className='mob-buttso'>Thesis writing</button></span>
              <span className='mob-butto'><button className='mob-buttso'>Assignments</button></span>
              <span className='mob-butto'><button className='mob-buttso'>Cybersecurity</button></span>
            </div >


            <br />
            And others
          </div>

        </div>
        {/* <div className="cont">
        <a id="learn" className="offset"> </a>

        <h2><b>How it Works</b></h2>
      </div>

      <div className="cont">
        <a id="features" className="offset"> </a>
        <h1>Features</h1>


      </div> */}



        <div className='lowerPanel'>
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
          {/* <Link to="/countdown"> <button className="sup">myCountdown</button></Link> */}
          <br />
          <br />
          <br />
          {/* <Link to="/chat"> <button className="sup">Forum</button></Link> */}
          <br />
          <br />

          <Link to="/pay"> <button className="sup">Pay</button></Link>
          <br />
          {/* <Link to="/chat"> <button className="sup">Chat</button></Link> */}
          {/* <Link to="/add"> <button className="sup" >Newadd</button></Link> */}

          <Link to="/forum"> <button className="sup">My Forum</button></Link>
          <br />


          {/* <Link to="/dashboard"> <button className="sup">Your Things</button></Link> */}
          {/* <Link to="/navb"> <button className="sup">Yor Things</button></Link> */}

        </div>
      </div>)

      }
    </div >



  )
}
export default Home;


















// import React from 'react'
// import { Link } from "react-router-dom";
// import "./Home.scss"
// // import { auth } from "../../config/firebaseConfig";
// import Navbar from '../../components/navbar/Navbar';
// import Post from '../../components/post/Post';

// import Register from '../register/Register';
// const Home = () => {
//   return (
//     <section>
//       <Navbar />

//       <div className="cont">
//         <a id="contact-us"> </a>
//         <h1>Blog on Progress</h1>
//         <br />

//         <div className="for-post">
//           <Post />
//           <Post />
//         </div>

//         <div className="for-post">
//           <Post />
//           <Post />
//         </div>

//         <div className="for-post">
//           <Post />
//           <Post />

//         </div>


//       </div>
//       <div className='linkus'>
//         <Link to="/add"> <button className="sup" >Newadd</button></Link>
//         <br />
//         <Link to="/login"> <button className="sup">Sign In</button></Link>

//         <Link to="/register"><button className="sup">Sign Up</button></Link>
//         <br />
//         <Link to="/gigs"> <button className="sup">Added Projects</button></Link>
//         <br />
//         <Link to="/test"> <button className="sup">All Avalable (for me)</button></Link>
//         <br />
//         <p>Dash B</p>
//         <Link to="/dashboard"> <button className="sup">Your Things</button></Link>
//         <Link to="/apage"> <button className="sup">Videos</button></Link>

//         <br />
//         <p>Cart</p>
//         <Link to="/progress"> <button className="sup">Progress</button></Link>
//         <br />
//         <Link to="/complete"> <button className="sup">Completed</button></Link>

//         <br />
//         <p>Mine</p>
//         <Link to="/mycompleted"> <button className="sup">myCompleted</button></Link>
//         <br />
//         <Link to="/myprogress"> <button className="sup">myProgress</button></Link>
//         <br />
//         <Link to="/chat"> <button className="sup">Chat</button></Link>
//         <br />
//         <Link to="/settings"> <button className="sup">Settings</button></Link>

//       </div>
//     </section>

//   )
// }
// export default Home;