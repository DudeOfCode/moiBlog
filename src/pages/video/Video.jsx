import React from 'react'
// import YouTube, { YouTubeProps } from 'react-youtube';
import ReactPlayer from "react-player";
import {
    MediaController,
    MediaControlBar,
    MediaTimeRange,
    MediaTimeDisplay,
    MediaVolumeRange,
    MediaPlaybackRateButton,
    MediaPlayButton,
    MediaSeekBackwardButton,
    MediaSeekForwardButton,
    MediaMuteButton,
    MediaFullscreenButton,
} from "media-chrome/react";


const Video = () => {


    return (
        <div>
            <div>
               
                {/* <YouTube videoId="2g811Eo7K8U" /> */}
                {/* <YouTube id="0oRozkpyXQ4" /> */}
                {/* <YouTube videoId="7k_Z50mhU3I" />
                <YouTube videoId="0oRozkpyXQ4" /> */}

                <MediaController
                    style={{
                        width: "100%",
                        aspectRatio: "16/9",
                    }}
                >
                    <ReactPlayer
                        slot="media"
                        src="https://stream.mux.com/maVbJv2GSYNRgS02kPXOOGdJMWGU1mkA019ZUjYE7VU7k"
                        controls={false}
                        style={{
                            width: "100%",
                            height: "100%",
                            "--controls": "none",
                        }}
                    ></ReactPlayer>
                    <MediaControlBar>
                        <MediaPlayButton />
                        <MediaSeekBackwardButton seekOffset={10} />
                        <MediaSeekForwardButton seekOffset={10} />
                        <MediaTimeRange />
                        <MediaTimeDisplay showDuration />
                        <MediaMuteButton />
                        <MediaVolumeRange />
                        <MediaPlaybackRateButton />
                        <MediaFullscreenButton />
                    </MediaControlBar>
                </MediaController>

                <ReactPlayer style={{
                    width: "100%",
                    height: "100%",
                    "--controls": "none",
                }} src='https://www.youtube.com/watch?v=LXb3EKWsInQ' controls />
            </div>
        </div>
    )
}

export default Video