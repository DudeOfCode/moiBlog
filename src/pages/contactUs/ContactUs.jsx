import React from 'react'
import "./ContactUs.scss"
const ContactUs = () => {
    return (
        <div className='big-cont'>
            <a id="contact-us" className="offset"> </a>
            <h1>Contact Us</h1>
            <div className='contact-div'>

                <form className='form-contact'>
                    <br />
                    <input type="email" placeholder='Type in your email address' required /><button>Use This Account's email</button>
                    <br />
                    <textarea required placeholder='Type in the content' className='cont-cont' />
                    <br />
                    <button>Send Message</button>
                    <br />
                </form>



            </div>
        </div>
    )
}
export default ContactUs;