import './TextTemplate.css'
import { ContainerProps }  from "./App"
export function TextTemplate(props : ContainerProps) {
    return (
        <div className="text-template">
            <h1>{props.title}</h1>
            <p>{props.firstParagraph}</p>
            <p>{props.secondParagraph}</p>
            <img src={props.image_src}></img>
        </div>
    )
}