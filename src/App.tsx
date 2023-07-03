import React from 'react';
import logo from "./logo192.png";
import {CounterContainer} from "./CounterContainer";
import {TextTemplate} from "./TextTemplate";
import {Route, Routes} from "react-router-dom";
import "./App.scss";
import mock_rover from "./assets/mock-rover.jpg"

export interface ContainerProps {
    title: string,
    firstParagraph: string,
    secondParagraph: string,
    image_src : string
}

function App() {
    const loremIpsum : string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";
    return (
      <div className="wrapper">
          <nav>
              <ul>
                  <li onClick={(): void => { window.location.href = "/" }}> Home </li>
                  <li onClick={() : void => { window.location.href = "/counter"}}> Counter </li>
              </ul>
          </nav>
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
