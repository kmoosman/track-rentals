import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navbar } from "react-bootstrap";
import './App.css';
import CreateEvent from './components/CreateEvent';
import Event from './components/Event';
import TransponderContainer from './components/TransponderContainer';


class App extends Component {

  renderTransponders = () => this.props.transponders.map((transponder, id) => <TransponderContainer key={id} number={transponder.number}  rented={transponder.rented} transponder={transponder} />)

  render() {
    return (
      <div className="App" >
        <header>
        <Navbar>
          <a href="/">Nav Bar Links</a>
        </Navbar>
          <CreateEvent /> 
          <Event />
          {this.renderTransponders()}
        </header>
      </div>
    );
  }
  
}

const available = {
  backgroundColor: '#efffd3',
  float: 'right'
}

const unavailable = {
  backgroundColor: '#ffd3d3',
  float: 'right'
}


const mapStateToProps = (state) => {
  return { transponders: state.transponders };
};


 export default connect(mapStateToProps)(App);

