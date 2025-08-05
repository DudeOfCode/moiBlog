import { useRef, useState, useEffect } from "react";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";


// import { Id } from "C:/Users/ME/Documents/smtnice/fiveract/convex/_generated/dataModel.d.ts";

import { faTrash, faPen, faInfoCircle, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import "./Test.css"


import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import { auth } from "../../config/firebaseConfig";
import { sendSignInLinkToEmail, onAuthStateChanged } from "firebase/auth";

export default function App() {
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
    const [isOnProgress, setIsOnProgress] = useState(false);


    // const [selectedDoc, setSelectedDoc] = useState(null);
    // const generateUploadUrl = useMutation(api.messages.generateUploadUrl);
    // const sendImage = useMutation(api.messages.sendImage);
    // const [selectedImage, setSelectedImage] = useState(null);
    // const [showImage, setShowImage] = useState("")[0];
    const [covEx, setNewCovEx] = useState();

    const [name] = useState(() => auth?.currentUser?.email);

    const messages = useQuery(api.posts.list) || [];
    // const dosages = useQuery(api.messages.list) || [];

    const [email, setEmail] = useState("");

    // const onProgress = useMutation(api.messages.toggleOnProgress);
    // const onComplete = useMutation(api.messages.toggleComplete);




    const convexSiteUrl = import.meta.env.VITE_CONVEX_SITE_URL;

    const link = `${convexSiteUrl}/getImage?storageId=`;
    // const link = "https://dazzling-schnauzer-268.convex.site/getImage?storageId="

    // async function handleSendImage(event) {
    //     event.preventDefault();
    //     // const convexSiteUrl = import.meta.env.VITE_CONVEX_SITE_URL;


    //     // Step 1: Get a short-lived upload URL
    //     const postUrl = await generateUploadUrl();
    //     // Step 2: POST the file to the URL
    //     const result = await fetch(postUrl, {
    //         method: "POST",
    //         headers: { "Content-Type": selectedImage.type },
    //         body: selectedImage,
    //     });
    //     const { storageId } = await result.json();
    //     // Step 3: Save the newly allocated storage id to the database
    //     await sendImage({ storageId, author: name });
    //     setSelectedImage(null);
    //     imageInput.current.value = "";
    // }

    useEffect(() => {
        console.log(auth?.currentUser?.email)
    }, [auth?.currentUser])


    // function Image() {
    //     return <div>
    //         <img src={message.url} height="300px" width="auto" />;
    //     </div>
    // }

    // const Image = (storageId) => {
    //     messages.map((message) => (

    //         message.storageId.map((body) => (
    // console.log(body, index),
    //         storageId = body

    //     ))
    // )

    // )

    // console.log(body, index),
    // e.g. https://happy-animal-123.convex.site/getImage?storageId=456

    // const getImageUrl = new URL(`${convexSiteUrl}/getImage`);

    // getImageUrl.searchParams.set("storageId", storageId);
    // console.log(getImageUrl.href)
    // setNewCovEx(getImageUrl.href)

    //return <img src={getImageUrl} height="300px" width="auto" />;


    // }

    // useEffect(() => {
    //     onAuthStateChanged(auth, (data) => {
    //         console.log(data)
    //     })


    // }, []);


    // const deleteProject = async (_id) => {
    //     await deleteProj({
    //         id: _id
    //     })
    // };
    // const toggleOnProgress = async (_id) => {
    //     setIsOnProgress(true)
    //     await onProgress({
    //         id: _id,
    //         onProgress: isOnProgress,
    //         worker: auth?.currentUser?.email
    //     })
    // };
    // const toggleComplete = async (_id) => {
    //     await onComplete({
    //         id: _id,
    //         complete: true,
    //     })
    // };



    return (
        <div className="App">
            <div>
                <ul >
                    {messages.map((message) => (

                        < li key={message._id} className="child" >
                            {(message.author != auth?.currentUser?.email) ?
                                (
                                    <div className="card">
                                        <div className="card-img" color="red"><span> <p>{message.author}</p></span></div>
                                        <div className="card-info">

                                            <p className="text-title">{message.title} </p>
                                            <p className="text-body">{message.postBody}</p>
                                        </div>
                                        <div className="card-footer">
                                            {/* <span className="text-title">{message.price}</span> */}
                                            <div className="card-button">
                                                <svg onClick={() => toggleOnProgress(message._id)} className="svg-icon" viewBox="0 0 20 20">
                                                    <path d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z"></path>
                                                    <path d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z"></path>
                                                    <path d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z"></path>
                                                </svg>
                                            </div>

                                        </div>
                                        <Popup
                                            trigger={<button className="button"> Details </button>}
                                            modal
                                            nested
                                        >
                                            {close => (<div>

                                                <div className="titleCloseBtn">
                                                    <button className="close" onClick={close}>
                                                        &times;
                                                    </button>
                                                </div>

                                                <p>{message.title}</p>
                                                <p>{message.postBody}</p>
                                                {/* <p>{message.price}</p> */}
                                                <p>{message.tags}</p>
                                                {/* <p>{message.uploadTime}</p> */}
                                                {/* <p>{message.category}</p>
                                                <p>{message.course}</p>
                                                <p>{message.type}</p> */}
                                                {/* <p>{message.onProgress && <div>On Progress</div>}</p> */}
                                                <div>


                                                    <div>
                                                        <div>

                                                            <a href={link + (message.storageId)} target="_blank" rel="noopener noreferrer" >
                                                                <img src={link + (message.storageId)} icon={faFilePdf}
                                                                    width="auto"
                                                                    height={200}
                                                                    className="pics"
                                                                />

                                                            </a>
                                                        </div>

                                                    </div>

                                                </div>

                                                <button>Done</button> <button onClick={() => close()}>Cancel</button>
                                            </div>)}
                                        </Popup>
                                    </div>
                                ) : ("")
                            }






                        </li>

                    ))}
                </ul>

            </div>
        </div >

    );
}