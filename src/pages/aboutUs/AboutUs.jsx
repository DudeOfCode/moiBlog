import React from 'react'
import { Link } from 'react-router-dom'
import "./AboutUs.scss"
const AboutUs = () => {
    return (
        <div>AboutUs
            <div className="cont">
                <a id="about-us"> </a>
                <h1>About Us</h1>
                <p>We are a programming comany that focuses on solving tangible problems that can help improve human life. <Link to="/contact-us">Contact us</Link>  to know more about us </p>
                <div className='person'>
                    <span>  <img
                        className='son'
                        src='https://static.vecteezy.com/system/resources/previews/004/191/260/non_2x/avoid-contact-with-people-color-icon-no-human-touch-stop-virus-spread-common-cold-influenza-infection-flu-precaution-healthcare-epidemic-prevention-grippe-caution-isolated-illustration-vector.jpg'
                    />
                        <div className='don'>
                            <h4  > Somebody</h4>
                            <p>Post</p>
                            <p>Nigeria</p>
                        </div>
                    </span>
                    <span>  <img
                        className='son'
                        src='https://static.vecteezy.com/system/resources/previews/004/191/260/non_2x/avoid-contact-with-people-color-icon-no-human-touch-stop-virus-spread-common-cold-influenza-infection-flu-precaution-healthcare-epidemic-prevention-grippe-caution-isolated-illustration-vector.jpg'
                    />
                        <div className='don'>
                            <h4  > Somebody</h4>
                            <p>Post</p>
                            <p>Nigeria</p>
                        </div>

                    </span>
                    <span>  <img
                        className='son'
                        src='https://static.vecteezy.com/system/resources/previews/004/191/260/non_2x/avoid-contact-with-people-color-icon-no-human-touch-stop-virus-spread-common-cold-influenza-infection-flu-precaution-healthcare-epidemic-prevention-grippe-caution-isolated-illustration-vector.jpg'
                    />
                        <div className='don'>
                            <h4  > Somebody</h4>
                            <p>Post</p>
                            <p>Nigeria</p>
                        </div>
                    </span>



                </div>
            </div>



        </div>
    )
}

export default AboutUs