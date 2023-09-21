export default function ArticlesCard({author, title, content, path}){
    return(
        <article>
            <img src={path} alt="article image" />
            <p>By: {author}</p>
            <a href="">{title}</a>
            <p>{content}</p>
        </article>
    )
}