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
        <section className="off-lie">
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
                    <span>
                        <ReactPlayer style={{
                            width: "20%",
                            height: "auto",
                            "--controls": "none",
                        }} src='https://vimeo.com/80815566?share=copy' controls />
                    </span>
                    <span>
                        <ReactPlayer style={{
                            width: "20%",
                            height: "auto",
                            "--controls": "none",
                        }} src='https://vimeo.com/1140132' controls />
                    </span>

                    <span>
                        <ReactPlayer style={{
                            width: "20%",
                            height: "auto",
                            "--controls": "none",
                        }} src='https://vimeo.com/100076860?share=copy' controls />
                    </span>

                </div>
                <div className='small-vid'>
                    <span>
                        <ReactPlayer style={{
                            width: "20%",
                            height: "auto",
                            "--controls": "none",
                        }} src='https://vimeo.com/80815568?share=copy' controls />
                    </span>
                    <span>
                        <ReactPlayer style={{
                            width: "20%",
                            height: "auto",
                            "--controls": "none",
                        }} src='https://vimeo.com/80815569' controls />
                    </span>
                    <span>
                        <ReactPlayer style={{
                            width: "20%",
                            height: "auto",
                            "--controls": "none",
                        }} src='https://vimeo.com/79415037?share=copy' controls />
                    </span>

                </div>
                <div className='small-vid'>
                    <span>
                        <ReactPlayer style={{
                            width: "20%",
                            height: "auto",
                            "--controls": "none",
                        }} src='https://vimeo.com/112346303?share=copy' controls />
                    </span>
                    <span>
                        <ReactPlayer style={{
                            width: "20%",
                            height: "auto",
                            "--controls": "none",
                        }} src='https://vimeo.com/11722925?share=copy' controls />
                    </span>
                    <span>
                        <ReactPlayer style={{
                            width: "20%",
                            height: "auto",
                            "--controls": "none",
                        }} src='https://vimeo.com/337844840?fl=wc' controls />
                    </span>
                </div>
            </div>
        </section>
    )
}

export default Video