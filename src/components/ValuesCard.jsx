import PropTypes from "prop-types";

export default function ValuesCard({subHeading, content}){
    return(
        <details>
            <summary>{subHeading}</summary>
            <p>{content}</p>
        </details>
    )
}

ValuesCard.propTypes = {
    subHeading: PropTypes.string,
    content: PropTypes.string
}
