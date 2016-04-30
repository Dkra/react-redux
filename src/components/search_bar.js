import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    // return <input onChange={this.onInputChange} />;
    // More cleaner
    return <input onChange={(event) => console.log(event.target.value)} />;
  }

  // Normal
  // onInputChange(event) {
  //   console.log(event.target.value);
  // }

  // A bit better
  // onInputChange = (event) => {
  //   console.log(event.target.value);
  // }
}

export default SearchBar;
