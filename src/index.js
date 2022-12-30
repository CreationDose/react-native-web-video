/* eslint-disable react/prop-types */
import React from 'react';
import { View } from 'react-native';

const Video = (props) => {
    const handleMuted = () => {
        if (props.muted === false) alert('On browser a video cannot be played in unmuted mode, to played set muted prop on true');
        return props.muted
    }
    return (
        <View>
            <video
                src={props.source.uri}
                style={{
                    ...props.style,
                    objectFit: props.resizeMode === 'cover' ? 'cover' : 'contain'
                }}
                loop={props.repeat}
                onError={props.onError}
                onLoadedData={props.onLoad}
                onLoadStart={props.onLoadStart}
                autoPlay={!props.paused}
                muted={handleMuted()}
            />
        </View>
    );
};

export default Video;
