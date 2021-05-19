import React,{useState} from "react";
import ReCAPTCHA from "react-google-recaptcha";

const ContactUs = () => {
    const [reCaptchaHit, setReCaptchaHit] = useState(false)

    const ReCaptchaHit = () =>{
      setReCaptchaHit(true)
    }
  return (
    <div id="Contact-US">
      <div className="mpartial_section contact_us css-1rwznfu-ContactUs">
        <div className="container">
          <div className="title center">
            <div className="row">
              <div className="col">
                <h2 className="section_title_text">Contact Us</h2>
              </div>
            </div>
          </div>
          <div className="form-holder">
            <form>
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <div className="form-group nogroup">
                    <input
                      type="text"
                      placeholder=""
                      name="name"
                      required=""
                      value=""
                    />
                    <div className="floating_label isFixed_false">
                      Your Name
                    </div>
                  </div>
                  <div className="form-group nogroup">
                    <input
                      type="email"
                      placeholder=""
                      name="email"
                      required=""
                      value=""
                    />
                    <div className="floating_label isFixed_false">Email</div>
                  </div>
                  <div className="form-group nogroup">
                    <input
                      type="text"
                      placeholder=""
                      min="1"
                      required=""
                      step="any"
                      value=""
                    />
                    <div className="floating_label isFixed_false">Cell</div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <div className="form-group nogroup">
                    <textarea placeholder="" required=""></textarea>
                    <div className="floating_label isFixed_false">
                      Write your message...
                    </div>
                  </div>
                </div>
              </div>
                <div className="lazyload-wrapper">
                  <div className="captcha_box">
                    <div style={{ width: "304px;", height: "78px;" }}>
                      <ReCAPTCHA sitekey="6Ld7gdsaAAAAALYKoB92pZuVI17gPZmb5oOrIBSM" onChange={ReCaptchaHit}/>
                    </div>
                  </div>
                </div>
              <div style={{ marginLeft: "42%" }}>
              {reCaptchaHit === true ?
                <button
                  type="submit"
                  className="btn btn-green"
                  value="Submit"
                >
                  <span>Submit</span>
                  <div className="loader show_false"></div>
                </button>
                : 
                <button
                type="submit"
                className="btn btn-green"
                value="Submit"
                disabled
              >
                <span>Submit</span>
              </button>
              }
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
