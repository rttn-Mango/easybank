import { Link } from "react-router-dom"
import { useState, useEffect, useCallback } from "react"

export default function Header(){
    const [mobile, setMobile] = useState(false);

    const triggerMobileNav = () =>{
        setMobile(!mobile);
    }

    //Adds 'disabled' class to body if hamburger icon is toggled disabling background actions 
    const handleNavChanges = useCallback(() => {
            if(!mobile) document.body.classList.remove("disabled");
            else document.body.classList.add("disabled");
    }, [mobile]);

    useEffect(() => {
        handleNavChanges();
    },[handleNavChanges])


    return(
        <header className="header | container">
            <Link className="logo" to=""><img src="src/assets/logo.svg" alt="Easybank logo" draggable="false"/></Link>
            <>
                <nav className="header__wide">
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
                {mobile ? <button onClick={triggerMobileNav}><img src="src/assets/icon-close.svg" alt="nav icon"/></button> : <button onClick={triggerMobileNav}><img src="src/assets/icon-hamburger.svg" alt="nav icon"/></button>}
            </>

            <div className={mobile ? "header__hamburger active" : "header__hamburger"}>
                <nav>
                    <ul role="list">
                        <li >
                            <Link onClick={triggerMobileNav} to="">Home</Link>
                        </li>
                        <li>
                            <Link onClick={triggerMobileNav} to="/about">About</Link>
                        </li>
                        <li >
                            <Link onClick={triggerMobileNav} to="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link onClick={triggerMobileNav} to="/blog">Blog</Link>
                        </li>
                        <li>
                            <Link onClick={triggerMobileNav} to="/careers">Careers</Link>
                        </li>
                    </ul>
                </nav>                        
            </div>
        </header>
    )
}