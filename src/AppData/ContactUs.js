import React from 'react'

const ContactUs = () => {
    return (
        <div id="Contact-US">
            <div className="mpartial_section contact_us css-1rwznfu-ContactUs">
                <div className="container">
                    <div className="title center">
                        <div className="row"><div className="col">
                            <h2 className="section_title_text">Contact Us</h2></div>
                            </div>
                            </div>
                            <div className="form-holder">
                                <form>
                                    <div className="row"><div className="col-md-6 col-sm-12">
                                <div className="form-group nogroup">
                                    <input type="text" placeholder="" name="name" required="" value="" />
                                    <div className="floating_label isFixed_false">Your Name</div></div>
                                    <div className="form-group nogroup">
                                        <input type="email" placeholder="" name="email" required="" value=""/>
                                        <div className="floating_label isFixed_false">Email</div></div>
                                        <div className="form-group nogroup">
                                            <input type="text" placeholder="" min="1" required="" step="any" value=""/><div className="floating_label isFixed_false">Cell</div></div></div><div className="col-md-6 col-sm-12">
                                                <div className="form-group nogroup">
                                                    <textarea placeholder="" required=""></textarea><div className="floating_label isFixed_false">Write your message...</div></div>
                                                    </div>
                                                    </div>
                                                    <div className="lazyload-wrapper">
                                                        <div className="captcha_box">
                                                                <div style={{width: '304px;' , height: '78px;'}}>
                                                                    <iframe title="reCAPTCHA"
                                                                     src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6Lc46PQUAAAAAMEJkx-a4pfm2t5DMXhlV0Xaaix2&amp;co=aHR0cHM6Ly9tcGFydGlhbC5pbzo0NDM.&amp;hl=en&amp;type=image&amp;v=f-bnnOuahiYKuei7dmAd3kgv&amp;theme=light&amp;size=normal&amp;badge=bottomright&amp;cb=1ahnhsqzhw50" width="304" height="78" 
                                                                     role="presentation" name="a-8yewrvigc5s0" frameborder="0"
                                                                      scrolling="no" 
                                                                      sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox">
                                                                        </iframe>                 
                                                            </div>
                                                            </div> 
                                                            </div>
                                                            <button type="submit" className="btn btn-green" value="Submit" id="formButton" disabled=""><span>Submit</span><div className="loader show_false"></div></button>
                                                            </form>
                                                            </div>
                                                            </div>
                                                            </div>
                                                            </div>
    )
}

export default ContactUs
