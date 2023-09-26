import ArticlesCard from "../components/ArticlesCard"

export default function Blog(){
    const ARTICLE_DATA = [
        {
            path: "public/blog6.jpg",
            author: "Claire Robinson",
            title: "Receive money in any currency with no fees",
            content: "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single...",
        },
        {
            path: "src/assets/image-restaurant.jpg",
            author: "Wilson Huttson",
            title: "Treat yourself without worrying about money",
            content: "Our simple budgeting feature allows you to separate out your spening and set realistic limits each month. That means you...",
        },
        {
            path: "src/assets/image-plane.jpg", 
            author: "Wilson Huttson", 
            title: "Take your Easybank card wherever you go",
            content: "We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you..."
        },
        {
            path: "src/assets/image-confetti.jpg",
            author: "Claire Robinson",
            title: "Our invite-only Beta accounts are now live!",
            content: "After a lot of hard work by the whole team, we're extend to launch our closed beta. It's easy to request an invite through the site..."
        },
        {
            path: "public/blog8.jpg",
            author: "Bryce Johnson",
            title: "Try our Beta Accounts now!",
            content: "Our invite-only Beta accounts are now live, Come and check them out. Just click the request button to get an invite...",
        },
        {
            path: "public/blog5.jpg",
            author: "Amanda Lin",
            title: "Visit Our Office",
            content: "Come drop by to our office if you have any questions, we're happy to help you get started with our services...",
        },
        {
            path: "public/blog7.jpg", 
            author: "William Lorem", 
            title: "Need a help?",
            content: "Stucked on something and can't figure out how to proceed? You might want to send us an email, we're happy to help you out.."
        },
        {
            path: "public/blog6.jpg",
            author: "Dolores Ipsum",
            title: "You're safe with us",
            content: "Our team made it sure your trust is safe with us. We've implemented countless measures to protect your privacy so don't..."
        }

    ];
    
    return(
        <main className="blog">
            <div className="blog__heading | container">
                <h1>Our Recent Blogs</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id voluptas doloremque molestiae veniam voluptatum facilis ullam perspiciatis cum earum! Esse natus dolore ab accusantium, deleniti itaque quibusdam numquam animi nisi!</p>
            
                <form action="">
                    <label htmlFor="email">Email Address</label>
                    <h2>Subscribe to our <em>Daily Newsletter</em></h2>
                    <div className="form-group">
                        <input type="email" name="email" id="email" placeholder="sample@email.com"/>
                        <button type="submit">Subscribe</button>
                    </div>
                </form>
            </div>

            <div className="blog__articles">
                <div className="blog__articles--subHeading | container">
                    <h2>Latest Blogs</h2>
                </div>
                <div className="blog__articles--group | container">
                    {
                        ARTICLE_DATA.map(article => {
                            return(
                                <ArticlesCard
                                    key={article.title}
                                    path={article.path}
                                    author={article.author}
                                    title={article.title}
                                    content={article.content}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </main>
    )
}