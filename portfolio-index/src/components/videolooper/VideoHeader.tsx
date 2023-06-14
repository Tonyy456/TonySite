import './VideoHeader.css'
import video from '/MyVid.mp4'

export var videoID : string = "TopPageVideoID";
export function VideoHeader() {
  console.log("VideoHeader");
    return (
      <>
        <div className="videoElementParent">
            <video className="videoElement" loop={true} autoPlay={true} muted={true}>
                <source src={video}></source>
            </video>
        </div>
      </>
    );
  }