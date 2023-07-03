import React, {useEffect, useState} from 'react';
import {CounterContainer} from "./CounterContainer";
import {TextTemplate} from "./TextTemplate";
import {Route, Routes} from "react-router-dom";
import "./App.scss";
import mock_rover from "./assets/mock-rover.jpg"
import Select from 'react-select';

export interface ContainerProps {
    title: string,
    firstParagraph: string,
    secondParagraph: string,
    image_src : string
}

interface Rover {
    value: string,
    label: string
}

/*
const hardcodedRovers: Rover[] = [
    { value: 'Curiosity', label: 'Curiosity'},
    { value: 'Opportunity', label: 'Opportunity'},
    { value: 'Perseverance', label: 'Perseverance'},
    { value: 'Spirit', label: 'Spirit'},
];*/

function App() {
    const loremIpsum : string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";
    const [rovers, setRovers] = useState<Rover[]>([]);

    useEffect(() : void => {
        fetch("http://localhost:8000/rovers/",
            {mode: 'cors'})
            .then(response => response.json())
            .then((rovers) : void => {
                console.log(rovers);
                setRovers(rovers.map((rover : any) : Rover => { return { label: rover.name, value: rover.name }}));
            })}, []);

    return (
      <div className="wrapper">
          <nav>
              <ul>
                  <li onClick={(): void => { window.location.href = "/" }}> Home </li>
                  <li onClick={() : void => { window.location.href = "/counter"}}> Counter </li>
              </ul>
          </nav>
          <Select className="select-styling" options={rovers}/>
          <Routes>
              <Route path="/" element = {
                  <div className="container">
                      <TextTemplate image_src={mock_rover} title={"Hello, NASA!"} firstParagraph={loremIpsum} secondParagraph={loremIpsum}/>
                  </div>
              } />
              <Route path="/counter" element = {
                  <div className="container">
                      <CounterContainer/>
                  </div>
              }/>
          </Routes>
      </div>
  );
}

export default App;
