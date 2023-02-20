import React, { useEffect } from 'react';

import Video from './index';

export default {
  title: 'Video',
  component: Video,
}

const Template = (args) => {
  useEffect(() => {
    if (args.muted === false) console.warn('On browser a video cannot be played in unmuted mode, to played set muted prop on true. For more details about it: https://developer.mozilla.org/en-US/docs/Web/Media/Autoplay_guide#:~:text=Autoplay%20blocking%20is%20not%20applied%20to%20%3Cvideo%3E%20elements%20when%20the%20source%20media%20does%20not%20have%20an%20audio%20track%2C%20or%20if%20the%20audio%20track%20is%20muted.%20Media%20with%20an%20active%20audio%20track%20are%20considered%20to%20be%20audible%2C%20and%20autoplay%20blocking%20applies%20to%20them.%20Inaudible%20media%20are%20not%20affected%20by%20autoplay%20blocking.');
  }, [])

  return (<Video {...args} />);
}

export const Story = Template.bind({});
Story.args = {
  source: {
    uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
  }
};
