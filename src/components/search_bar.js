import React, { Component } from 'react';

// Functional Component - ( Dumb Component )
// const SearchBar = () => {
//   return <input />;
// };

// Class base Component - ( More Intelligence )
// Access all functionality from React.Component class
class SearchBar extends Component {
  render() {
    return <input />;
  }
}

// Import SearchBar File will default get SearchBar function
export default SearchBar;
