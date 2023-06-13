import './App.css'
import { VideoHeader, videoID } from "./Parts/VideoHeader"
import AboutMeDiv from './Parts/AboutMe';

function App() {
  return (
    <>
      <VideoHeader />
      <AboutMeDiv />
    </>
  );
}

// Play video element on start.
var video_element = document.getElementById(videoID) as HTMLVideoElement;
if(video_element != null) video_element.play();

export default App
