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
import "./Video.css"

const Video = () => {


    return (
        <div className="off-lie">
            <div className="shift">

                {/* <YouTube videoId="2g811Eo7K8U" /> */}
                {/* <YouTube id="0oRozkpyXQ4" /> */}
                {/* <YouTube videoId="7k_Z50mhU3I" />
                <YouTube videoId="0oRozkpyXQ4" /> */}
                <div>
                    <MediaController

                        style={{
                            width: "70%",
                            aspectRatio: "16/9",
                            marginLeft: "30vh",
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
                </div>

                <div className='small-vid'>
                    <div>
                        <ReactPlayer style={{
                            width: "20%",
                            height: "auto",
                            "--controls": "none",
                        }} src='https://www.youtube.com/watch?v=LXb3EKWsInQ' controls />
                    </div>
                    <span>
                        <ReactPlayer style={{
                            width: "20%",
                            height: "auto",
                            "--controls": "none",
                        }} src='https://www.youtube.com/watch?v=LXb3EKWsInQ' controls />
                    </span>
                    <span>
                        <ReactPlayer style={{
                            width: "20%",
                            height: "auto",
                            "--controls": "none",
                        }} src='https://www.youtube.com/watch?v=LXb3EKWsInQ' controls />
                    </span>



                </div>
                <div className='small-vid'>
                    <div>
                        <ReactPlayer style={{
                            width: "20%",
                            height: "auto",
                            "--controls": "none",
                        }} src='https://www.youtube.com/watch?v=LXb3EKWsInQ' controls />
                    </div>
                    <span>
                        <ReactPlayer style={{
                            width: "20%",
                            height: "auto",
                            "--controls": "none",
                        }} src='https://www.youtube.com/watch?v=LXb3EKWsInQ' controls />
                    </span>
                    <span>
                        <ReactPlayer style={{
                            width: "20%",
                            height: "auto",
                            "--controls": "none",
                        }} src='https://www.youtube.com/watch?v=LXb3EKWsInQ' controls />
                    </span>



                </div>
                <div className='small-vid'>
                    <div>
                        <ReactPlayer style={{
                            width: "20%",
                            height: "auto",
                            "--controls": "none",
                        }} src='https://www.youtube.com/watch?v=LXb3EKWsInQ' controls />
                    </div>
                    <span>
                        <ReactPlayer style={{
                            width: "20%",
                            height: "auto",
                            "--controls": "none",
                        }} src='https://www.youtube.com/watch?v=LXb3EKWsInQ' controls />
                    </span>
                    <span>
                        <ReactPlayer style={{
                            width: "20%",
                            height: "auto",
                            "--controls": "none",
                        }} src='https://www.youtube.com/watch?v=LXb3EKWsInQ' controls />
                    </span>

                </div>

            </div>
        </div>
    )
}

export default Video