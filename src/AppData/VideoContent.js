import React,{useEffect} from "react";

const VideoContent = () => {
  useEffect(() => {
    var navbar = document.querySelector("nav");
    window.onscroll = function () {
      // pageYOffset or scrollY
      if (window.pageYOffset > 920) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };
  }, []);
  return (
      <div className="home_video_background">
        <div className="lazyload-wrapper">
          <div
            className="BackgroundVideo background_video css-1y0iy9d-Slider"
            tabindex="0"
            style={{position: 'absolute;' , top: '0px;' , left: '0px;' , width: '100%;' , height: '100%;' , visibility: 'visible;' , overflow: 'hidden;'}}
          >
            <iframe
              src="https://mpartial-data.s3.us-east-2.amazonaws.com/homepage.mp4?autoplay=1&mute=1"
              width="1665"
              allow="autoplay; fullscreen"
              height="936"
              frameborder="0"
              style={{position: 'absolute;' , width: '1665px;' , height: '936.562px;' , top: '-158.281px;'  , left: '0px;'}}>
              </iframe>
          </div>
        </div>
        <div className="slider_down_btn"></div>

      </div>
  );
};

export default VideoContent;
