import React from 'react';
import {Link} from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <div className='headhead'>
      <h1>Houser</h1>
      <div className='headheadhead'>
        <Link to='/'><button>Dashboard</button></Link>
        <Link to='/wizard/step1'><button>Add New Property</button></Link>
      </div>
    </div>
  )
}

export default Header;