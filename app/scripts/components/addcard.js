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
        <form className="login-form" onSubmit={this.submitFunction}>
            <h2>Add a Cat</h2>
            <input className="login-input" type="text" placeholder="Enter a cat" ref="name"/>
            <input className="login-input" type="text" placeholder="Enter color" ref="color"/>
            <input className="login-input" type="text" placeholder="Enter breed" ref="breed"/>
            <input className="login-input" type="text" placeholder="Enter feature" ref="feature"/>
            <input className="login-input" type="text" placeholder="Enter picture url" ref="img"/>
            <input className="login-submit" type="submit" value="Create"/>
          </form>
      </div>
      )
  }

});

export default AddCard;
