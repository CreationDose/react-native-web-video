import React from 'react';

const Video = props => {
    return (
        <div>
            <video
                src={props.source.uri}
                style={props.style}    
                autoPlay
                muted
            />
        </div>
    )
}

export default Video;
