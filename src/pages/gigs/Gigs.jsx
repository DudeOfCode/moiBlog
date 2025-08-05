import React from 'react'
import { useState, useEffect, useRef } from 'react';
import { useDropzone } from 'react-dropzone';
import { auth, db } from "../../config/firebaseConfig";
import { getDocs, collection, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { faTrash, faPen, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




import "./Gigs.scss"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import "./Gigs.css"

import { useMutation, useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";



const Gigs = () => {


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
  const [covEx, setCovEx] = useState([]);

  const [openSecond, setOpenSecond] = useState();

  const messages = useQuery(api.messages.list) || [];

  const [isDisabled, setIsDisabled] = useState(false);

  const toggleDisabled = () => {
    setIsDisabled(!isDisabled);
  };
  // New project States
  // const [newProjectTitle, setNewProjectTitle] = useState("");
  // const [newDescription, setNewDescription] = useState("");
  // const [newTime, setnewTime] = useState(0);

  // Update Title State
  // const [updatedTitle, setUpdatedTitle] = useState("");

  // File Upload State
  // const [fileUpload, setFileUpload] = useState(null);

  const projectsCollectionRef = collection(db, "projects");



  const getProjectList = async () => {
    try {
      const data = await getDocs(projectsCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setProjectList(filteredData);
    } catch (err) {
      console.error(err);
    }
    // seeCov();
  };
  // const seeCov = async () => {
  //  await projectList.forEach((project,index) => (
  //     project.covImg.map((covs) => (
  //      console.log(covs)
  //    ))

  //   ))

  //   // covEx.forEach((season, index) => {
  //   //   console.log(season)
  //   // });


  // }



  useEffect(() => {
    getProjectList();
    // seeCov();
  }, []);

  const deleteProject = async (id) => {
    const projectDoc = doc(db, "projects", id);
    await deleteDoc(projectDoc);
    getProjectList();
  };


  const updateProjectTitle = async (id) => {
    const projectIc = doc(db, "projects", id);
    await updateDoc(projectIc, {
      title: updatedTitle,
      userId: auth?.currentUser?.uid

    });
    getProjectList();
  };
  const updateProjectTime = async (id) => {
    const projectIc = doc(db, "projects", id);
    await updateDoc(projectIc, {
      time: updateTime,
      userId: auth?.currentUser?.uid
    });
    getProjectList();
  };
  const updateProjectTag = async (id) => {
    const projectIc = doc(db, "projects", id);
    await updateDoc(projectIc, {

      tags: updateTag,
      userId: auth?.currentUser?.uid

    });
    getProjectList();
  };
  const updateProjectSample = async (id) => {
    const projectIc = doc(db, "projects", id);
    await updateDoc(projectIc, {

      sample: updateSample,
      userId: auth?.currentUser?.uid

    });
    getProjectList();
  };
  const updateProjectDescription = async (id) => {
    const projectIc = doc(db, "projects", id);
    await updateDoc(projectIc, {

      sDes: updateDescription,
      userId: auth?.currentUser?.uid

    });
    getProjectList();
  };
  const updateProjectPrice = async (id) => {
    const projectIc = doc(db, "projects", id);
    await updateDoc(projectIc, {

      price: updatePrice,
      userId: auth?.currentUser?.uid

    });
    getProjectList();
  };


  const updateProjectCovImg = async (id) => {
    const projectIc = doc(db, "projects", id);
    await updateDoc(projectIc, {

      covImg: updateCovImg,
      userId: auth?.currentUser?.uid

    });
    getProjectList();
  };
  const updateProjectCourses = async (id) => {
    const projectIc = doc(db, "projects", id);
    await updateDoc(projectIc, {

      courses: updateCourses,
      userId: auth?.currentUser?.uid

    });
    getProjectList();
  };
  const updateProjectCategory = async (id) => {
    const projectIc = doc(db, "projects", id);
    await updateDoc(projectIc, {
      category: updateCategory,
      userId: auth?.currentUser?.uid
    });
    getProjectList();
  };


  return (
    <div>

      <div>
        {projectList.map((project) => (
          <div>
            <h1 > {project.title} </h1>
            <p> Time: {project.time} </p>

            <p>Short description:{project.sDes}</p>
            <p>{project.courses}</p>
            <p>{project.price}</p>
            <p> < img src={project.covImg} /></p>

            <p>
              {<img src={project.sample} />}

            </p>
            <p>{project.tags}</p>
            <p>{project.category}</p>

            <FontAwesomeIcon onClick={() => deleteProject(project.id)} className="trash" icon={faTrash} />




            <Popup
              trigger={<FontAwesomeIcon className="pen" icon={faPen} />}
              open={openSecond}
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

                    <div class="container">
                      <div>

                        <form>
                          <div class="omrs-input-group">
                            <label class="omrs-input-underlined">
                              <input required defaultValue={project.title} onChange={(e) => setUpdatedTitle(e.target.value)} />

                              <FontAwesomeIcon
                                className="pen"
                                disabled={isDisabled} onClick={() => updateProjectTitle(project.id)} icon={faPen} />
                            </label>
                          </div>
                          <div class="omrs-input-group">
                            <label class="omrs-input-underlined">
                              <input required defaultValue={project.category} onChange={(e) => setUpdateCategory(e.target.value)} />

                            </label>
                            <span>  - </span>
                            <FontAwesomeIcon onClick={() => updateProjectCategory(project.id)} className="pen" icon={faPen} disabled={isDisabled} />
                          </div>
                          <div class="omrs-input-group">
                            <label class="omrs-input-underlined">
                              <FontAwesomeIcon onClick={() => updateProjectPrice(project.id)} className="pen" icon={faPen}
                                disabled={isDisabled}
                              />
                              <input required defaultValue={project.price} onChange={(e) => setUpdatePrice(Number(e.target.value))} />


                            </label>
                          </div>
                          <div class="omrs-input-group">
                            <label class="omrs-input-underlined">

                              <input required defaultValue={project.time} onChange={(e) => setUpdateTime(Number(e.target.value))} />
                              <FontAwesomeIcon onClick={() => updateProjectTime(project.id)} className="pen" icon={faPen} disabled={isDisabled} />
                            </label>
                          </div>
                          <div class="omrs-input-group">
                            <label class="omrs-input-underlined">

                              <input required defaultValue={project.courses} onChange={(e) => setUpdateCourses(e.target.value)} />
                              <FontAwesomeIcon onClick={() => updateProjectCourses(project.id)} className="pen" icon={faPen} disabled={isDisabled} />
                            </label>
                          </div>
                        </form>
                      </div>
                      <div>
                        <form>
                          <div class="omrs-input-group">
                            <label class="omrs-input-filled">
                              <textarea required defaultValue={project.sDes} onChange={(e) => setUpdateDescription(e.target.value)} />
                            </label>
                            <FontAwesomeIcon disabled={isDisabled} onClick={() => updateProjectDescription(project.id)} className="pen" icon={faPen} />
                          </div>
                          <div class="omrs-input-group">
                            <label class="omrs-input-filled">
                              <input required defaultValue={project.covImg} onChange={(e) => setUpdateCovImg(e.target.value)} />
                              <FontAwesomeIcon onClick={() => updateProjectCovImg(project.id)} className="pen" icon={faPen} disabled={isDisabled} />
                            </label>

                          </div>
                          <div class="omrs-input-group">
                            <label class="omrs-input-filled">
                              <input required onChange={(e) => setUpdateTag(e.target.value)} defaultValue={project.tags} />
                              <FontAwesomeIcon onClick={() => updateProjectTag(project.id)} className="pen" icon={faPen} disabled={isDisabled} />
                            </label>

                          </div>
                          <div class="omrs-input-group">
                            <label class="omrs-input-filled">

                              <input required defaultValue={project.sample} onChange={(e) => setUpdateSample(e.target.value)} />
                              <FontAwesomeIcon onClick={() => updateProjectSample(project.id)} className="pen" icon={faPen} disabled={isDisabled} />
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

        ))}
      </div>

    </div >
  );
}
export default Gigs