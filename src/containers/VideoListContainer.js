import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';

const mapStateToProps = state => ({
  videos: state.videoList,
});

const mapDispatchToProps = dispatch => ({
  handleVideoListEntryTitleClick: () => dispatch(changeVideo()),
});

const VideoListContainer = connect(mapStateToProps, mapDispatchToProps)(VideoList);

export default VideoListContainer;
