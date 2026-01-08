

import React, { useState } from 'react';

import { useMutation, useQuery } from "convex/react";
import { api } from "/convex/_generated/api";

import { Link } from "react-router-dom";

import { auth, db } from "../../config/firebaseConfig";


import Nabar from '../../components/navbar/Navbar';
import "./ShortUrl.scss";



import { faTrash, faPen, faInfoCircle, faFilePdf, faExternalLink, faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ShortUrl = () => {

    const uploadUrl = useMutation(api.newurl.uploadUrl);

    const urls = useQuery(api.newurl.list) || [];
    const deleteUrl = useMutation(api.newurl.deleteProj);

    const [name] = useState(() => auth?.currentUser?.email);

    const [newLink, setNewLink] = useState("");


    const validLink = newLink.includes("https://")

    async function handleUploadLink(e) {
        e.preventDefault();
        // const convexSiteUrl = import.meta.env.VITE_CONVEX_SITE_URL;

        try {

            await uploadUrl({

                author: name,
                dLink: newLink,

            })

            window.alert("Done brrrrooooooo")

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

            window.alert("Deleted oooo brrrrooooooo")

        } catch (error) {
            console.error(error);

        }

    }





    return (
        <div>
            <Nabar />
            <div className='shortpg'>

                <div>
                    <h1>Shorten Multiple Urls</h1>

                    <br />

                    <input className='linkinpt' type="text" onChange={(e) => setNewLink(e.target.value)} placeholder="Type the long link here" /> <button className='shortbtn' onClick={handleUploadLink}>Shorten Url</button>
                    <br />
                    <div>
                        {urls.map((url) => (
                            url.author == auth?.currentUser?.email ? (<div>
                                {'https://moiBlog/shorturl/' + url._id.slice(0, 7)}

                                <Link to={'/shorturl/' + url._id.slice(0, 7)}>  <FontAwesomeIcon className="extLink" icon={faExternalLink} /></Link>
                                <FontAwesomeIcon className="trash" icon={faTrash} onClick={() => deleteLink(url._id)} />
                                <FontAwesomeIcon className="trash" icon={faCopy} />

                            </div>) : null

                        ))
                        }
                    </div>
                </div>

            </div>

        </div>
    )
}

export default ShortUrl;