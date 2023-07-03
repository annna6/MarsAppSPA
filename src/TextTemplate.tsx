import './TextTemplate.css'
export function TextTemplate(props : any) {
    return (
        <div className="text-template">
            <h1>{props.title}</h1>
            <p>{props.paragraphs[0]}</p>
            <p>{props.paragraphs[1]}</p>
            <img src={props.image_src}></img>
        </div>
    )
}