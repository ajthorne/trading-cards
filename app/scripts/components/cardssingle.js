import React from 'react';
import cats from '../catcollection';
import { Link } from 'react-router';
import Nav from './nav';
import Aside from './aside/aside';


const CardSingle = React.createClass({
  render: function () {
    console.log(this.props);
    let i = this.props.params.id
    return (
      <div>
      <Nav />
      <Aside />
      <div className="cat-single-container">
          <h2>{cats[i].Name}</h2>
          <img src={cats[i].imgUrl} />
          <div className="cat-single-copy">
            <p><span>Color: </span>{cats[i].Color}</p>
            <p><span>Breed: </span>{cats[i].Breed}</p>
            <p><span>Distinguishing Feature: </span>{cats[i].Feature}</p>
          </div>
        </div>
      </div>
    )
  }
});

export default CardSingle;
