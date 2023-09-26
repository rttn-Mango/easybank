import { Link } from "react-router-dom"
import { useState } from "react"

export default function Header(){
    const [mobile, setMobile] = useState(false);

    const triggerMobileNav = () =>{
        setMobile(!mobile);
    }

    return(
        <header className="header | container">
            <Link className="logo" to=""><img src="src/assets/logo.svg" alt="Easybank logo" /></Link>
            <>
                <nav>
                    <ul role="list">
                        <li>
                            <Link to="">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link to="/blog">Blog</Link>
                        </li>
                        <li>
                            <Link to="/careers">Careers</Link>
                        </li>
                    </ul>
                </nav>
                <button type="button">Request Invite</button>
            </>

            <div className="header__hamburger">
                <button><img src="src/assets/icon-hamburger.svg" alt="nav icon"/></button>
            </div>
        </header>
    )
}