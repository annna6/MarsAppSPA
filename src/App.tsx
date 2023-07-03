import React from 'react';
import './App.css';
import logo from "./assets/logo192.png"
import {TextTemplate} from "./TextTemplate";

function App() {
  return (
    <TextTemplate className="textStyling" image_src={logo} title={"Hello, NASA!"} paragraphs={["first paragraph", "second paragraph"]}/>
  );
}

export default App;
