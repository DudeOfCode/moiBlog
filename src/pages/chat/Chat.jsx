import React, { useState, useEffect, useRef } from 'react';
// import { useDropzone } from 'react-dropzone';
import { auth, db } from "../../config/firebaseConfig";
// import { getDocs, collection, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { faTrash, faPen, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";

import Nabar from '../../components/navbar/Navbar';
import home from "../../components/img/homeimage.png"
import "./Chat.scss"

import { format } from 'date-fns';
import { Link } from 'react-router-dom';


const Chat = () => {

  const sendChat = useMutation(api.forum.sendChat);
  //...
  const chats = useQuery(api.forum.getMessages);
  const [newMessageText, setNewMessageText] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    // Make sure scrollTo works on button click in Chrome
    setTimeout(() => {
      const el = document.getElementById('chatRoom');
      // id of the chat container ---------- ^^^
      if (el) {
        el.scrollTop = el.scrollHeight;
      }
    }, 0);


  }, [chats]);

  useEffect(() => {

    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='full'>
      {(<div className='contain'>

        <div className='chatRoom' id="chatRoom">
          <div className='chatHead'>

            <Link to="/"> <img src={home} alt="" /></Link>

            <h6><b>EduSphere Forum</b></h6>

          </div>
          {chats?.map((chat) => (
            <section className='roomCov'>

              <div className='left'>

                {chat.user != auth?.currentUser?.email &&
                  <div className='cover'>

                    <div className='leftChat'>
                      {chat.body}
                      <div className='chatTime'>
                        {format(new Date(chat._creationTime), 'p')}
                      </div>
                    </div>
                    <div className='chatUser'>
                      {chat.user}
                    </div>
                  </div>}
              </div>
              <div className='right'>
                {chat.user == auth?.currentUser?.email &&
                  <div className='coverRight'>
                    <div className='chatUser'>
                      Me
                    </div>
                    <div className='rightChat'>
                      {chat.body}
                      <div className='chatTime'>
                        {format(new Date(chat._creationTime), 'p')}
                      </div>
                    </div>

                  </div>


                }

              </div>

            </section>
          ))}

        </div>
        <div class="box-footer">
          <form onSubmit={async (e) => {
            e.preventDefault();
            await sendChat({ user: auth?.currentUser?.email, body: newMessageText });
            setNewMessageText("");
          }}>
            <div class="form-wrapper">
              <textarea type="text" id="inputFor" name="message" value={newMessageText}
                onChange={async (e) => {
                  const text = e.target.value;
                  setNewMessageText(text);
                }} placeholder="Type Message ..." class="form-control" />
              <span class="input-group-btn">
                <button type="submit" disabled={!newMessageText} id="sendBut" class="btn btn-warning btn-flat">Send</button>
              </span>
            </div>
          </form>
        </div>
      </div>)}
    </div >
  );
}
export default Chat