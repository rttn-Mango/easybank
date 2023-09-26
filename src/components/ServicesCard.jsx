import PropTypes from "prop-types";

export default function ServicesCard({path, subHeading, paragraph}){
    return(
        <article>
            <img src={path} alt="icon" />
            <h3>{subHeading}</h3>
            <p>{paragraph}</p>
        </article>
    )
}

ServicesCard.propTypes = {
    path: PropTypes.string,
    subHeading: PropTypes.string,
    paragraph: PropTypes.string
}