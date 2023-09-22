import FooterIcons from "../components/FooterIcons"

export default function Footer(){
    return(
        <footer className="footer">
            <div className="group | container">
                <div className="footer__socials">              
                    <img src="src/assets/logo-white.svg" alt="Easybank logo" />
                    <div className="footer__socials--wrapper">
                        <FooterIcons path="src/assets/icon-facebook.svg" alt="Facebook logo"/>
                        <FooterIcons path="src/assets/icon-youtube.svg" alt="Youtube logo"/>
                        <FooterIcons path="src/assets/icon-twitter.svg" alt="Twitter logo"/>
                        <FooterIcons path="src/assets/icon-pinterest.svg" alt="Pinterest logo"/>
                        <FooterIcons path="src/assets/icon-instagram.svg" alt="Instagram logo"/>
                    </div>
                </div>
                <nav className="footer__links">
                    <ul role="list">
                        <li><a href="">About Us</a></li>
                        <li><a href="">Contact</a></li>
                        <li><a href="">Blog</a></li>
                    </ul>
                    <ul role="list">
                        <li><a href="">Careers</a></li>
                        <li><a href="">Support</a></li>
                        <li><a href="">Privacy Policy</a></li>
                    </ul>
                </nav>
                <div className="footer__credits">
                    <button type="button">Request Invite</button>
                    <p>© Easybank. All Rights Reserved</p>
                </div>
            </div>
        </footer>
    )
}