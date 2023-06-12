import './VideoHeader.css'
import video from '/MyVid.mp4'

export var videoID : string = "TopPageVideoID";
export function GetVideoHeader() {
    return (
      <>
        <div>
            <div className="videoElementParent">
                <video className="videoElement" loop muted autoPlay>
                    <source src={video}></source>
                </video>
            </div>
        </div>
      </>
    );
  }