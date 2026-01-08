

import React, { useState } from 'react';

import { useMutation, useQuery } from "convex/react";
import { api } from "/convex/_generated/api";

import { Link } from "react-router-dom";

import { auth, db } from "../../config/firebaseConfig";



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
        <div> <h1>Shorten Multiple Urls</h1>

            <br />
            <input type="text" onChange={(e) => setNewLink(e.target.value)} /> <button onClick={handleUploadLink}>Shorten Url</button>

            <div>
                {urls.map((url) => (
                    <div>
                        {'https://moiBlog/shorturl/' + url._id.slice(0, 7)}
                        <Link to={'/shorturl/' + url._id.slice(0, 7)}> <button className='mob-jnow'>Visit</button> </Link>
                        <button className='mob-jnow' onClick={() => deleteLink(url._id)}>Delete</button>
                    </div>

                ))
                }
            </div>
        </div>
    )
}

export default ShortUrl;