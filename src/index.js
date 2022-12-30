/* eslint-disable react/prop-types */
import React from 'react';
import { View } from 'react-native';

const Video = (props) => {
    return (
        <View>
             <video
                src={props.source.uri}
                style={{
                    ...props.style,
                    objectFit: props.resizeMode==='cover'?'cover':'contain' 
                }}
                loop={props.repeat}   
                onError={props.onError}
                onLoadedData={props.onLoad}
                onLoadStart={props.onLoadStart}
                autoPlay={!props.paused}
                muted
            />
        </View>
    );
};

export default Video;
