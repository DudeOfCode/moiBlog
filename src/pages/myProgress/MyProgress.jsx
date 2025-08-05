import React from 'react'
import { useState, useEffect, useRef } from 'react';
import { auth, db } from "../../config/firebaseConfig";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";

import { faTrash, faPen, faInfoCircle, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import UseOnlineStatus from '../../components/UseOnlineStatus';

import "./MyProgress.scss"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const MyProgress = () => {
  const isOnline = UseOnlineStatus();

  const [selectedFile, setSelectedFile] = useState(null);


  // const [isUser, setIsUser] = useState(message.author = auth?.currentUser?.email)

  const [isOnProgress, setIsOnProgress] = useState(false);
  const [Worker, setWorker] = useState("");



  const onProgress = useMutation(api.messages.toggleOnProgress);

  const pdf = "pdf"
  const [name] = useState(() => auth?.currentUser?.email);

  const messages = useQuery(api.messages.list) || [];

  const link = "https://dazzling-schnauzer-268.convex.site/getImage?storageId="

  // const [isOwner] = (auth?.currentUser?.email == update);

  //Edit Section


  const generateUploadUrl = useMutation(api.messages.generateUploadUrl);


  const fileInput = useRef(null);
  const sendChat = useMutation(api.chat.sendChat);
  const chats = useQuery(api.chat.getMessages);
  const deleteOne = useMutation(api.chat.deleteChats);
  const deleteAll = useMutation(api.chat.deleteAllChats);
  const [newMessageText, setNewMessageText] = useState("");
  const sendFile = useMutation(api.files.sendFile);
  const files = useQuery(api.files.getFile) || [];



  const deleteChat = async (_id) => {
    await deleteOne({
      id: _id
    })
  };
  const deleteAllChat = async (_id) => {
    await deleteAll({
      chatRoom: _id
    })
  };


  async function handleSendFile(_id) {

    // const convexSiteUrl = import.meta.env.VITE_CONVEX_SITE_URL;

    try {

      // Step 1: Get a short-lived upload URL
      const postUrl = await generateUploadUrl();
      // Step 2: POST the file to the URL
      const result = await fetch(postUrl, {
        method: "POST",
        headers: { "Content-Type": selectedFile.type },
        body: selectedFile,
      });

      const { storageId } = await result.json();

      await sendFile({
        bodies: storageId,
        author: auth?.currentUser?.email,
        dId: _id,

      })

      fileInput.current.value = "";
    } catch (error) {
      console.error(error);

    }

  }




  const toggleOnProgress = async (_id) => {
    setIsOnProgress(false)
    await deleteAll({
      chatRoom: _id
    })
    await onProgress({
      id: _id,
      onProgress: isOnProgress,
      worker: ""
    })
  };
  const toggleComplete = async (_id) => {
    await onComplete({
      id: _id,
      complete: true,
    })
  };



  return (

    <div className="App">

      <div>

        <div className='details'><p ><h1>{auth?.currentUser?.email}</h1></p>
          <p><h2>{auth?.currentUser?.displayName}</h2></p>
          <div> {isOnline ? "You're online!" : "You're offline."}</div>
        </div>
        <ul >
          {messages.map((message) => (

            < li key={message._id} className="child" >
              {(message.author == auth?.currentUser?.email & message.onProgress) ? (
                <section>

                  < div class="card">
                    <div class="card-img" color="red"><san></san></div>
                    <div class="card-info">
                      <p class="text-title">{message.title} </p>
                      <p class="text-body">{message.description}</p>

                    </div>
                    <div class="card-footer">
                      <span class="text-title">{message.price}</span>
                      <Popup
                        trigger={<button>Chat</button>}
                        modal nested>
                        <main className="chat">
                          <header>
                            <h1>Chat on {message.title}</h1>
                            <p>
                              Connected as <strong>{auth?.currentUser?.email}</strong>

                            </p>
                          </header>
                          {/* <div> <FontAwesomeIcon icon={faTrash} onClick={() => deleteAllChat(message._id)} /></div> */}
                          {chats?.map((chat) => (
                            <div>

                              <article
                                key={chat._id}
                                className={chat.user === auth?.currentUser?.email ? "message-mine" : ""}
                              >


                                {(message._id == chat.only) &&
                                  <div>
                                    <div>{chat.user}
                                      {chat.user == auth?.currentUser?.email && <FontAwesomeIcon icon={faTrash} onClick={() => deleteChat(chat._id)} />}
                                    </div>
                                    <p>{chat.body}</p>

                                  </div>


                                }
                              </article>
                            </div>
                          ))}
                          <div>
                            <article
                              key={files._id}
                            >


                              {files?.map((file) => (<div>
                                {(message._id == file.dId) &&
                                  <div>{file.bodies}</div>
                                }
                              </div>

                              )

                              )}
                            </article>
                          </div>
                          <form
                            onSubmit={async (e) => {
                              e.preventDefault();
                              await sendChat({ only: message._id, user: message.author, body: newMessageText });
                              setNewMessageText("");
                            }}
                          >
                            <input
                              value={newMessageText}
                              onChange={async (e) => {
                                const text = e.target.value;
                                setNewMessageText(text);
                              }}
                              placeholder="Write a message…"
                            />
                            <button type="submit" disabled={!newMessageText}>
                              Send
                            </button>

                          </form>
                          <input multiple
                            type="file"
                            ref={fileInput}
                            onChange={(e) => setSelectedFile(e.target.files[0])}

                          />
                          <button disabled={!selectedFile} onClick={() => handleSendFile(message._id)}>sendFile</button>
                        </main>
                      </Popup>

                      <div class="card-button">
                        {/* <FontAwesomeIcon onClick={() => deleteProject(message._id)} className="trash" icon={faTrash} /> */}

                      </div>

                    </div>

                    <Popup
                      trigger={<button className="button">Details </button>}
                      modal
                      nested
                    >
                      {close => (
                        <div>
                          <div className="titleCloseBtn">
                            <button className="close" onClick={close}>
                              &times;
                            </button>
                          </div>
                          <p><h1>{message.title}</h1></p>
                          <p>{message.description}</p>
                          <p>{message.price}</p>
                          <p>{message.tags}</p>
                          <p>{message.deliveryTime}</p>
                          <p>{message.category}</p>
                          <p>{message.course}</p>
                          <p>{message.worker}</p>
                          <p>{message.type}</p>
                          <div>
                            <div>

                              {message.bodies.map((body, index, bodies) => (

                                <div>
                                  {message.type == "pdf" ? (<div>
                                    <h1 hidden>{bodies.splice(1, 1)}</h1>
                                    {/* <h1 hidden>{body.pop(".").last("")}</h1 > */}
                                    <a href={link + (body)} target="_blank" rel="noopener noreferrer" >
                                      <FontAwesomeIcon icon={faFilePdf}
                                        key={index}
                                        width="auto"
                                        height={2000}
                                        className="pics"
                                      />

                                    </a>

                                  </div>) : message.type == ("jpg" || "png" || "jpeg") && (
                                    <div>
                                      <img
                                        key={index}
                                        src={link + (body)}
                                        width="auto"
                                        height={200}
                                        className="pics"
                                      />
                                    </div>
                                  )


                                  }


                                </div>
                              )
                              )}
                            </div>

                          </div>

                          <button>Done</button> <button onClick={() => close()}>Cancel</button> <button onClick={() => toggleOnProgress(message._id)}> Stop worker</button>
                        </div>)}
                    </Popup>
                  </div>


                </section>
              ) : null

              }


            </li>
          ))}
        </ul>

      </div>
    </div >
  )












}

export default MyProgress