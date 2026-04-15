import React from 'react'
import './Contact.css'
import Navbar from '../Navbar/Navbar'
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram} from 'react-icons/fa'

function Contact() {
  return (
    <div className='contact'>
      <Navbar />
      <div className='contact-section'>
        <div className='contact-body'>
            <h1>Get in Touch</h1>
            <h3>I'd like to hear from you!</h3>
            <p>If you have any inquiries or just want to say hi, please use the contact form!</p>
            <div className='social-contact'>
                <p> <FaEnvelope/> mhadeshreyas911@gmail.com</p>
                <p><FaLinkedin /><FaGithub /> <FaInstagram /></p>
            </div>
        </div>
        <form className='contact-form'>
            <div className='contact-name'><label>
                First Name
                <input></input>
            </label>
            <label>
                Last Name
                <input></input>
            </label></div>
            <label>
                Email
                <input></input>
            </label>
            <label>
                Message
                <textarea></textarea>
            </label>
            </form>
        </div>
      </div>
  )
}

export default Contact
