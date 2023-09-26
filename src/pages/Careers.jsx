import ValuesCard from "../components/ValuesCard"

export default function Careers(){
    return(
        <main className="careers">
            <div className="careers__heading | container">
                <h1>Be part of <strong>something great</strong>. Join our <strong>fast growing team</strong></h1>
                <p><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, aliquid voluptatem tempora nisi, magni quam consectetur praesentium ipsa laudantium voluptatibus inventore optio ducimus ea beatae esse eaque? Odit, et perspiciatis!</span><span>Ipsum ex libero ad sunt in nisi sequi architecto quasi necessitatibus quis suscipit doloribus distinctio illo, accusantium quia eos animi, doloremque expedita optio. Consequatur in dicta officia molestias, doloremque consectetur.</span></p>
                <button>See open positions</button>
            </div>
            <section className="careers__values | container">
                <h2>Our Values</h2>
                <div className="careers__values--group">
                    <img src="public/team.jpg" alt="Easybank Team" />
                    <div className="careers__values--cards">
                        <ValuesCard
                            subHeading="Simplicity"
                            content="We believe in keeping things straightforward. Our user-friendly interface and clear, jargon-free language make banking a breeze, even for those new to the world of online finance."
                        />
                        <ValuesCard
                            subHeading="Security"
                            content="Your trust is paramount. We employ state-of-the-art security measures to safeguard your financial information and transactions, ensuring a safe and secure banking experience."
                        />
                        <ValuesCard
                            subHeading="Innovation"
                            content="We're always at the forefront of technological advancements in the banking industry. This enables us to offer you the latest features and services, providing a modern banking experience that adapts to your needs."
                        />
                        <ValuesCard
                            subHeading="Accessibility"
                            content="Easybank is accessible anytime, anywhere. Whether you're at home, in the office, or on the go, you can manage your finances with ease through our web platform or mobile app."
                        />
                        <ValuesCard
                            subHeading="Customer Friendly"
                            content="Your satisfaction is our priority. Our dedicated customer support team is available to assist you with any questions or concerns you may have, ensuring you have a seamless experience with Easybank."
                        />
                    </div>
                </div>
            </section>
        </main>
    )
}