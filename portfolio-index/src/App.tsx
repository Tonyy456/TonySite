import './App.css'
import MyHeader from './components/header/Header'
function App() {
  return (
    <div className='w-screen h-screen bg-gray'>
      <MyHeader />
    </div>
  )
}

// Play video element on start.
// var video_element = document.getElementById(videoID) as HTMLVideoElement;
// if(video_element != null) video_element.play();

export default App
