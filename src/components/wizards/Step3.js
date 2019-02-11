import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {updateRent, updateMorgage} from '../../ducks/reducer';
import axios from 'axios';

class Step3 extends Component {

  submitAll = (name, address, city, state, morgage, rent, url) => {
    axios.post('/api/houses', {name, address, city, state, morgage, rent, url}).then(res => {
      alert('Posted!')
    })
  }

  render() {
    const {name, address, city, state, morgage, rent, url} = this.props
    return (
      <div>
        Morgage: <input onChange={(e) => this.props.updateRent(e.target.value)}/>
        Rent: <input onChange={(e) => this.props.updateMorgage(e.target.value)}/>
        <Link to='/wizard/step2'><button>Step 2</button></Link>
        <button onClick={() => this.submitAll(name, address, city, state, morgage, rent, url)}>Submit</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.name,
    adress: state.address,
    city: state.city,
    homeState: state.homeState,
    url: state.url,
    rent: state.rent,
    morgage: state.morgage
  }
}

const mapDispatchToProps = {
  updateRent,
  updateMorgage
}

export default connect(mapStateToProps, mapDispatchToProps)(Step3);
