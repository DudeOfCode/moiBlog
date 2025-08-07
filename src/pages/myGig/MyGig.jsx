import React from 'react'
import { useState, useEffect, useRef } from 'react';
import { auth, db } from "../../config/firebaseConfig";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";

import { faTrash, faPen, faInfoCircle, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import UseOnlineStatus from '../../components/UseOnlineStatus';

import "./MyGig.scss"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const MyGig = () => {
  const isOnline = UseOnlineStatus();

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

  // const [isUser, setIsUser] = useState(message.author = auth?.currentUser?.email)




  // const updateTask = useMutation(api.messages.updateTask);
  // const updateTitle = useMutation(api.messages.updateTitle);
  // const updateDescriptions = useMutation(api.messages.updateDescription);
  // const updateTags = useMutation(api.messages.updateTags);
  // const updateDeliveryTime = useMutation(api.messages.updateDeliveryTime);
  // const updatePrices = useMutation(api.messages.updatePrice);
  // const updateCategories = useMutation(api.messages.updateCategory);
  // const updateCourse = useMutation(api.messages.updateCourse);
  // const deleteProj = useMutation(api.messages.deleteProj);


  const pdf = "pdf"
  const [name] = useState(() => auth?.currentUser?.email);

  const messages = useQuery(api.messages.list) || [];

  const link = "https://dazzling-schnauzer-268.convex.site/getImage?storageId="

  // const [isOwner] = (auth?.currentUser?.email == update);

  //Edit Section
  // const updateProjectTitle = async (_id) => {
  //   await updateTitle(
  //     {
  //       id: _id,
  //       title: updatedTitle,

  //     }
  //   )
  // }

  // const updateProjectCategory = async (_id) => {
  //   await updateCategories({
  //     id: _id,
  //     category: updateCategory,
  //   })
  // }
  // const updateProjectPrice = async (_id) => {
  //   await updatePrices({
  //     id: _id,
  //     price: updatePrice,
  //   })
  // }


  // const updateProjectTime = async (_id) => {
  //   await updateDeliveryTime({
  //     id: _id,
  //     deliveryTime: updateTime,
  //   })
  // }
  // const updateProjectCourses = async (_id) => {
  //   await updateCourse({
  //     id: _id,
  //     course: updateCourses,

  //   })
  // }
  // const updateProjectDescription = async (_id) => {
  //   await updateDescriptions({
  //     id: _id,
  //     description: updateDescription,
  //   })
  // }
  // const updateProjectTag = async (_id) => {
  //   await updateTags({
  //     id: _id,
  //     tags: updateTag,
  //   })
  // }

  // const deleteProject = async (_id) => {
  //   await deleteProj({
  //     id: _id
  //   })
  // };





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
        {/* <div>
        <div className='details'><p ><h1>{auth?.currentUser?.email}</h1></p>
          <p><h2>{auth?.currentUser?.displayName}</h2></p>
        </div>
        <ul >
          {messages.map((message) => (

            < li key={message._id} className="child" >
              {message.author == auth?.currentUser?.email && (
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
                      <p><h1>{message.title}</h1></p>
                      <p>{message.description}</p>
                      <p>{message.price}</p>
                      <p>{message.tags}</p>
                      <p>{message.deliveryTime}</p>
                      <p>{message.category}</p>
                      <p>{message.course}</p>
                      <p>{message.type}</p>
                      <div>
                        <div>

                          {message.bodies.map((body, index, bodies) => (

                            <div>
                              {message.type == "pdf" ? (<div>
                                <h1 hidden>{bodies.splice(1, 1)}</h1>
                                {/* <h1 hidden>{body.pop(".").last("")}</h1 > */}
        {/* <a href={link + (body)} target="_blank" rel="noopener noreferrer" >
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
                                          <input required placeholder="Edit Category" onChange={(e) => setUpdateCategory(e.target.value)} />

                                        </label>
                                        <span>  - </span>
                                        <FontAwesomeIcon onClick={() => updateProjectCategory(message._id)} className="pen" icon={faPen} />
                                      </div>
                                      <div class="omrs-input-group">
                                        <label class="omrs-input-underlined">
                                          <FontAwesomeIcon onClick={() => updateProjectPrice(message._id)} className="pen" icon={faPen}
                                          />
                                          <input required placeholder="Edit Price" onChange={(e) => setUpdatePrice(Number(e.target.value))} />
                                        </label>

                                      </div>
                                      <div class="omrs-input-group">
                                        <label class="omrs-input-underlined">

                                          <input placeholder="Edit Time" onChange={(e) => setUpdateTime(Number(e.target.value))} />
                                          <FontAwesomeIcon onClick={() => updateProjectTime(message._id)} className="pen" icon={faPen} />
                                        </label>
                                      </div>
                                      <div class="omrs-input-group">
                                        <label class="omrs-input-underlined">

                                          <input required placeholder="Edit Course" onChange={(e) => setUpdateCourses(e.target.value)} />
                                          <FontAwesomeIcon onClick={() => updateProjectCourses(message._id)} className="pen" icon={faPen} />
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


                                    </form>
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
        </ul> */}
    Something is up
        </div>
      </div >
 )

}

      export default MyGig