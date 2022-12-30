/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const Video = (props) => {
    return (
        <div>
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
                muted
            />
        </div>
    );
};

Video.PropTypes = {
    src: PropTypes.string.isRequired,
    style: PropTypes.object,
    loop: PropTypes.bool,
    onError: PropTypes.func,
    onLoadedData: PropTypes.func,
    onLoadStart: PropTypes.func,
    autoPlay: PropTypes.bool,
    muted: PropTypes.bool
}

export default Video;
