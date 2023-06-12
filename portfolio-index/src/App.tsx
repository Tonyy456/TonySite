import './App.css'
import { GetVideoHeader, videoID } from "./VideoHeader/VideoHeader"

function App() {
  var video_parent : JSX.Element = GetVideoHeader();
  return (
    <>
      {video_parent}
    </>
  );
}

var video_element = document.getElementById(videoID) as HTMLVideoElement;
if(video_element != null) video_element.play();

export default App
