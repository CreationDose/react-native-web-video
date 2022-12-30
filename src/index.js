/* eslint-disable react/prop-types */
import React from 'react';

const Video = (props) => {

    return (
        <div>
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
        </div>
    );
};

export default Video;