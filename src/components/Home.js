import React, { Component } from 'react';
import { Carousel, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import AddComment from './AddComment'

class Home extends Component {
  
  render() {
    return (
      <div  >
        <header>
        <div style={header}>
        <h3 style={subTitle}>Trackside Equipment Rentals</h3>
        
        </div>
        <div style={body}>
            <Carousel interval="2000">
              <Carousel.Item>
                <img style={logo} src={require('../images/Car_Vector.png')} alt={"race car"} />
              </Carousel.Item>
              <Carousel.Item>
                <img style={logo} src={require('../images/X2-transponders-01.png')} alt={"transponders"} />
              </Carousel.Item>
              <Carousel.Item>
                <img style={logo} src={require('../images/BellSport2011.jpg')} alt={"helmet"} />
              </Carousel.Item>
              </Carousel>
              <Link to={`/events`} >
                 <Button style={cta} variant="primary" onClick={ () => console.log('you clicked to return') }>Rent Now</Button>
              </Link>
              <AddComment/>
          </div>
          
        </header>
      </div>
    );
  }
  
}



// const title = {
//   color: '#307CF6',
//   fontSize: '50px'

// }

const subTitle = {
  color: '#4092E7',
  marginTop: '20px'
}

const header = {
  textAlign: 'center'
}

const logo = {
  height: '250px',
  width: '300px'
}

const body = {
  marginTop: '40px',
  textAlign: 'center'
}

const cta = {
  marginTop: '30px',
  width: '150px',
  height: '50px'
}

 export default Home;

