import { Link } from "react-router-dom"

export default function Header(){
    return(
        <header>
            <Link to=""><img src="src/assets/logo.svg" alt="Easybank logo" /></Link>
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
        </header>
    )
}