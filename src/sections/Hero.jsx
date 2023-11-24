export default function Hero(){
    return(
        <section className="hero | container">     
            <div className="hero__bg-images" >
                <img src="/image-mockups.png" alt="bg image" draggable="false"/>         
            </div>   
            <div className="hero__texts">
                <h1>Next generation digital banking</h1>
                <p>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
                <button type="button">Request Invite</button>
            </div>            
        </section>
    )
}