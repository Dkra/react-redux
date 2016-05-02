import React from 'react';

// ({video}) => set video variable from property video
// var {video} = { video: 'value'};

const VideoListItem = ({video, onVideoSelect}) => {
  const video_title = video.snippet.title;
  const video_src = video.snippet.thumbnails.default.url;
  return (
    <li className="list-group-item" onClick={ () => onVideoSelect(video) }>
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={video_src} />
        </div>
      </div>
      <div className="media-body">
        <div className="media-heading">{video_title}</div>
      </div>
    </li>
  );
}

export default VideoListItem;
