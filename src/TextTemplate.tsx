import './TextTemplate.scss'
import { ContainerProps }  from "./App"
export function TextTemplate(props : ContainerProps) {
    return (
        <div className="text-template">
            <h1>{props.title}</h1>
            <img src={props.image_src}></img>
            <div className="text-container">
                <p>{props.firstParagraph}</p>
                <p>{props.secondParagraph}</p>
            </div>
        </div>
    )
}