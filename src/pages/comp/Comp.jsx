import { useRef, useState, useEffect } from "react";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";

// Your selectedWork on Progress
// import { Id } from "C:/Users/ME/Documents/smtnice/fiveract/convex/_generated/dataModel.d.ts";

import { faTrash, faPen, faInfoCircle, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import "./Comp.css"


import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import { auth } from "../../config/firebaseConfig";
import { sendSignInLinkToEmail, onAuthStateChanged } from "firebase/auth";

export default function Comp() {
    const [projectList, setProjectList] = useState([]);
    const [isOnProgress, setIsOnProgress] = useState(false);
    const [Worker, setWorker] = useState("");


    const [selectedDoc, setSelectedDoc] = useState(null);
    const generateUploadUrl = useMutation(api.messages.generateUploadUrl);
    const sendImage = useMutation(api.messages.sendImage);
    const [selectedImage, setSelectedImage] = useState(null);
    // const [showImage, setShowImage] = useState("")[0];
    const [covEx, setNewCovEx] = useState();

    const [name] = useState(() => auth?.currentUser?.email);

    const messages = useQuery(api.messages.list) || [];
    // const dosages = useQuery(api.messages.list) || [];


    const deleteProj = useMutation(api.messages.deleteProj);
    const onProgress = useMutation(api.messages.toggleOnProgress);
    const onComplete = useMutation(api.messages.toggleComplete);




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

    const Image = (storageId) => {
        messages.map((message) => (

            message.bodies.map((body) => (
                // console.log(body, index),
                storageId = body

            ))
        )

        )

        // console.log(body, index),
        // e.g. https://happy-animal-123.convex.site/getImage?storageId=456

        const getImageUrl = new URL(`${convexSiteUrl}/getImage`);

        getImageUrl.searchParams.set("storageId", storageId);
        console.log(getImageUrl.href)
        setNewCovEx(getImageUrl.href)

        //return <img src={getImageUrl} height="300px" width="auto" />;


    }

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

    return (
        <div className="App">
            <div>
                <ul >
                    {messages.map((message) => (

                        < li key={message._id} className="child" >

                            {(message.author != auth?.currentUser?.email & message.worker == auth?.currentUser?.email & message.complete) ?

                                (

                                    <div class="card">
                                        <div class="card-img" color="red"><span> <p>{message.author}</p></span></div>
                                        <div class="card-info">

                                            <p class="text-title">{message.title} </p>
                                            <p class="text-body">{message.description}</p>
                                        </div>
                                        <div class="card-footer">
                                            <span class="text-title">{message.price}</span>
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
                                                <p>{message.description}</p>
                                                <p>{message.price}</p>
                                                <p>{message.tags}</p>
                                                <p>{message.deliveryTime}</p>
                                                <p>{message.category}</p>
                                                <p>{message.course}</p>
                                                <p>{message.type}</p>
                                                {/* <p>{message.onProgress && <div>On Progress</div>}</p> */}
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
