import { BiSolidPhoneCall } from 'react-icons/bi';
import { FaLocationDot } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

export default function Contact(){
    return (
        <main className="contact">
            <h1>Contact Us</h1>
            <div className="contact__infos">
                <BiSolidPhoneCall className='icon'/>
                <p>contact Info</p>
            </div>
            <div className="contact__infos">
                <FaLocationDot className='icon'/>
                <p>Location Info</p>
            </div>
            <div className="contact__infos">
                <MdEmail className='icon'/>
                <p>Email Info</p>
            </div>
            <div className="contact__message">
                {/* TODO: Same styling with About */}
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
                        <input type="text" name="message" id="message" placeholder="Message"/>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </main>
    )
}