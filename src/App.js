import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Carousel, Button } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import './App.css';
import Nav from './components/Nav';
import CreateEvent from './components/CreateEvent';
import Home from './components/Home';
import EventsContainer from './components/EventsContainer';
import EventCard from './components/EventCard';


class App extends Component {
  // renderTransponders = () => this.props.transponders.map((transponder, id) => <TransponderContainer key={id} number={transponder.number}  rented={transponder.rented} transponder={transponder} />)
  
  render() {
    return (
      <div  >
        <header>
        <Router>
        <Nav />
        <Container>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/events' component={EventsContainer} />
            <Route exact path='/events/new' component={CreateEvent} />
            <Route exact path='/events/:key' component={EventCard} />
  
          
          </Switch>
          </Container>
        </Router>

        </header>
      </div>
    );
  }
  
}

// const available = {
//   backgroundColor: '#efffd3',
//   float: 'right'
// }

// const unavailable = {
//   backgroundColor: '#ffd3d3',
//   float: 'right'
// }

// const title = {
//   color: '#9842f4',
//   fontSize: '50px'

// }

// const subTitle = {
//   color: '#4092E7',
//   marginTop: '20px'
// }

// const header = {
//   textAlign: 'center'
// }

// const logo = {
//   height: '250px',
//   width: '300px'
// }

// const body = {
//   marginTop: '40px',
//   textAlign: 'center'
// }

// const cta = {
//   marginTop: '30px',
//   width: '150px',
//   height: '50px'
// }


const mapStateToProps = (state) => {
  return { transponders: state.events.transponders };
};


 export default connect(mapStateToProps)(App);

