import React from 'react';
import './house.css'

const House = (props) => {
  return (
    <div>
      <img src={props.url} /> <br />
      Property Name: {props.name} <br />
      Address: {props.address} <br />
      City: {props.city} <br />
      State: {props.state} <br />
      Monthly Morgage: ${props.zip} <br/>
      Desired Rent: ${props.rent}
    </div>
  )
}

export default House;