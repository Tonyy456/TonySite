import './App.css'
import { VideoHeader, videoID } from "./Components/VideoHeader"
import AboutMeDiv from './Components/AboutMe';
import Header from './Components/Header';
import { HeaderTab } from './Components/Header';

function App() {
  return (
    <>
      <Header items={[
        new HeaderTab("MainPage", window.location.href)
        ]}/>
      <VideoHeader />
      <AboutMeDiv />
    </>
  );
}

// Play video element on start.
var video_element = document.getElementById(videoID) as HTMLVideoElement;
if(video_element != null) video_element.play();

export default App
