import React from 'react';
import ReactDOM from 'react-dom';
// . stand for this file location
import SearchBar from './components/search_bar';

const YOUTUBE_API_KEY = 'AIzaSyAtvhKcOUVY0ED-JSm-XeEtcwX1XBxBmk8';
// Create a new Component - produce html

//A Component Class
// const App = function() {
//   return <div>123</div>;
// }

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}


// Take this component's generated HTML and put it
// on the page (in the DOM)

// should pass a instance
// App is a class
// <App></App> is a instances & is equal to </App>
ReactDOM.render(<App />, document.querySelector('.container'));
