export default function ArticlesCard({author, title, content, path}){
    return(
        <a href="">
            <article>
                <img src={path} alt="article image" />
                <div className="texts">
                    <p>By: {author}</p>
                    <h3>{title}</h3>
                    <p>{content}</p>
                </div>            
            </article>
        </a>
    )
}