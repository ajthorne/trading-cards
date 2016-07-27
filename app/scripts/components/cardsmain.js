import React from 'react';
import Nav from './nav';
import Aside from './aside/aside';

const CardsMain = React.createClass({
  render: function () {
    return (
      <div>
        <Nav />
        <Aside />
        <div>
          <h1 className="home-text">Famous Internet Cats</h1>
          <h2 className="home-text">Click on a cat to start exploring the collection!</h2>
        </div>
      </div>
    )
  }
});

export default CardsMain;
