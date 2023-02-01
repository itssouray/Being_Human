import React from 'react';
import ReactPlayer from 'react-player';
import video from './Pexels Videos 2759477.mp4'





function IntroVideo(){

    return(
        <div className='intro-video'>
            <ReactPlayer width="100%" url='video/video.mp4' loop  muted playing={true} />   
        </div>
    )
}


export default IntroVideo;