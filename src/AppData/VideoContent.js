import React, { useEffect} from "react";
import { Link } from "react-scroll";
// import VideoContentImg from "../assets/VideoContent.png";
import ReactPlayer from "react-player";


const VideoContent = () => {
  // const [mainVideoContent, setMainVideoContent] = useState(false);

  // const MainVideoContentData = () => {
  //   setMainVideoContent(true);
  // };
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
          // onClick={MainVideoContentData}
          tabindex="0"
          style={{
            position: "absolute;",
            top: "0px;",
            left: "0px;",
            width: "100%;",
            height: "100%;",
            visibility: "visible;",
            overflow: "hidden;",
          }}
        >
          <ReactPlayer
            url="https://mpartial-data.s3.us-east-2.amazonaws.com/homepage.mp4"
            playing= {true}
            loop={true}
            width="1665px"
            height="936px"
            controls = {false}
            volume = '0'
            muted = {true}
            style={{
                  position: "absolute;",
                  width: "1665px;",
                  height: "936.562px;",
                  top: "-158.281px;",
                  left: "0px;",
                }}
          />

          {/* {mainVideoContent !== true ? (
            <img
              width="1665"
              height="936"
              style={{
                position: "absolute;",
                width: "1665px;",
                height: "936.562px;",
                top: "-158.281px;",
                left: "0px;",
              }}
              src={VideoContentImg}
              alt="Main Video Content"
            />
          ) : (
            // <iframe
            //   src="https://mpartial-data.s3.us-east-2.amazonaws.com/homepage.mp4?autoplay=1&controls=0"
            //   width="1665"
            //   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            //   height="936"
            //   frameborder="0"
            //   style={{
            //     position: "absolute;",
            //     width: "1665px;",
            //     height: "936.562px;",
            //     top: "-158.281px;",
            //     left: "0px;",
            //   }}
            // ></iframe>
            <ReactPlayer
            url="https://mpartial-data.s3.us-east-2.amazonaws.com/homepage.mp4"
            playing= {true}
            loop={true}
            width="1665px"
            height="936px"
            controls = {false}
            volume = '0'
            muted = {true}
          />
          )} */}
        </div>
      </div>
      <Link
        to="Ground-Truth-Data"
        spy={true}
        smooth={true}
        style={{ cursor: "pointer" }}
      >
        <div className="slider_down_btn"></div>
      </Link>
    </div>
  );
};

export default VideoContent;
