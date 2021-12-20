import React, { Component } from 'react';

class SearchButton extends Component {
  handleClick = () => {
    alert("Search");
  };

  render() {
    return (
      <button onClick={this.handleClick}>Search</button>
    );
  }
}

export default SearchButton;
