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
          <p>Click on a cat to start exploring the collection!</p>
        </div>
      </div>
    )
  }
});

export default CardsMain;
