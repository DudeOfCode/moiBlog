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
                                <Link to="/post/abc" className="p-link">
                                    {post.title}
                                </Link>
                            </span>
                            <hr />
                            <span className="postDate">Posted by: {post.author == auth?.currentUser?.email ? "You" : post.author}</span>
                            <span className="postDate">1 hour ago</span>
                        </div>
                        <p className="postDesc">
                            {post.postBody.slice(0, 90)}
                        </p>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default Post;
