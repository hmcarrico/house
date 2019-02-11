import React, { Component } from 'react';
import {connect} from 'react-redux';
import {updateName, updateAddress, updateCity, updateHomeState} from '../../ducks/reducer';
import {Link} from 'react-router-dom';


class Step1 extends Component {
  render() {
    const {name, address, city, homeState} = this.props
    return (
      <div>
      Name: <input value={name} onChange={(e) => this.props.updateName(e.target.value)}></input>
      Address: <input value={address} onChange={(e) => this.props.updateAddress(e.target.value)}></input>
      City: <input value={city} onChange={(e) => this.props.updateCity(e.target.value)}></input>
      State: <input value={homeState} onChange={(e) => this.props.updateHomeState(e.target.value)}></input>
      <Link to='/wizard/step2'><button>Step 2</button></Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.name,
    adress: state.address,
    city: state.city,
    homeState: state.homeState
  }
}

const x = {
  updateName,
  updateAddress,
  updateCity, 
  updateHomeState
}

export default connect(mapStateToProps, x)(Step1)