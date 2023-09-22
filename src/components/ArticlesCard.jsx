export default function ArticlesCard({author, title, content, path}){
    return(
        <article>
            <a href="">
                <img src={path} alt="article image" />
                <div className="texts">
                    <p>By: {author}</p>
                    <h3>{title}</h3>
                    <p>{content}</p>
                </div>
            </a>
        </article>
    )
}