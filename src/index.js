import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const YOUTUBE_API_KEY = 'AIzaSyAtvhKcOUVY0ED-JSm-XeEtcwX1XBxBmk8';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null,
      term: 'surfboards'
    };

    this.videoSearch(this.state.term);
  }
  videoSearch(term) {
    YTSearch({key: YOUTUBE_API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }
  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300)
    return (
      <div>
        <SearchBar videoSearch={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          videos={this.state.videos}
          onVideoSelect={(selectedVideo) => this.setState({selectedVideo: selectedVideo})
        } />
      </div>

    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
