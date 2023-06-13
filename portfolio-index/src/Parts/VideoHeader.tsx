import './VideoHeader.css'
import video from '/MyVid.mp4'

export var videoID : string = "TopPageVideoID";
export function VideoHeader() {
    return (
      <>
        <div>
            <div className="videoElementParent">
                <video className="videoElement" loop={true} autoPlay={true} muted={true}>
                    <source src={video}></source>
                </video>
            </div>
        </div>
      </>
    );
  }