import React from 'react'
import { useState, useEffect, useRef } from 'react';
import { auth, db } from "../../config/firebaseConfig";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";

import { faTrash, faPen, faInfoCircle, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import UseOnlineStatus from '../../components/UseOnlineStatus';

import "./MyComp.scss"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const MyComp = () => {
  const isOnline = UseOnlineStatus();

  const [projectList, setProjectList] = useState([]);


  let [update] = ("")
  let supdate = []

  const imageInput = useRef(null);
  const docInput = useRef(null);

  // const [isUser, setIsUser] = useState(message.author = auth?.currentUser?.email)

  const [isOnProgress, setIsOnProgress] = useState(false);
  const [Worker, setWorker] = useState("");



  const deleteProj = useMutation(api.messages.deleteProj);
  const onProgress = useMutation(api.messages.toggleOnProgress);

  const pdf = "pdf"
  const [name] = useState(() => auth?.currentUser?.email);

  const messages = useQuery(api.messages.list) || [];

  const link = "https://dazzling-schnauzer-268.convex.site/getImage?storageId="

  // const [isOwner] = (auth?.currentUser?.email == update);

  //Edit Section


  const deleteProject = async (_id) => {
    await deleteProj({
      id: _id
    })
  };


  const toggleOnProgress = async (_id) => {
    setIsOnProgress(false)
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



  // messages.map((message) => {
  //   update = message.author
  //   console.log(update)
  //   supdate.push(message.author)
  //   // return (message.author)
  //   // return <div>{message.author}</div>

  // },
  //   console.log(supdate)
  // )

  // let supa = supdate.includes(auth?.currentUser?.email)
  // console.log(supa)
  return (

    <div className="App">

      <div>
        <div className='details'><p ><h1>{auth?.currentUser?.email}</h1></p>
          <p><h2>{auth?.currentUser?.displayName}</h2></p>
        </div>
        <ul >
          {messages.map((message) => (

            < li key={message._id} className="child" >
              {(message.author == auth?.currentUser?.email & message.complete) ? (
                <section>

                  < div class="card">
                    <div class="card-img" color="red"><san></san></div>
                    <div class="card-info">
                      <p class="text-title">{message.title} </p>
                      <p class="text-body">{message.description}</p>
                    </div>
                    <div class="card-footer">
                      <span class="text-title">{message.price}</span>
                      <div class="card-button">
                        <FontAwesomeIcon onClick={() => deleteProject(message._id)} className="trash" icon={faTrash} />

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


                        </div>)}
                    </Popup>
                  </div>


                </section>
              ) : ("")

              }


            </li>
          ))}
        </ul>

      </div>
    </div >
  )












}

export default MyComp