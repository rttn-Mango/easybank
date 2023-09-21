import ArticlesCard from "../components/ArticlesCard"

export default function Articles(){
    return(
        <section className="articles">
            <h2>Latest Articles</h2>
            <div className="articles__group">
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
        </section>
    )
}