import ServicesCard from "../components/ServicesCard";

export default function Services(){
    const SERVICES_DATA = [
        {
            path: "/icon-online.svg",
            subHeading: "Online Banking",
            paragraph: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."
        },
        {
            path: "/icon-budgeting.svg",
            subHeading: "Simple Budgeting",
            paragraph: "See exactly where your money goes each month. Receive notifications when you're close to hitting your limits."
        },
        {
            path: "/icon-onboarding.svg",
            subHeading: "Fast Onboarding",
            paragraph: "We don't do branches. Open your account in minutes online and start taking control of your finances right away."
        },
        {
            path: "/icon-api.svg",
            subHeading: "Open API",
            paragraph: "Manage your savings, investments, pensions, and much more from one account. Tracking your money has never been easier."
        }
    ];

    return(
        <section className="services">
            <div className="services__wrapper | container">
                <div className="services__heading">
                    <h2>Why choose Easybank?</h2>
                    <p>We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
                </div>
                <div className="services__cards">
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
                </div>
            </div>
        </section>
    )
}