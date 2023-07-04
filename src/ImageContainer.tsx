import React, {useState} from "react";
import "./ImageContainer.scss";
import Lightbox, {Slide, SlideImage} from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
interface ImageContainerInterface {
    urls: string[];
}
export const ImageContainer : React.FC<ImageContainerInterface> = ({urls} : ImageContainerInterface) => {
    const images = urls.length !== 0 ? urls.map((url : string) => <img onClick={() => setOpen(true)} key={url} src = {url}/>) :
        <p> No photos available! </p>;
    const [open, setOpen] = useState<boolean>(false);
    const slides : SlideImage[] = [];
    urls.forEach((url : string) : number => slides.push( {src: url} ));
    return (
        <div>
            <div
                onClick={() => setOpen(true)}
                className="gallery">{images}</div>
            {open && <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={slides}
            ></Lightbox>}
        </div>
    )
}