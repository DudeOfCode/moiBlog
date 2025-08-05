import { useRef, useState, useEffect } from "react";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";

// Your selectedWork on Progress
// import { Id } from "C:/Users/ME/Documents/smtnice/fiveract/convex/_generated/dataModel.d.ts";

import { faTrash, faPen, faInfoCircle, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import "./InPro.css"


import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import { auth } from "../../config/firebaseConfig";
import { sendSignInLinkToEmail, onAuthStateChanged } from "firebase/auth";

export default function InPro() {

    const [isOnProgress, setIsOnProgress] = useState(false);
    const [Worker, setWorker] = useState("");
    const [editedChat, setEditedChat] = useState("");



    const generateUploadUrl = useMutation(api.files.generateUploadUrl);
    const [selectedFile, setSelectedFile] = useState(null);
    // const [showImage, setShowImage] = useState("")[0];
    const [covEx, setNewCovEx] = useState();

    const [name] = useState(() => auth?.currentUser?.email);

    const messages = useQuery(api.messages.list) || [];
    // const dosages = useQuery(api.messages.list) || [];


    const deleteProj = useMutation(api.messages.deleteProj);
    const onProgress = useMutation(api.messages.toggleOnProgress);
    const onComplete = useMutation(api.messages.toggleComplete);


    const sendChat = useMutation(api.chat.sendChat);
    const chats = useQuery(api.chat.getMessages);
    const [newMessageText, setNewMessageText] = useState("");
    const fileInput = useRef(null);
    const sendFile = useMutation(api.files.sendFile);
    const files = useQuery(api.files.getFile) || [];
    const convexSiteUrl = import.meta.env.VITE_CONVEX_SITE_URL;

    const deleteOne = useMutation(api.chat.deleteChats);
    const deleteAll = useMutation(api.chat.deleteAllChats);
    const editChats = useMutation(api.chat.editChat);


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
        // Make sure scrollTo works on button click in Chrome
        setTimeout(() => {
            window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
        }, 0);
    }, [chats]);
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


    const deleteChat = async (_id) => {
        await deleteOne({
            id: _id
        })
    };
    const editChat = async (_id) => {

        await editChats({
            id: _id,
            newText: editedChat

        })
        setEditedChat("")
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
            setSelectedFile(null)
        } catch (error) {
            console.error(error);

        }

    }


    const toggleOnProgress = async (_id) => {
        setIsOnProgress(false)
        setWorker("")
        setIsOnProgress(false)
        await deleteAll({
            chatRoom: _id
        })
        await onProgress({
            id: _id,
            onProgress: isOnProgress,
            worker: Worker
        })
    };
    const toggleComplete = async (_id) => {
        await onComplete({
            id: _id,
            complete: true,
            incomplete: false,
            onProgress: false,
        })
    };



    return (
        <div className="App">
            <div>
                <ul >
                    {messages.map((message) => (

                        < li key={message._id} className="child" >

                            {(message.author != auth?.currentUser?.email & message.worker == auth?.currentUser?.email & message.onProgress & !message.complete) ?

                                (

                                    <div class="card">
                                        <div class="card-img" color="red"><span> <p>{message.author}</p></span></div>
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
                                                    <div>
                                                        <header>
                                                            <h1>Chat on {message.title}</h1>
                                                            <p>
                                                                Connected as <strong>{message.worker}</strong>
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
                                                                                {chat.user == auth?.currentUser?.email && (
                                                                                    <div>
                                                                                        <FontAwesomeIcon className="trash" icon={faTrash} onClick={() => deleteChat(chat._id)} />
                                                                                        <Popup
                                                                                            trigger={<FontAwesomeIcon className="pen" icon={faPen} />}
                                                                                            mosal
                                                                                            nested>
                                                                                            <input
                                                                                                value={editedChat}
                                                                                                onChange={(e) => setEditedChat(e.target.value)} /> <button onClick={() => editChat(chat._id)}>Edit me</button>
                                                                                        </Popup>

                                                                                    </div>


                                                                                )}
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
                                                                await sendChat({ only: message._id, user: message.worker, body: newMessageText });
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
                                                    </div>
                                                </main>
                                            </Popup>

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
                                                <button onClick={() => toggleComplete(message._id)}>Done</button> <button id="cancelBtn" onClick={() => close()}>Cancel</button> <button onClick={() => toggleOnProgress(message._id)}>Stop Working</button>
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
