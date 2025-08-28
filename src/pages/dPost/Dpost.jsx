import React, { useState } from 'react'
import './Dpost.scss'

import { useMutation, useQuery } from "convex/react";
import { api } from "/convex/_generated/api";
import { useParams } from "react-router-dom";

import parse from 'html-react-parser';

const Dpost = () => {
    const posts = useQuery(api.posts.list) || [];
    const [postLink, setPostLink] = useState('')

    let { postId } = useParams()
    // const Getpost = () => {
    //     let { postId } = useParams()
    //     console.log(postId)
    // }
    return (
        <div >


            {

                posts.map((post) => (

                    <div key={post._id} className='whole-post'>
                        {
                            postId == post._id ?
                                (
                                    <div>
                                        <span> <h1><b>{post.title}</b></h1></span>
                                        <span>Posted by: {post.author}</span>
                                        <span>{parse(post.postBody)}</span>

                                    </div>
                                ) : null
                        }

                    </div>


                ))
            }</div>
    )
}

export default Dpost