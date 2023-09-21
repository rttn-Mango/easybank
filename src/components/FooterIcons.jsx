export default function FooterIcons({path, alt}){
    return(
        <object data="image/svg+xml" aria-label={alt} type={path}>
            {/* Fallback */}
            <img src={path} alt={alt} />
        </object>
    )
}