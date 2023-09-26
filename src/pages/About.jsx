import ServicesCard from "../components/ServicesCard"

export default function About(){
    const SERVICES_DATA = [
        {
            path: "src/assets/icon-online.svg",
            subHeading: "Online Banking",
            paragraph: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."
        },
        {
            path: "src/assets/icon-budgeting.svg",
            subHeading: "Simple Budgeting",
            paragraph: "See exactly where your money goes each month. Receive notifications when you're close to hitting your limits."
        },
        {
            path: "src/assets/icon-onboarding.svg",
            subHeading: "Fast Onboarding",
            paragraph: "We don't do branches. Open your account in minutes online and start taking control of your finances right away."
        },
        {
            path: "src/assets/icon-api.svg",
            subHeading: "Open API",
            paragraph: "Manage your savings, investments, pensions, and much more from one account. Tracking your money has never been easier."
        }
    ];

    return(
        <main className="about">
            <h1>Easybank, where banking is made simple.</h1>
            <div className="about__intro">
                <div className="about__intro--wrapper | container">
                    <img src="public/placeholder.jpg" alt="placeholder" draggable="false" loading="lazy"/>
                    <h2>About <span>us</span></h2> 
                </div>
                <p className="container">At Easybank, we understand that your time is valuable. That's why we've designed our platform to be intuitive and efficient, ensuring you have more time to focus on what matters most to you. With a range of cutting-edge digital tools and features, managing your money has never been easier.</p>
            </div>

            <section className="about__services | container">
                {
                    SERVICES_DATA.map(service => {
                        return(
                            <ServicesCard
                                key={service.subHeading}
                                path={service.path}
                                subHeading={service.subHeading}
                                paragraph={service.paragraph}
                            />
                        )
                    })
                }
            </section>
            
        </main>
    )
}