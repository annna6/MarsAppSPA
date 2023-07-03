import React from 'react';
import './App.css';
import logo from "./assets/logo192.png"
import {CounterContainer} from "./CounterContainer";
import {TextTemplate} from "./TextTemplate";

export interface ContainerProps {
    title: string,
    firstParagraph: string,
    secondParagraph: string,
    image_src : string
}

function App() {
  return (
      <div>
          <TextTemplate image_src={logo} title={"Hello, NASA!"} firstParagraph={"First paragraph"} secondParagraph={"Second paragraph"}/>
          <CounterContainer/>
      </div>
  );
}

export default App;
