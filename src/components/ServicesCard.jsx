export default function ServicesCard({path, subHeading, paragraph}){
    return(
        <article>
            <img src={path} alt="icon" />
            <h3>{subHeading}</h3>
            <p>{paragraph}</p>
        </article>
    )
}