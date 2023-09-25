export default function ArticlesCard({author, title, content, path}){
    return(
        <a href="">
            <article>
                <img src={path} alt="article image" />
                <p>By: {author}</p>
                <div className="texts">  
                    <h3>{title}</h3>
                    <p>{content}</p>
                </div>            
            </article>
        </a>
    )
}