import React, { Component } from 'react';
import House from '../house/house';
import axios from 'axios';
import './dashboard.css'

class Dashboard extends Component {
  constructor(){
    super();
    this.state = {
      houses: [],
      morgage: 0,
      rent: 0
    }
    this.getHouses = this.getHouses.bind(this);
  }

  componentDidMount(){
    this.getHouses()
  }

  getHouses(){
    axios.get('/api/houses').then(res => {
      this.setState({
        houses: res.data
      })
    })
  }

  deleteProp = (id) => {
    axios.delete(`/api/houses/${id}`).then(res => {
      alert('Deleted Listing!')
      {this.getHouses()};
    })
  }

  editPrice = (id, morgage, rent) => {
    axios.put(`/api/houses?id=${id}`, {morgage, rent}).then(res => {
      alert('Edited!')
      {this.getHouses()};
    })
  }

  handleInput1 = (e) => {
    this.setState({
      morgage: e.target.value 
    })
  }
  handleInput2 = (e) => {
    this.setState({
      rent: e.target.value 
    })
  }

  render() {
    let houzes = this.state.houses.map(house => {
      return <div className='prettyHouse'>
        <House 
        name={house.name} 
        address={house.address}
        city={house.city} 
        state={house.state}
        morgage={house.morgage}
        rent={house.rent}
        url={house.url}
        />
         <button onClick={() => this.deleteProp(house.id)}>Delete Listing</button>
        <br />
         Change Morgage: <input onChange={this.handleInput1}/><br />
         Change Rent: <input onChange={this.handleInput2}/><br />
         <button onClick={() => this.editPrice(house.id, this.state.morgage, this.state.rent)}>Edit!</button>
         <br /> <br />
      </div>
    })
    return (
        <div className='alll'>
        <p className='dash'>Dashboard </p>
        {houzes}
        {console.log(this.state.houses)}
        {console.log(this.state.morgage)}
        {console.log(this.state.rent)}
      </div>
    )
  }
}

export default Dashboard;