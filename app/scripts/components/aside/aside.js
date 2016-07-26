import React from 'react';
import AsideList from './asideindividual';
import cats from '../../catcollection';

const Aside = React.createClass({

  render: function () {
    let catsArr = cats.map(function(item, i, arr) {
      return <AsideList key={i} index={i} card={{name: item.Name}}/>
    })
    return (
      <ul>
        {catsArr}
      </ul>
    )
  }
});

export default Aside;
