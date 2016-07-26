import React from 'react';
import Nav from './nav';

const AddCard = React.createClass({
  submitFunction: function (evt) {
    evt.preventDefault();
    let name = this.refs.name.value;
    let color = this.refs.color.value;
    let breed = this.refs.breed.value;
    let feature = this.refs.feature.value;
    let img = this.refs.img.value;
    let data = {
      name: name,
      color: color,
      breed: breed,
      feature: feature,
      img: img,
    };
    console.log(data);
  },
  render: function () {
    return (
      <div>
        <Nav />
        <form onSubmit={this.submitFunction}>
            <input type="text" placeholder="Enter a cat" ref="name"/>
            <input type="text" placeholder="Enter color" ref="color"/>
            <input type="text" placeholder="Enter breed" ref="breed"/>
            <input type="text" placeholder="Enter feature" ref="feature"/>
            <input type="text" placeholder="Enter picture url" ref="img"/>
            <input type="submit" value="Create"/>
          </form>
      </div>
      )
  }

});

export default AddCard;
