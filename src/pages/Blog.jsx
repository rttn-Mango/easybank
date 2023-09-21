import ArticlesCard from "../components/ArticlesCard"

export default function Blog(){
    return(
        <main className="blog">
            <h1>Our Recent Articles</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id voluptas doloremque molestiae veniam voluptatum facilis ullam perspiciatis cum earum! Esse natus dolore ab accusantium, deleniti itaque quibusdam numquam animi nisi!</p>
            <form action="">
                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" name="email" id="email" placeholder="sample@email.com"/>
                </div>
                <button type="submit">Subscribe</button>
            </form>

            <div className="blog__articles">
                <ArticlesCard
                    path="src/assets/image-currency.jpg"
                    author="Claire Robinson"
                    title="Receive money in any currency with no fees"
                    content="The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single..."
                />
                <ArticlesCard
                    path="src/assets/image-restaurant.jpg"
                    author="Wilson Huttson"
                    title="Treat yourself without worrying about money"
                    content="Our simple budgeting feature allows you to separate out your spening and set realistic limits each month. That means you..."
                />
                <ArticlesCard
                    path="src/assets/image-plane.jpg"
                    author="Wilson Huttson"
                    title="Take your Easybank card wherever you go"
                    content="We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you..."
                />
                <ArticlesCard
                    path="src/assets/image-confetti.jpg"
                    author="Claire Robinson"
                    title="Our invite-only Beta accounts are now live!"
                    content="After a lot of hard work by the whole team, we're extend to launch our closed beta. It's easy to request an invite through the site..."
                />
            </div>
        </main>
    )
}