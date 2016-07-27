import React from 'react';
// import Aside from './aside';
import { Link } from 'react-router';

const AsideList = React.createClass({
  render: function () {
    // console.log(this.props.card.name);
    return (
      <li className="card-name">
        <h3><Link className="side-link" to={`/cat/${this.props.index}`}>{this.props.card.name}</Link></h3>
      </li>
    )
  }
});

export default AsideList;
