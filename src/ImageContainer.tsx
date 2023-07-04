import React from "react";
import "./ImageContainer.scss";

interface ImageContainerInterface {
    urls: string[];
}
export const ImageContainer : React.FC<ImageContainerInterface> = ({urls} : ImageContainerInterface) => {
    const images = urls.length !== 0 ? urls.map((url : string) => <img key={url} src = {url}/>) : <p> No photos available! </p>;
    return (
        <div className="gallery">{images}</div>
    )
}