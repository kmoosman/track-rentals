import React from 'react';
import logo from './logo.svg';
import { Navbar } from "react-bootstrap";
import './App.css';
import CreateEvent from './components/CreateEvent';
import Event from './components/Event';
import Transponder from './components/Transponder';

function App() {
  return (
    <div className="App" >
      <header>
      <Navbar>
        <a href="/">Nav Bar Links</a>
      </Navbar>
        <CreateEvent /> 
        <Event />
        <Transponder number={1} background={available} status={"Available"}/>
        <Transponder number={2} background={unavailable} status={"Rented"}/>
      </header>
    </div>
  );
}

const available = {
  backgroundColor: '#efffd3',
  float: 'right'
}

const unavailable = {
  backgroundColor: '#ffd3d3',
  float: 'right'
}
export default App;
