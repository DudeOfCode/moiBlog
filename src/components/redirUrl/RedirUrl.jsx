
import { Outlet, Navigate, useParams } from 'react-router-dom';
import { auth } from "../../config/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { useState, useEffect, useRef } from 'react';


import { useMutation, useQuery } from "convex/react";
import { api } from "/convex/_generated/api";



const RedirUrl = () => {
    // const getUser = localStorage.getItem(auth?.currentUser?.email);
    // let [user] = useState(getUser);
    const urls = useQuery(api.newurl.list) || [];
    let { urlId } = useParams()

    // useEffect(() => {
    //     console.log(urlId)
    //     urls.map((url) => {
    //         if (urlId.includes(url._id.slice(0, 7))) {
    //             console.log(urlId)
    //             window.location.href = url.dLink;
    //             // < Navigate to = { url.dLink } />
    //         } else {
    //             return (<Outlet />)
    //         }
    //     })
    // localStorage.setItem(user, auth?.currentUser?.email)
    // setTimeout(() => setLoading(false), 5500)
    // console.log(user)

    //});




    urls.map((url) => {
        if (urlId == url._id.slice(0, 7)) {
            return window.location.replace(url.dLink);
            //<Navigate to={url.dLink} />
        } else {
            return (<Outlet />)
        }
    }
    )






}
export default RedirUrl;