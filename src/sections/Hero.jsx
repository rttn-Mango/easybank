export default function Hero(){
    return(
        <section className="hero">
            <picture>
                <source srcSet="src/assets/bg-mobile.svg" media="(max-width: 600px)"/>
                <img src="src/assets/bg-intro-desktop.svg" alt="Intro image" />
            </picture>
                
            <div className="hero__text">
                <h1>Next generation digital banking</h1>
                <p>Take your financial life online. Your Easybank account will be a one=stop=shop for spending, saving, budgeting, investing, and much more.</p>
                <button type="button">Request Invite</button>
            </div>
        </section>
    )
}