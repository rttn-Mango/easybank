import { BiSolidPhoneCall } from 'react-icons/bi';
import { FaLocationDot } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

export default function Contact(){
    return (
        <main className="contact | container">
            <h1>Contact Us</h1>
            <div className="contact__info">
                <div className="contact__info--details">
                    <BiSolidPhoneCall/>
                    <p>Contact us</p>
                    <p>+12 345-67-890</p>
                </div>
                <div className="contact__info--details">
                    <FaLocationDot />
                    <p>Location</p>
                    <p>Somewhere Avenue, Lost City. </p>
                </div>
                <div className="contact__info--details">
                    <MdEmail/>
                    <p>Send us an Email</p>
                    <p>easybank@email.com</p>
                </div>
            </div>
            <div className="contact__message">
                <div className="contact__message--group">
                    <p>Get In Touch</p>
                    <h2>Have a question? Message us below</h2>
                </div>
                <form action="">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" placeholder="Name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input type="email" name="email" id="email" placeholder="sample@email.com"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="message"></label>
                        <textarea type="text" name="message" id="message" placeholder="Message"/>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </main>
    )
}