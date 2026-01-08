import React, { useState, useEffect, useRef } from 'react';
import { auth, db } from "../../config/firebaseConfig";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";


import { faTrash, faPen, faInfoCircle, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import UseOnlineStatus from '../../components/UseOnlineStatus';

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import './MyGig.scss'
import Nabar from '../../components/navbar/Navbar';
const MyGig = () => {
  // const isOnline = UseOnlineStatus();

  const [projectList, setProjectList] = useState([]);
  const [updatedTitle, setUpdatedTitle] = useState("");
  const [updateTime, setUpdateTime] = useState(0);
  const [updateTag, setUpdateTag] = useState("");
  const [updateSample, setUpdateSample] = useState("");
  const [updateDescription, setUpdateDescription] = useState("");
  const [updatePrice, setUpdatePrice] = useState(0);
  const [updateCovImg, setUpdateCovImg] = useState("");
  const [updateCourses, setUpdateCourses] = useState("");
  const [updateCategory, setUpdateCategory] = useState("");

  let [update] = ("")
  let supdate = []

  const imageInput = useRef(null);
  const docInput = useRef(null);

  // const [isUser, setIsUser] = useState(name = auth?.currentUser?.email)


  // const updateTask = useMutation(api.messages.updateTask);
  // const updateTitle = useMutation(api.messages.updateTitle);
  // const updateDescriptions = useMutation(api.messages.updatePostBody);
  // const updateTags = useMutation(api.messages.updateTags);
  // const updateDeliveryTime = useMutation(api.messages.updateUploadTime);
  // const deleteProj = useMutation(api.messages.deleteProj);


  const pdf = "pdf"
  const [name] = useState(() => auth?.currentUser?.email);

  const messages = useQuery(api.posts.list) || [];

  const link = "https://dazzling-schnauzer-268.convex.site/getImage?storageId="

  return (

    <div className="App">
      <Nabar />
      <div>
        <div>
          <div className='deet-bio'>
            <img src="" alt="" className='prof-imgo' />
            <div className='details'><p ><h1>Email: {auth?.currentUser?.email}</h1></p>
              <p><h2>Username: {auth?.currentUser?.displayName}</h2></p>
            </div>
            <span>My name is somebody abu something doing something to help something to becme something in life and not to become something dangerous to other things that could become something too.</span>
          </div>

          <ul >
            {messages.map((message) => (

              < li key={message._id} className="child" >
                {message.author == auth?.currentUser?.email && (
                  <section>

                    < div class="card">
                      <div class="card-img" color="red"><span></span></div>
                      <div class="card-info">
                        <p class="text-title">{message.title} </p>
                        <p class="text-body">{message.postBody}</p>
                      </div>
                      <div class="card-footer">
                        <div class="card-button">
                          <FontAwesomeIcon onClick={() => deleteProject(message._id)} className="trash" icon={faTrash} />
                        </div>

                      </div>

                      <Popup
                        trigger={<button className="button">Details </button>}
                        modal
                        nested
                      >
                        <div className='dee-pee'>

                          <a href={link + (message.storageId)} target="_blank" rel="noopener noreferrer" >
                            <img src={link + (message.storageId)} icon={faFilePdf}
                              width="auto"
                              height={200}
                              className="pics"
                            />

                          </a>
                        </div>
                        <p><h1>{message.title}</h1></p>
                        <p>{message.postBody}</p>
                        <p>{message.tags}</p>
                        <p>{message.uploadTime}</p>
                        <div>


                          <Popup
                            trigger={<FontAwesomeIcon className="pen" icon={faPen} />}
                            modal
                            nested
                          >
                            {close => (
                              <div >
                                <div >
                                  <div className="titleCloseBtn">
                                    <button className="close" onClick={close}>
                                      &times;
                                    </button>
                                  </div>

                                  <div class="title">
                                    <h1>Edit</h1>
                                  </div>

                                  <div>
                                    <div>
                                      {/* 
                                      <form>
                                        <div class="omrs-input-group">
                                          <label class="omrs-input-underlined">
                                            <input required placeholder="Edit Title" onChange={(e) => setUpdatedTitle(e.target.value)} />

                                            <FontAwesomeIcon
                                              className="pen"
                                              onClick={() => updateProjectTitle(message._id)} icon={faPen} />
                                          </label>
                                        </div>
                                        <div class="omrs-input-group">
                                          <label class="omrs-input-underlined">
                                            <input placeholder="Edit Time" onChange={(e) => setUploadTime(Number(e.target.value))} />
                                            <FontAwesomeIcon onClick={() => updateProjectTime(message._id)} className="pen" icon={faPen} />
                                          </label>
                                        </div>
                                     
                                      </form>
                                    </div>
                                    <div>
                                      <form>
                                        <div class="omrs-input-group">
                                          <label class="omrs-input-filled">
                                            <textarea required placeholder="Edit Description" onChange={(e) => setUpdateDescription(e.target.value)} />
                                          </label>
                                          <FontAwesomeIcon onClick={() => updateProjectDescription(message._id)} className="pen" icon={faPen} />
                                        </div>
                                        <div class="omrs-input-group">

                                          <input required type="file" placeholder="Edit Cover" multiple onChange={(e) => setUpdateCovImg(e.target.files[0])} />
                                          <FontAwesomeIcon onClick={() => updateProjectCovImg()} className="pen" icon={faPen} />


                                        </div>
                                        <div class="omrs-input-group">
                                          <label class="omrs-input-filled">
                                            <input required placeholder="Edit Tag" onChange={(e) => setUpdateTag(e.target.value)} />
                                            <FontAwesomeIcon onClick={() => updateProjectTag(message._id)} className="pen" icon={faPen} />
                                          </label>

                                        </div>


                                      </form> */}
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <button id="cancelBtn" onClick={() => close()}>Close editing</button>
                                </div>
                              </div>
                            )}
                          </Popup>
                        </div>

                        <button>Done</button> <button>Cancel</button>

                      </Popup>
                    </div>


                  </section>
                )

                }


              </li>
            ))}
          </ul>

        </div>
      </div >
    </div>
  )

}

export default MyGig