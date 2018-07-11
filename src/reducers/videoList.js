import Redux from 'redux';

const videoListReducer = (state = [], action) => {
  switch (action.type) {
    case 'CHANGE_VIDEO_LIST':
      return action.videos;

    default:
      return state;
  }
};

export default videoListReducer;
