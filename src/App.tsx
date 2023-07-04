import React, {useEffect, useState} from 'react';
import {CounterContainer} from "./CounterContainer";
import {TextTemplate} from "./TextTemplate";
import {Route, Routes} from "react-router-dom";
import "./App.scss";
import mock_rover from "./assets/mock-rover.jpg"
import Select, {SingleValue} from 'react-select';
import {ImageContainer} from "./ImageContainer";

export interface ContainerProps {
    title: string,
    firstParagraph: string,
    secondParagraph: string,
    image_src : string
}

interface Rover {
    name: string,
    cameras: string[]
}

interface SelectOptions {
    value: string,
    label: string
}

const hardcodedRoverOptions: SelectOptions[] = [
    { value: 'Curiosity', label: 'Curiosity'},
    { value: 'Opportunity', label: 'Opportunity'},
    { value: 'Perseverance', label: 'Perseverance'},
    { value: 'Spirit', label: 'Spirit'},
];

const hardcodedRovers : Rover[] = [
    { name: "Curiosity", cameras: ["FHAZ", "NAVCAM"] },
    { name: "Spirit", cameras: ["FHAZ", "RHAZ"] }
]
function App() {
    const loremIpsum : string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";
    const [rovers, setRovers] = useState<Rover[]>([]);
    const [currentRover, setCurrentRover] = useState<string>();
    const [currentCameras, setCurrentCameras] = useState<SelectOptions[]>([])
    const [currentCamera, setCurrentCamera] = useState<string>();
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [currentPhotos, setCurrentPhotos] = useState<string[]>([]);
    const [hasSentFirstRequest, setHasSentFirstRequest] = useState<boolean>(false);

    useEffect(() : void => {
        fetch("http://localhost:8000/rovers/",
            {mode: 'cors'})
            .then(response => response.json())
            .then((rovers) : void => {
                setRovers(rovers);
            })
/*
        setRovers(hardcodedRovers);
*/
    }, []);

    useEffect(() : void => {
        if (isSubmitting) {
            if (!hasSentFirstRequest) {
                setHasSentFirstRequest(true);
            }
            fetch(`http://localhost:8000/rovers/${currentRover}/photos/${currentCamera}/1000`)
                .then(response => response.json())
                .then((parsedResponse) : void => {
                    setCurrentPhotos(parsedResponse.map((photo : any) : string => photo.src));
                });
            /*setCurrentPhotos([
                "http://cdn.akc.org/content/article-body-image/housetrain_adult_dog_hero.jpg",
                "https://pbs.twimg.com/profile_images/948761950363664385/Fpr2Oz35_400x400.jpg",
                "https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg",
                "http://www.dogbazar.org/wp-content/uploads/2014/09/british-bull-dog-puppies.jpg",
            ]);*/
            setIsSubmitting(false);
        }
    }, [isSubmitting]);

    function getCamerasForRover(roverName : string) : SelectOptions[] {
        return roverName.length >= 1 ? rovers.filter((rover : Rover) : boolean => roverName === rover.name)[0].cameras
                                                  .map((camera : string) : SelectOptions => {return { label: camera, value: camera}}) : [];
    }

    function handleSubmit() : void {
        if (!isSubmitting) {
            setIsSubmitting(!isSubmitting);
        }
    }

    return (
      <div className="wrapper">
          <nav>
              <ul>
                  <li onClick={(): void => { window.location.href = "/" }}> Home </li>
                  <li onClick={() : void => { window.location.href = "/counter" }}> Counter </li>
              </ul>
          </nav>
          <div className="select-container">
          <Routes>
              <Route path="/" element = {
                  <div>
                      <div className="select-container">
                      <Select
                          placeholder="Rover"
                          className="select-styling"
                          onChange={(choice : SingleValue<SelectOptions>) : void => {
                              setCurrentRover(choice ? choice.value : "");
                              setCurrentCameras(getCamerasForRover(choice ? choice.value : ""));
                          }}
                          options={rovers.map((rover : Rover) : SelectOptions => {
                              return { label: rover.name, value : rover.name}
                          })}
                      />
                      <Select
                          isDisabled={currentCameras.length === 0}
                          placeholder="Camera"
                          className="select-styling"
                          onChange={(choice : SingleValue<SelectOptions>) : void => { setCurrentCamera(choice ? choice.value : "")}}
                          options={currentCameras}/>
                      <button onClick={handleSubmit}> Search! </button>
                      </div>
                      <div className="container">
                          <TextTemplate image_src={mock_rover} title={"Rover Photos Finder"} firstParagraph={loremIpsum} secondParagraph={loremIpsum}/>
                      </div>
                      {hasSentFirstRequest && <ImageContainer urls={currentPhotos}/>}
                  </div>
              } />
              <Route path="/counter" element = {
                  <div className="container">
                      <CounterContainer/>
                  </div>
              }/>
          </Routes>
      </div>
  </div>);
}

export default App;
