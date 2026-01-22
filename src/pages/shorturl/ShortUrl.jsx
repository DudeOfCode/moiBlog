

import React, { useState } from 'react';

import { useMutation, useQuery } from "convex/react";
import { api } from "/convex/_generated/api";

import { Link } from "react-router-dom";

import { auth, db } from "../../config/firebaseConfig";


import Nabar from '../../components/navbar/Navbar';
import "./ShortUrl.scss";

import { CopyToClipboard } from 'react-copy-to-clipboard';

import { faTrash, faPen, faInfoCircle, faFilePdf, faExternalLink, faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ShortUrl = () => {

    const uploadUrl = useMutation(api.newurl.uploadUrl);

    const urls = useQuery(api.newurl.list) || [];
    const deleteUrl = useMutation(api.newurl.deleteProj);

    const [name] = useState(() => auth?.currentUser?.email);

    const [newLink, setNewLink] = useState("");
    const [newText, setNewText] = useState("");


    const validLink = newLink.includes("https://")

    async function handleUploadLink(e) {
        e.preventDefault();
        // const convexSiteUrl = import.meta.env.VITE_CONVEX_SITE_URL;

        try {
            if (auth?.currentUser) {
                await uploadUrl({

                    author: name,
                    dLink: newLink,

                })
                window.alert("Link successfully created")
            } else {
                window.alert("Please login to start shortening links")
            }



        } catch (error) {
            console.error(error);

        }

    }
    async function handleCopyLink(e) {
        e.preventDefault();
        // const convexSiteUrl = import.meta.env.VITE_CONVEX_SITE_URL;

        try {

            await navigator.clipboard.wrriteText(newText)

            window.alert("Link copied successfully")

        } catch (error) {
            console.error(error);

        }

    }



    async function deleteLink(_id) {
        // const convexSiteUrl = import.meta.env.VITE_CONVEX_SITE_URL;

        try {

            await deleteUrl({

                id: _id,


            })

            window.alert("Link has been deleted successfully")

        } catch (error) {
            console.error(error);

        }

    }





    return (
        <div>
            <Nabar />
            {auth?.currentUser ? (<h1>Hello You are Logged in as {
                auth?.currentUser?.email}</h1>) : <h1>Please login to use this program</h1>}

            <div className='shortpg'>

                <div>
                    <h1>Shorten Unlimited Urls</h1>
                    <br />
                    <iframe src={"https://www.effectivegatecpm.com/dii77p9t?key=98c49c529edafd20a02f28fd7641ef72"} title={"title"}
                        width="100%"
                        height="auto" // Adjust height as needed
                        frameBorder="4"
                        // Optional security attributes
                        sandbox="allow-scripts allow-forms allow-popups allow-same-origin"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade" />
                    <input className='linkinpt' type="text" onChange={(e) => setNewLink(e.target.value)} placeholder="Type the long link here" /> <button className='shortbtn' onClick={handleUploadLink}>Shorten Url</button>
                    <br />
                    <ol>
                        <div>
                            {urls.map((url) => (
                                url.author == auth?.currentUser?.email ? (<li key={url._id}>
                                    {'https://moi-blog.vercel.app/shorturl/' + url._id.slice(0, 7)}

                                    <div>
                                        <CopyToClipboard text={'https://moi-blog.vercel.app/shorturl/' + url._id.slice(0, 7)} >
                                            <FontAwesomeIcon className="delT" icon={faCopy} />
                                        </CopyToClipboard>
                                        <Link to={'/shorturl/' + url._id.slice(0, 7)}>  <FontAwesomeIcon className="extLink" icon={faExternalLink} /></Link>
                                        <FontAwesomeIcon className="trash" icon={faTrash} onClick={() => deleteLink(url._id)} />
                                    </div>
                                </li>) : null

                            ))
                            }
                        </div>

                    </ol>

                </div>

            </div>
            <div className='adsl'>
                < div id="container-0742577e83059792439d50430649a949"></div>
                <iframe src={"https://www.effectivegatecpm.com/dii77p9t?key=98c49c529edafd20a02f28fd7641ef72"} title={"title"}
                    width="auto"
                    height="auto" // Adjust height as needed
                    frameBorder="4"
                    // Optional security attributes
                    sandbox="allow-scripts allow-forms allow-popups allow-same-origin"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade" />
                <iframe src={"https://www.effectivegatecpm.com/dii77p9t?key=98c49c529edafd20a02f28fd7641ef72"} title={"title"}
                    width="auto"
                    height="auto" // Adjust height as needed
                    frameBorder="4"
                    // Optional security attributes
                    sandbox="allow-scripts allow-forms allow-popups allow-same-origin"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade" />
                <iframe src={"https://www.effectivegatecpm.com/dii77p9t?key=98c49c529edafd20a02f28fd7641ef72"} title={"title"}
                    width="auto"
                    height="auto" // Adjust height as needed
                    frameBorder="4"
                    // Optional security attributes
                    sandbox="allow-scripts allow-forms allow-popups allow-same-origin"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade" />


            </div>

        </div>
    )
}

export default ShortUrl;