import React from 'react';
import PropTypes from 'prop-types';

const Video = ({
    source,
    repeat,
    style,
    resizeMode,
    onError,
    onLoad,
    onLoadStart,
    paused
}) => {
    return (
        <div>
            <video
                src={source.uri}
                style={{
                    ...style,
                    objectFit: resizeMode === 'cover' ? 'cover' : 'contain'
                }}
                loop={repeat}
                onError={onError}
                onLoadedData={onLoad}
                onLoadStart={onLoadStart}
                autoPlay={!paused}
                muted
            />
        </div>
    );
};

Video.propTypes = {
    source: PropTypes.shape({
        uri: PropTypes.string.isRequired
    }),
    style: PropTypes.object,
    resizeMode: PropTypes.oneOf(['cover', 'contain']),
    repeat: PropTypes.bool,
    onError: PropTypes.func,
    onLoad: PropTypes.func,
    onLoadStart: PropTypes.func,
    paused: PropTypes.bool,
}

export default Video;
