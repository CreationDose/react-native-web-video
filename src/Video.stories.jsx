import React from 'react';

import Video from './index';

export default {
  title: 'Video',
  component: Video,
}

const Template = (args) => {
  const handleMuted = () => {
    if (args.muted === false ) console.warn('On browser a video cannot be played in unmuted mode, to played set muted prop on true');
    return args.muted
}
  return (<Video muted={handleMuted()} {...args} />);
}

export const Story = Template.bind({});
Story.args = {
  source: {
    uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
  },
  muted: false,
  paused: false,
};
