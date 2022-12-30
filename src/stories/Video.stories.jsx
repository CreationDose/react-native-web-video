import React from 'react';

import Video from '../index';

export default {
  title: 'Video',
  component: Video,
}

const Template = (args) => <Video {...args} />;

export const Story = Template.bind({});
Story.args = {
  source: {
    uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
  }
};
