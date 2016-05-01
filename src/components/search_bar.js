import React, { Component } from 'react';

class SearchBar extends Component {

  // states is a js object, use to record and react to user events

  // each class base component has its own states object

  // when component states is change, component immediately rerender

  // as also rerender its children as well

  constructor(props) {

    super(props);

    // initialize state object in constructor

    this.state = { term: '' };
  }

  // use setState except initialize state object
  // controled form element
  render() {
    return (
      <div>
        <input
          value={this.state.term}
          onChange={(event) => this.setState({ term: event.target.value })} />
        value of the input: { this.state.term }
      </div>
    );
  }

}

export default SearchBar;
