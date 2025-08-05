import React from 'react'
import "./Add.scss"

import { useState, useEffect, useRef } from 'react';
import { useDropzone } from 'react-dropzone';
import { auth, db } from "../../config/firebaseConfig";
import { collection, addDoc } from 'firebase/firestore';

import DefaultImage from "./google.png"

import { useMutation, useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";


const Add = () => {


  // New project States
  const [newProjectTitle, setNewProjectTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newTime, setnewTime] = useState("");
  // const [newCourses, setnewCourses] = useState("");
  // const [newPrice, setnewPrice] = useState(0);
  // const [newSample, setnewSample] = useState("");
  const [newCovImg, setnewCovImg] = useState("");
  const [newCategory, setnewCategory] = useState("");
  // const [newTag, setnewTag] = useState("");



  const generateUploadUrl = useMutation(api.posts.generateUploadUrl);
  // const generateUploadUrl2 = useMutation(api.posts.generateUploadUrl2);

  const uploadPost = useMutation(api.posts.uploadPost);

  const imageInput = useRef(null);
  const docInput = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  // const [selectedDoc, setSelectedDoc] = useState(null);


  const [name] = useState(() => auth?.currentUser?.email);

  // const posts = useQuery(api.posts.list) || [];

  const projectsCollectionRef = collection(db, "projects");

  // const SubmitMovie = async () => {

  // };

  const fileUploadRef = useRef();


  const convexSiteUrl = import.meta.env.VITE_CONVEX_SITE_URL;
  // const Image = async (storageId) => {


  // }


  // useEffect(() => {

  //   // seeCov();
  // }, []);

  // const showCov = () => {
  //   console.log(newCovImg.split(".").pop())
  // }

  async function handleUploadPost(e) {
    e.preventDefault();
    // const convexSiteUrl = import.meta.env.VITE_CONVEX_SITE_URL;

    try {

      // Step 1: Get a short-lived upload URL
      const postUrl = await generateUploadUrl();
      // const postUrl2 = await generateUploadUrl();

      // Step 2: POST the file to the URL
      const result = await fetch(postUrl, {
        method: "POST",
        headers: { "Content-Type": selectedImage.type },
        body: selectedImage,
      });


      const { storageId } = await result.json();

      // Step 3: Save the newly allocated storage id to the database
      await uploadPost({
        storageId: storageId,
        author: name,
        title: newProjectTitle,
        postBody: newDescription,
        tags: newCategory,
        uploadTime: newTime,

        // price: newPrice,
        // category: newCategory,
        // course: newCourses,
        // type: newCovImg.split(".").pop(),
        // complete: false,
        // incomplete: true,
        // onProgress: false,


      })

      setSelectedImage(null);
      imageInput.current.value = "";
      window.alert("Done brrrrooooooo")



      // e.g. https://happy-animal-123.convex.site/getImage?storageId=456
      // const getImageUrl = new URL(`${convexSiteUrl}/getImage`);

      // getImageUrl.searchParams.set("storageId", covEx);
      // console.log(getImageUrl.href);
      // setnewCovImg(getImageUrl?.href);
      // return <img src={getImageUrl} height="300px" width="auto" />;
      // console.log(newCovImg);

    } catch (error) {
      console.error(error);

    }

  }




  // const handleImageUpload = (event) => {
  //   event.preventDefault();
  //   fileUploadRef.current.click();
  // }

  // const uploadImageDisplay = async () => {
  //   try {

  //     const uploadedFile = fileUploadRef.current.files[0];
  //     const formData = new FormData();

  //     formData.append("file", uploadedFile);

  //     // const cachedURL = URL.createObjectURL(uploadedFile);
  //     // setAvatarURL(cachedURL);

  //     const response = await fetch("https://api.escuelajs.co/api/v1/files/upload", {
  //       method: "post",
  //       body: formData
  //     });

  //     if (response.status === 201) {
  //       const data = await response.json();
  //       await setnewCovImg(data?.location)
  //       setAvatarURL(data?.location);
  //       const aba = await data?.filename.split(".").pop()
  //       console.log(aba)
  //     }

  //   } catch (error) {
  //     console.error(error);
  //     setAvatarURL();
  //   }


  // }

  return (
    <section>
      <div className="add">
        <div className="container">
          <h1>Upload Your Project</h1>
          <form>
            <div className="sections">

              <div className="info">

                <label>Title</label>
                <input
                  type="text"
                  placeholder="Title..."
                  onChange={(e) => setNewProjectTitle(e.target.value)}
                />
                <label> What are you uploading</label>
                <select name="cats" id="cats" onChange={(e) => setnewCategory(e.target.value)} >
                  <option value="Select an Option">Select an Option</option>
                  <option Value="Articles">Articles</option>
                  <option Value="Assignment">Assignment</option>
                  <option Value="Data Analysis">Data Analysis</option>
                  <option Value="Journals">Journals</option>
                  <option Value="Project">Project</option>
                  <option Value="Suggestion">Suggestion</option>
                  <option Value="Web Development">Web Development</option>

                </select>
                {/* <label >Course</label>
                <select required name="cats" id="cats" onChange={(e) => setnewCourses(e.target.value)}>
                  <option value="Select an Option">Select an option</option>
                  <option Value="Physics">Physics</option>
                  <option Value="Chemistry">Chemistry</option>
                  <option Value="Business">Business</option>
                  <option Value="Agric">Agric</option>
                </select> */}


                <label  >Cover Image</label>
                <input
                  multiple
                  type="file"
                  ref={imageInput}
                  onChange={(e) => (setSelectedImage(e.target.files[0]) & setnewCovImg(e.target.value))}
                />

                {/* 
                <label >Upload Doc</label>

                <input
                  multiple
                  type="file"
                  ref={docInput}
                  onChange={(e) => setSelectedDoc(e.target.files[0])}
                /> */}



                {/* <label >Tags</label>
                <input type="text" onChange={(e) => setnewTag(e.target.value)} placeholder="e.g. One-page web design" /> */}
                <label >Body</label>
                <textarea required name="" id="" onChange={(e) => setNewDescription(e.target.value)} placeholder="Short description of your service" cols="30" rows="10"></textarea>

                <label  >Date Posted

                  {/* <select required name="cats" >
                    <option value="Select an Option">Select an option</option>
                    <option Value="days">day</option>
                    <option Value="months">month</option>
                    <option Value="weeks">week</option>
                    <option Value="years">year</option>
                  </select> */}
                </label>
                <input type="text"
                  required
                  onChange={(e) => setnewTime(e.target.value)}
                />

                {/* <label >Price</label> */}
                {/* <select required name="cats" onChange={(e) => setnewCourses(e.target.value)}>
                  <option value="Select an Option">Select an option</option>
                  <option Value="$">$</option>
                  <option Value="N">N</option>
                </select> */}
                {/* <input type="number" onChange={(e) => setnewPrice(Number(e.target.value))} /> */}

              </div>

            </div>
            <br />
            <button className='post-button' onClick={handleUploadPost}> Post</button>
          </form>
        </div>


      </div>

    </section>
  );

}

export default Add