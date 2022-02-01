

export default function Title({title, subtitle}){
    //console.log(props.title)
    return(
        <>
            <h1 className="title">{title}</h1>
            <h2 className="subtitle">{subtitle}</h2>
        </>
    )
}

