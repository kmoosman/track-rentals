
import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div style={navbar}>
      <Menu>
        <Menu.Item  style={title}> Track It </Menu.Item>
        <div style={bundledLinks}>
        <Menu.Item style={links} as={Link} to='/events/new' name='Add New Event'></Menu.Item>
        <Menu.Item style={links} as={Link} to='/events' name='List Events'></Menu.Item>
        <Menu.Item  style={links} as={Link} to='/' name='Home'></Menu.Item>
        </div>
      </Menu>
    </div>
  )
}

const navbar = {
    backgroundColor: '#9842f4',
    width: '100%',
    height: '50px'
    // color: 'white'
  }

const links = {
    color: 'white',
    float: 'right',
    marginLeft: '10px',
    marginRight: '10px',
    marginTop: '10px'
}

const title = {
    color: 'white',
    float: 'left',
    fontSize: '30px',
    marginLeft: '30px'
    
}

const bundledLinks = {
    marginRight: '30px'
    
}

export default Nav;