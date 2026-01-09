import React, { useState } from 'react'
import { useMutation, useQuery } from "convex/react";
import { api } from "/convex/_generated/api";
import { useParams } from "react-router-dom";



// import parse from 'html-react-parser';

// const Getpost = () => {
//     let { postId } = useParams()
//     console.log(postId)
// }
const ShortUrlShow = () => {

  const urls = useQuery(api.newurl.list) || [];
  let { urlId } = useParams();

  return (

    <div>ShortUrlShow

      <div >


        {

          urls.map((url) => (

            <div key={url._id} className='whole-post'>
              {
                urlId == url._id.slice(0, 7) ?
                  (
                    <div>
                      {urlId}
                    </div>
                  ) : null
              }

            </div>


          ))


        }</div>

      < div id="container-0742577e83059792439d50430649a949"></div>
      < div id="container-0742577e83059792439d50430649a949"></div>
      < div id="container-0742577e83059792439d50430649a949"></div>


      {/* <div>
        {urlId}

      </div> */}

    </div >

  )
}

export default ShortUrlShow;