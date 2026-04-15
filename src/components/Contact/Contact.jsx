import React from 'react'
import './Contact.css'
import Navbar from '../Navbar/Navbar'
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram} from 'react-icons/fa'

function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault()
        // Placeholder behaviour: wire up to an API or email service as needed
        alert('Thanks! This demo does not send messages yet.')
    }

    return (
        <div className='contact'>
            <Navbar />
            <div className='contact-section'>
                <div className='contact-body'>
                        <h1>Get in Touch</h1>
                        <h3>I'd like to hear from you!</h3>
                        <p>If you have any inquiries or just want to say hi, please use the contact form.</p>
                        <div className='social-contact'>
                                <a href='mailto:mhadeshreyas911@gmail.com' aria-label='Email contact'>
                                    <FaEnvelope /> mhadeshreyas911@gmail.com
                                </a>
                                <div className='icons'>
                                    <a href='https://linkedin.com' target='_blank' rel='noreferrer' aria-label='LinkedIn'>
                                        <FaLinkedin />
                                    </a>
                                    <a href='https://github.com' target='_blank' rel='noreferrer' aria-label='GitHub'>
                                        <FaGithub />
                                    </a>
                                    <a href='https://instagram.com' target='_blank' rel='noreferrer' aria-label='Instagram'>
                                        <FaInstagram />
                                    </a>
                                </div>
                        </div>
                </div>

                <form className='contact-form' onSubmit={handleSubmit} aria-label='Contact form'>
                    <div className='contact-name'>
                        <label>
                            First Name
                            <input name='firstName' type='text' placeholder='Your first name' required />
                        </label>
                        <label>
                            Last Name
                            <input name='lastName' type='text' placeholder='Your last name' />
                        </label>
                    </div>

                    <label>
                        Email
                        <input name='email' type='email' placeholder='you@example.com' required />
                    </label>

                    <label>
                        Message
                        <textarea name='message' placeholder='Write your message...' required />
                    </label>

                    <button className='submit-btn' type='submit'>Send Message</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
