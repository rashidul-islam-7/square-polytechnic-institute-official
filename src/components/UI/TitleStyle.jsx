
const TitleStyle = ({title, highlightedTitle})=>{
return(
    <div className="text-2xl sm:text-3xl md:text-4xl font-semibold flex gap-3">
        <h1>{title}</h1> {" "}
        <span className="text-[#44a1a4] ">{highlightedTitle}</span>
    </div>
)
}

export default TitleStyle;