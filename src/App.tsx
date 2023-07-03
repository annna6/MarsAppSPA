import React from 'react';
import '.scss/App.css';
import logo from "./logo192.png";
import {CounterContainer} from "./CounterContainer";
import {TextTemplate} from "./TextTemplate";
import {Route, Routes} from "react-router-dom";

export interface ContainerProps {
    title: string,
    firstParagraph: string,
    secondParagraph: string,
    image_src : string
}

function App() {
  return (
      <div>
          <ul>
              <li onClick={(): void => { window.location.href = "/" }}> Home </li>
              <li onClick={() : void => { window.location.href = "/counter"}}> Counter </li>
          </ul>
          <Routes>
              <Route path="/" element = {
                  <div>
                      <TextTemplate image_src={logo} title={"Hello, NASA!"} firstParagraph={"First paragraph"} secondParagraph={"Second paragraph"}/>
                  </div>
              } />
              <Route path="/counter" element = {
                  <div>
                      <CounterContainer/>
                  </div>
              }/>
          </Routes>
      </div>
  );
}

export default App;
