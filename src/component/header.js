
import React from 'react'

const Header = () => {
    return (
        <>
        <div className="main_header">
          <nav className="navbar navbar-expand-md">
              <div className="container"><a href="/" className="mpartial_logo navbar-brand">
                  <img src="" alt="logo"/>
                  </a><button aria-label="Toggle navigation" type="button" className="mr-2 navbar-toggler"><span className="navbar-toggler-icon"></span></button>
                  <div className="collapse navbar-collapse">
                      <ul className="ml-auto main_navbar navbar-nav">
                      <li className="nav-item"><a aria-current="page" className="nav-link active" href="/#Ground-Truth-Data">Ground-Truth Data</a></li>
                      <li className="nav-item"><a aria-current="page" className="nav-link active" href="/#How-It-Works">How It Works</a></li>
                      <li className="nav-item"><a aria-current="page" className="nav-link active" href="/#Fee-Structure">Fee Structure</a></li>
                      <li className="nav-item"><a aria-current="page" className="nav-link active" href="/#Example-Deliverables">Example Deliverables</a></li>
                      <li className="nav-item"><a className="nav-link" href="/order">Submission Portal</a></li>
                      <li className="nav-item"><a aria-current="page" className="nav-link active" href="/#Contact-US">Contact Us</a></li>
                      <li className="nav-item"><a href="/login"><button className="btn btn-primary login_btn">Sign In</button></a></li>
                      </ul>
                      </div>
                      </div>
                      </nav>
                      </div>
                      
                          {/* <div className="home_video_background">
                              <div className="lazyload-wrapper">
                                  <div className="BackgroundVideo background_video css-1y0iy9d-Slider" tabindex="0"
                                 style={{ position: 'absolute;' , top: '0px;'  , left: '0px;' ,  width: '100%;'  , height: '100%;' , visibility: 'visible;' , overflow: 'hidden;'}}
                                   >
                                      <video src="https://mpartial-data.s3.us-east-2.amazonaws.com/homepage.mp4" preload="auto" poster="" loop="" playsinline="" width="1665" height="936" 
                                      style={{position: 'absolute;' , width: '1665px;' , height: '936.562px;' , top:'-174.281px' , left: '0px'}}
                                      ></video>
                                      </div></div><div className="main_banner_text"></div><div className="slider_down_btn"></div></div> */}

                      </>
    )
}

export default Header
