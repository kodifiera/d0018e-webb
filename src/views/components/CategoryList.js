import React, { Component } from 'react';
import './CategoryList.css';

class Categories extends Component {
  constructor(){
    super();
    this.state = {
      categories: [],
    };
  }


componentDidMount() {
  fetch('http://localhost:3001/api/category')
  .then(results => {
    return results.json();
  }).then(data => {
    let x = data.map((y) => {
      return(
        <li key={y.ID}>
          <a href={"localhost:3002/products/" + y.ID}>{y.Name}</a>
        </li>
      )
    })
    this.setState({categories: x});
  })
}

render() {
  return (
    <div className="Categories">
      <h2>Upptäck kategorier</h2>
      <ul>
      {this.state.categories}
      </ul>
    </div>
  )
}
}
export default Categories;