import React from 'react';
import logo from './logo.svg';
import { Navbar } from "react-bootstrap";
import './App.css';
import CreateEvent from './components/CreateEvent';
import Event from './components/Event';
import TransponderContainer from './components/TransponderContainer';

function App() {
  return (
    <div className="App" >
      <header>
      <Navbar>
        <a href="/">Nav Bar Links</a>
      </Navbar>
        <CreateEvent /> 
        <Event />
        <TransponderContainer number={1} background={available} status={"Available"} rented={false}/>
        <TransponderContainer number={2} background={unavailable} status={"Rented"} rented={true}/>
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
