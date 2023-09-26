import PropTypes from "prop-types";

export default function ArticlesCard({author, title, content, path}){
    return(
        <a href="">
            <article>
                <img src={path} alt="article image" draggable="false" loading="lazy"/>
                <p>By: {author}</p>
                <div className="texts">  
                    <h3>{title}</h3>
                    <p>{content}</p>
                </div>            
            </article>
        </a>
    )
}

ArticlesCard.propTypes = {
    author: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
    path: PropTypes.string
}