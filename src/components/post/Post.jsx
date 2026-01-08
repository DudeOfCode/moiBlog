import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import "./Post.scss"
import news from "./newsimg.jpg"
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { auth } from "../../config/firebaseConfig";

import UseOnlineStatus from '../../components/UseOnlineStatus';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


import { format } from 'date-fns';
import parse from 'html-react-parser';
const Post = () => {

    const [user, setUser] = useState("");
    const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
    useEffect(() => {

        const interval = setInterval(() => {

            { auth?.currentUser?.email != null && setUser(auth?.currentUser?.email) }

        }, 1000);

        return () => clearInterval(interval);




    }, [auth?.currentUser]);


    useEffect(() => {

        const handleResize = () => {
            setIsMobile(window.innerWidth < 890);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const posts = useQuery(api.posts.list) || [];
    const [name] = useState(() => auth?.currentUser?.email);

    const link = "https://fantastic-oriole-450.convex.site/getImage?storageId="
    const fullStyle = {
        "width": "100%",
        "height": "100%",
        "border": "2px solid red"
    }
    return (
        <div>
            {posts.map((post) => (
                <div key={post._id} className="childin">
                    {/* <img src={link + post.storageId} />
                    <p>{post.author}</p>
                    <p>{post.postBody}</p> */}
                    <div className="post">
                        <img
                            className="postImg"
                            src={link + post.storageId}
                            alt=""
                        />
                        <div className="postInfo">
                            <div className="postCats">
                                <span className="postCat">
                                    <Link className="p-link" to="/posts?cat=Music">
                                        Music
                                    </Link>
                                </span>
                                <span className="postCat">
                                    <Link className="p-link" to="/posts?cat=Music">
                                        Life
                                    </Link>
                                </span>
                            </div>
                            <span className="postTitle">
                                <Link to={'/posts/' + post._id} className="">{post.title}</Link>

                                {/* <Popup id='' contentStyle={fullStyle} modal nested trigger={
                                    <a href={post._id} className="">{post.title}</a>
                                } >
                                    {close => (
                                        <div className='whole-post'>
                                            <div className="titleCloseBtn">
                                                <button className="close" onClick={close}>
                                                    <a href='#'>&times;</a>
                                                </button>
                                                <span>Posted by: {post.author}</span>
                                                <span>{parse(post.postBody)}</span>
                                            </div>
                                        </div>
                                    )}

                                </Popup> */}

                            </span>

                            <span className="postDate">Posted by: {post.author == auth?.currentUser?.email ? "You" : post.author}</span>
                            <span className="postDate"> Posted on: {format(new Date(post._creationTime), 'dd/MM/yyyy')}</span>
                        </div>
                        <div className="small-o-body">

                            {parse(post.postBody.slice(0, 400))} <Link to={'/posts/' + post._id}>read more.......</Link>

                        </div>

                    </div>
                </div>
            ))}

        </div>
    )
}

export default Post;
