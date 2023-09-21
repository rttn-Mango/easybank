import ValuesCard from "../components/ValuesCard"

export default function Careers(){
    return(
        <main className="careers">
            <h1>Be part of <strong>something great</strong>. Join our <strong>fast growing team</strong></h1>
            <button type="button">See open positions</button>
            <section className="careers__values">
                <h2>Our Values</h2>
                <div className="careers__values--group">
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
                        subHeading="Customer-Centric Approach"
                        content="Your satisfaction is our priority. Our dedicated customer support team is available to assist you with any questions or concerns you may have, ensuring you have a seamless experience with Easybank."
                    />
                </div>
            </section>
        </main>
    )
}